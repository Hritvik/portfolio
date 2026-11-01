import React from 'react';
import type { CaseStudy } from '../../types';
import DesktopCaseStudy from './DesktopCaseStudy';
import MobileCaseStudy from './MobileCaseStudy';

const CaseStudyPage: React.FC<{ study: CaseStudy }> = ({ study }) => (
  <>
    <div className="desktop-presentation"><DesktopCaseStudy study={study} /></div>
    <div className="mobile-presentation"><MobileCaseStudy study={study} /></div>
  </>
);

export default CaseStudyPage;
