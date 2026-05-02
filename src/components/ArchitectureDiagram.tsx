import React, { useCallback, useMemo } from 'react';
import ReactFlow, {
  addEdge,
  ConnectionLineType,
  useNodesState,
  useEdgesState,
  Controls,
  Background,
  MiniMap,
} from 'reactflow';
import 'reactflow/dist/style.css';
import type { DiagramData } from '../types';

interface ArchitectureDiagramProps {
  diagram: DiagramData;
  onClose: () => void;
}

const ArchitectureDiagram: React.FC<ArchitectureDiagramProps> = ({ diagram, onClose }) => {
  const [nodes, , onNodesChange] = useNodesState(diagram.nodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(diagram.edges);

  const onConnect = useCallback(
    (params: any) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  const nodeTypes = useMemo(() => ({}), []);

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2 className="modal-title">{diagram.name}</h2>
          <button className="modal-close" onClick={onClose}>
            ×
          </button>
        </div>
        <div className="modal-body">
          <div style={{ width: '100%', height: '100%' }}>
            <ReactFlow
              nodes={nodes}
              edges={edges}
              onNodesChange={onNodesChange}
              onEdgesChange={onEdgesChange}
              onConnect={onConnect}
              nodeTypes={nodeTypes}
              connectionLineType={ConnectionLineType.SmoothStep}
              fitView
              style={{
                background: 'var(--color-bg-primary)',
                color: 'var(--color-text-primary)',
              }}
            >
              <Controls
                style={{
                  background: 'var(--color-bg-primary)',
                  border: 'var(--border-width) solid var(--color-border)',
                }}
              />
              <MiniMap
                style={{
                  background: 'var(--color-bg-secondary)',
                  border: 'var(--border-width) solid var(--color-border)',
                }}
              />
              <Background
                color="var(--color-text-muted)"
                gap={16}
                size={1}
              />
            </ReactFlow>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArchitectureDiagram;
