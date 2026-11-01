import vm from 'node:vm';
import ts from 'typescript';

export const compileCommonJs = (source, filename, requireModule = () => ({})) => {
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
    URL,
  })(module.exports, requireModule, module);

  return module.exports;
};
