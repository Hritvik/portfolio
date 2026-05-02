import React from 'react';

const About: React.FC = () => {
  const details = [
    { label: 'Location', value: 'San Francisco, CA' },
    { label: 'Experience', value: '5+ years' },
    { label: 'Focus', value: 'Full-stack Development' },
    { label: 'Languages', value: 'JavaScript, TypeScript, Python, Go' },
    { label: 'Technologies', value: 'React, Node.js, Docker, AWS' },
    { label: 'Education', value: 'B.S. Computer Science' },
    { label: 'Available', value: 'Freelance & Full-time' },
  ];

  return (
    <section className="section">
      <div className="container">
        <div className="about-grid">
          <div className="about-content">
            <h3 className="serif text-2xl mb-4">About Me</h3>
            <p className="text-base mb-4">
              I'm a full-stack developer with a passion for building scalable, 
              user-focused applications. My journey in tech has taken me from 
              startups to enterprise environments, where I've developed expertise 
              in both frontend and backend technologies.
            </p>
            <p className="text-base mb-4">
              I specialize in React-based applications and microservices architecture, 
              with a keen eye for clean code and thoughtful user experiences. 
              When I'm not coding, you'll find me exploring new technologies, 
              contributing to open source, or sharing knowledge through technical writing.
            </p>
            <p className="text-base mb-4">
              I believe in the power of continuous learning and am always excited 
              to tackle complex challenges that push the boundaries of what's possible 
              with modern web technologies.
            </p>
          </div>
          
          <div className="about-details">
            {details.map((detail, index) => (
              <div key={index} className="about-detail-row">
                <div className="about-detail-label">{detail.label}</div>
                <div className="about-detail-value">{detail.value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
