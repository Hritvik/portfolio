import type { Project } from '../types';

export const projects: Project[] = [
  {
    id: '1',
    name: 'E-Commerce API Gateway',
    desc: 'Microservices-based API gateway with authentication, rate limiting, and service discovery for high-traffic e-commerce platform.',
    type: 'backend',
    org: 'org',
    tags: ['Node.js', 'Express', 'Redis', 'Docker', 'Kubernetes'],
    diagram: 'ecommerce-gateway',
    github: 'https://github.com/example/ecommerce-gateway'
  },
  {
    id: '2',
    name: 'Real-time Analytics Dashboard',
    desc: 'Interactive dashboard with WebSocket connections for live data visualization and business metrics tracking.',
    type: 'frontend',
    org: 'org',
    tags: ['React', 'TypeScript', 'D3.js', 'WebSocket', 'Chart.js'],
    github: 'https://github.com/example/analytics-dashboard'
  },
  {
    id: '3',
    name: 'Task Management Mobile App',
    desc: 'Cross-platform mobile application for task management with offline sync and collaborative features.',
    type: 'android',
    org: 'personal',
    tags: ['React Native', 'Firebase', 'Redux', 'Offline First'],
    github: 'https://github.com/example/task-app'
  },
  {
    id: '4',
    name: 'Distributed Message Queue',
    desc: 'Scalable message queue system with dead letter queues, retry mechanisms, and monitoring capabilities.',
    type: 'backend',
    org: 'personal',
    tags: ['Go', 'RabbitMQ', 'PostgreSQL', 'Grafana'],
    diagram: 'message-queue',
    github: 'https://github.com/example/message-queue'
  },
  {
    id: '5',
    name: 'Portfolio Website Generator',
    desc: 'Static site generator for developer portfolios with customizable themes and markdown support.',
    type: 'frontend',
    org: 'personal',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'MDX'],
    github: 'https://github.com/example/portfolio-gen'
  },
  {
    id: '6',
    name: 'Social Media Content Scheduler',
    desc: 'Mobile app for scheduling and automating social media posts across multiple platforms with analytics.',
    type: 'android',
    org: 'org',
    tags: ['Flutter', 'Dart', 'REST API', 'SQLite'],
    github: 'https://github.com/example/social-scheduler'
  },
  {
    id: '7',
    name: 'Authentication Microservice',
    desc: 'JWT-based authentication service with OAuth2 integration, multi-factor auth, and session management.',
    type: 'backend',
    org: 'org',
    tags: ['Python', 'FastAPI', 'JWT', 'OAuth2', 'Redis'],
    diagram: 'auth-service',
    github: 'https://github.com/example/auth-service'
  },
  {
    id: '8',
    name: 'Weather Forecast Dashboard',
    desc: 'Beautiful weather dashboard with location-based forecasts, historical data, and interactive maps.',
    type: 'frontend',
    org: 'personal',
    tags: ['Vue.js', 'Mapbox', 'OpenWeather API', 'PWA'],
    github: 'https://github.com/example/weather-dashboard'
  },
  {
    id: '9',
    name: 'Fitness Tracking App',
    desc: 'Comprehensive fitness tracking app with workout plans, progress tracking, and social features.',
    type: 'android',
    org: 'personal',
    tags: ['React Native', 'Node.js', 'MongoDB', 'Express'],
    github: 'https://github.com/example/fitness-app'
  },
  {
    id: '10',
    name: 'Video Processing Pipeline',
    desc: 'Distributed video processing system with transcoding, thumbnail generation, and CDN integration.',
    type: 'backend',
    org: 'org',
    tags: ['Go', 'FFmpeg', 'AWS S3', 'Redis', 'Docker'],
    diagram: 'video-pipeline',
    github: 'https://github.com/example/video-pipeline'
  }
];
