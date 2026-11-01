import React from 'react';

const Node: React.FC<{ children: React.ReactNode; tone?: string }> = ({ children, tone = '' }) => (
  <div className={`map-node ${tone}`}>{children}</div>
);

const Arrow = () => <div className="map-arrow" aria-hidden="true">→</div>;

export const SupportAutomationMap = () => {
  const captionId = React.useId();
  return (
  <figure className="system-map support-map" aria-labelledby={captionId}>
    <div className="map-lane">
      <span className="map-lane-label">Policy</span>
      <Node tone="policy">Business SOP</Node><Arrow /><Node tone="policy">Validated workflow config</Node>
    </div>
    <div className="map-lane map-lane-wide">
      <span className="map-lane-label">Ticket</span>
      <Node>Kafka intake</Node><Arrow /><Node>Ticket context</Node><Arrow /><Node tone="control">Phase controller</Node><Arrow /><Node>Human handoff</Node>
    </div>
    <div className="map-branch-grid">
      <Node>Entity A<br />step progress</Node>
      <Node>Entity B<br />step progress</Node>
      <Node>Entity N<br />step progress</Node>
    </div>
    <div className="map-lane map-lane-wide">
      <span className="map-lane-label">Recovery</span>
      <Node tone="failure">Retry / DLQ</Node><Arrow /><Node tone="control">Replay completed-step filter</Node><Arrow /><Node>Fan-in</Node><Arrow /><Node tone="success">Resolution</Node>
    </div>
    <figcaption id={captionId}>Durable ticket and entity contexts coordinate configurable execution, partial failure, replay, and human handoff.</figcaption>
  </figure>
  );
};

export const GenAIRuntimeMap = () => {
  const captionId = React.useId();
  return (
  <figure className="system-map genai-map" aria-labelledby={captionId}>
    <div className="genai-control-plane">
      <span className="map-lane-label">Control plane</span>
      <Node tone="policy">Model registry</Node><Node tone="policy">Route plans</Node><Node tone="policy">Prompt registry</Node><Node tone="policy">Evaluation</Node>
    </div>
    <div className="map-lane map-lane-wide runtime-flow">
      <span className="map-lane-label">Runtime</span>
      <Node>Tenant request</Node><Arrow /><Node tone="control">Validated selector</Node><Arrow /><Node>Deterministic bucket</Node><Arrow /><Node tone="success">Model bridge</Node>
    </div>
    <div className="provider-grid">
      <Node>Primary deployment</Node>
      <Node>Secondary deployment</Node>
      <Node>Alternate provider</Node>
    </div>
    <div className="map-lane map-lane-wide">
      <span className="map-lane-label">Operations</span>
      <Node tone="failure">Timeout / outage</Node><Arrow /><Node tone="control">Automatic failover</Node><Arrow /><Node>Metrics + traces</Node><Arrow /><Node>Grafana</Node>
    </div>
    <figcaption id={captionId}>Validated configuration controls deterministic selection; runtime health automatically moves traffic across deployments and providers.</figcaption>
  </figure>
  );
};

export const TelecomAnalyticsMap = () => {
  const captionId = React.useId();
  return (
  <figure className="system-map telecom-map" aria-labelledby={captionId}>
    <div className="telecom-volume">
      <span>Raw telecom indices</span>
      <strong>Billions of records daily</strong>
      <small>Raw ingestion and lake architecture outside my ownership</small>
    </div>
    <div className="telecom-pipeline">
      <Node>Spark base KPIs</Node><Arrow /><Node tone="control">Topological derived-KPI engine</Node><Arrow /><Node>Granular computed indices</Node>
    </div>
    <div className="telecom-branch">
      <div><Node tone="policy">Cached time rollups</Node><Node>Orthogonal filters</Node></div>
      <div><Node tone="policy">Forecasting layer</Node><Node>SARIMA · TBATS · Prophet</Node></div>
    </div>
    <div className="telecom-output-grid">
      <Node>Ops dashboards</Node><Node>Leadership reports</Node><Node tone="success">90-minute cutoff decision</Node>
    </div>
    <figcaption id={captionId}>The downstream lifecycle turns base KPIs into dependency-resolved values, cached exploration, forecasts, and operational decisions.</figcaption>
  </figure>
  );
};

export const SystemMap: React.FC<{ slug: string }> = ({ slug }) => {
  if (slug === 'configurable-support-automation') return <SupportAutomationMap />;
  if (slug === 'genai-runtime-reliability') return <GenAIRuntimeMap />;
  return <TelecomAnalyticsMap />;
};
