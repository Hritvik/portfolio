import type { DiagramData } from '../types';

export const diagrams: DiagramData[] = [
  {
    id: 'ecommerce-gateway',
    name: 'E-Commerce API Gateway Architecture',
    nodes: [
      { id: '1', type: 'input', data: { label: 'Client Apps' }, position: { x: 100, y: 100 } },
      { id: '2', data: { label: 'API Gateway' }, position: { x: 300, y: 100 } },
      { id: '3', data: { label: 'Auth Service' }, position: { x: 500, y: 50 } },
      { id: '4', data: { label: 'Product Service' }, position: { x: 500, y: 150 } },
      { id: '5', data: { label: 'Order Service' }, position: { x: 500, y: 250 } },
      { id: '6', data: { label: 'Redis Cache' }, position: { x: 300, y: 200 } },
      { id: '7', data: { label: 'PostgreSQL' }, position: { x: 700, y: 150 } },
    ],
    edges: [
      { id: 'e1-2', source: '1', target: '2' },
      { id: 'e2-3', source: '2', target: '3' },
      { id: 'e2-4', source: '2', target: '4' },
      { id: 'e2-5', source: '2', target: '5' },
      { id: 'e2-6', source: '2', target: '6' },
      { id: 'e3-7', source: '3', target: '7' },
      { id: 'e4-7', source: '4', target: '7' },
      { id: 'e5-7', source: '5', target: '7' },
    ]
  },
  {
    id: 'message-queue',
    name: 'Distributed Message Queue System',
    nodes: [
      { id: '1', type: 'input', data: { label: 'Producers' }, position: { x: 100, y: 150 } },
      { id: '2', data: { label: 'Message Queue' }, position: { x: 300, y: 150 } },
      { id: '3', data: { label: 'Worker 1' }, position: { x: 500, y: 50 } },
      { id: '4', data: { label: 'Worker 2' }, position: { x: 500, y: 150 } },
      { id: '5', data: { label: 'Worker 3' }, position: { x: 500, y: 250 } },
      { id: '6', data: { label: 'Dead Letter Queue' }, position: { x: 300, y: 300 } },
      { id: '7', data: { label: 'PostgreSQL' }, position: { x: 700, y: 150 } },
    ],
    edges: [
      { id: 'e1-2', source: '1', target: '2' },
      { id: 'e2-3', source: '2', target: '3' },
      { id: 'e2-4', source: '2', target: '4' },
      { id: 'e2-5', source: '2', target: '5' },
      { id: 'e2-6', source: '2', target: '6' },
      { id: 'e3-7', source: '3', target: '7' },
      { id: 'e4-7', source: '4', target: '7' },
      { id: 'e5-7', source: '5', target: '7' },
    ]
  },
  {
    id: 'auth-service',
    name: 'Authentication Microservice',
    nodes: [
      { id: '1', type: 'input', data: { label: 'User Request' }, position: { x: 100, y: 150 } },
      { id: '2', data: { label: 'Auth API' }, position: { x: 300, y: 150 } },
      { id: '3', data: { label: 'JWT Service' }, position: { x: 500, y: 100 } },
      { id: '4', data: { label: 'OAuth2 Provider' }, position: { x: 500, y: 200 } },
      { id: '5', data: { label: 'Redis Session' }, position: { x: 300, y: 250 } },
      { id: '6', data: { label: 'User Database' }, position: { x: 700, y: 150 } },
      { id: '7', data: { label: 'MFA Service' }, position: { x: 500, y: 300 } },
    ],
    edges: [
      { id: 'e1-2', source: '1', target: '2' },
      { id: 'e2-3', source: '2', target: '3' },
      { id: 'e2-4', source: '2', target: '4' },
      { id: 'e2-5', source: '2', target: '5' },
      { id: 'e3-6', source: '3', target: '6' },
      { id: 'e4-6', source: '4', target: '6' },
      { id: 'e2-7', source: '2', target: '7' },
    ]
  },
  {
    id: 'video-pipeline',
    name: 'Video Processing Pipeline',
    nodes: [
      { id: '1', type: 'input', data: { label: 'Video Upload' }, position: { x: 100, y: 150 } },
      { id: '2', data: { label: 'Upload Service' }, position: { x: 300, y: 150 } },
      { id: '3', data: { label: 'Transcoding Queue' }, position: { x: 500, y: 150 } },
      { id: '4', data: { label: 'FFmpeg Workers' }, position: { x: 700, y: 100 } },
      { id: '5', data: { label: 'Thumbnail Generator' }, position: { x: 700, y: 200 } },
      { id: '6', data: { label: 'AWS S3 Storage' }, position: { x: 900, y: 150 } },
      { id: '7', data: { label: 'CDN' }, position: { x: 1100, y: 150 } },
    ],
    edges: [
      { id: 'e1-2', source: '1', target: '2' },
      { id: 'e2-3', source: '2', target: '3' },
      { id: 'e3-4', source: '3', target: '4' },
      { id: 'e3-5', source: '3', target: '5' },
      { id: 'e4-6', source: '4', target: '6' },
      { id: 'e5-6', source: '5', target: '6' },
      { id: 'e6-7', source: '6', target: '7' },
    ]
  }
];
