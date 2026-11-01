export type Route =
  | { kind: 'home' }
  | { kind: 'work' }
  | { kind: 'case-study'; slug: string }
  | { kind: 'about' }
  | { kind: 'contact' }
  | { kind: 'not-found' };

const caseStudyPattern = /^\/work\/([^/]+)\/?$/;

export const resolveRoute = (pathname: string): Route => {
  const normalized = pathname.length > 1 ? pathname.replace(/\/$/, '') : pathname;

  if (normalized === '/') return { kind: 'home' };
  if (normalized === '/work') return { kind: 'work' };
  if (normalized === '/about') return { kind: 'about' };
  if (normalized === '/contact') return { kind: 'contact' };

  const caseStudyMatch = normalized.match(caseStudyPattern);
  if (caseStudyMatch) return { kind: 'case-study', slug: caseStudyMatch[1] };

  return { kind: 'not-found' };
};
