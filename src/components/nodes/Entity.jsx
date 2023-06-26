import React from 'react';
import { Handle } from 'reactflow';

export default function Entitie(props) {
  const primaryKeys = data.primaryKeys;
  const atributes = [...data.attributes];
  const foreignkeys = [...data.foreignkeys];

  return (
    <div>
      <label>{data.id}</label>
      <hr/>
      {
        primaryKeys.map((primaryKeys, index) =>{
          return <label key={index}>{primaryKeys}</label>
        })
      }
      {
        atributes.map((label, index) =>{
          return <label key={index}>{label}</label>
        })
      }
      <hr/>
      {
        foreignkeys.map((foreignkeys, index) =>{
          return <label key={index}>{foreignkeys}</label>
        })
      }
    </div>
  );
};

