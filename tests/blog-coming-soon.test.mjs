import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import vm from 'node:vm';
import React from 'react';
import ts from 'typescript';

const compileCommonJs = (source, filename, requireModule) => {
  const output = ts.transpileModule(source, {
    compilerOptions: {
      esModuleInterop: true,
      jsx: ts.JsxEmit.React,
      module: ts.ModuleKind.CommonJS,
      target: ts.ScriptTarget.ES2022,
    },
    fileName: filename,
  }).outputText;
  const module = { exports: {} };

  vm.runInNewContext(`(function (exports, require, module) { ${output}\n})`, {
    React,
  })(module.exports, requireModule, module);

  return module.exports;
};

const countStatuses = (node) => {
  if (!React.isValidElement(node)) return 0;

  const ownStatus = node.props.className === 'blog-status'
    && node.props.children === 'Coming Soon' ? 1 : 0;
  return ownStatus + React.Children.toArray(node.props.children)
    .reduce((total, child) => total + countStatuses(child), 0);
};

test('writing cards are clearly labelled as coming soon', async () => {
  const [blogSource, postsSource] = await Promise.all([
    readFile(new URL('../src/components/Blog.tsx', import.meta.url), 'utf8'),
    readFile(new URL('../src/data/blogPosts.ts', import.meta.url), 'utf8'),
  ]);
  const postsModule = compileCommonJs(postsSource, 'blogPosts.ts', () => ({}));
  const blogModule = compileCommonJs(blogSource, 'Blog.tsx', (specifier) => {
    if (specifier === 'react') return React;
    if (specifier === '../data/blogPosts') return postsModule;
    throw new Error(`Unexpected import: ${specifier}`);
  });
  const renderedBlog = React.createElement(blogModule.default).type();

  assert.equal(countStatuses(renderedBlog), postsModule.blogPosts.length);
});
