import React from 'react';
import Entity from './components/nodes/Entity';
import { Background, ReactFlow, Controls } from 'reactflow';

import 'reactflow/dist/style.css';

export default function App (){
    const elements = [
      {
        id: 'entity1',
        type: 'entity',
        data: {
          label: 'Usuário',
          fields: [
            { name: 'id', type: 'number' },
            { name: 'nome', type: 'string' },
            { name: 'email', type: 'string' },
          ],
        },
        position: { x: 100, y: 100 },
      },
    ];

    return (
      <div style={{ width: '100vw', height: '100vh' }}>
          <ReactFlow elements={elements} nodeTypes={{ entity: Entity }} >
            <Background />
            <Controls />
          </ReactFlow>
      </div>
    );
}
