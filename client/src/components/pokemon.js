import React from 'react';

const Pokemon = props => (
  <div style={{display: 'flex', padding: 10, justifyContent: 'space-around'}}>
    <div style={{width: 100, height: 100}}>
      <img alt={props.name} src={props.image} style={{width: '100%', height: '100%'}} />
    </div>
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 10}}>
      <h3>{props.name}</h3>
    </div>
  </div>
);

export default Pokemon;
