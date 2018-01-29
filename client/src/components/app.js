import React from 'react';

import Pokemon from './pokemon';

const App = props => (
  <div>
    {
      props.pokemons && props.pokemons.map(p => <Pokemon {...p} key={p.id}/>)
    }
  </div>
);

export default App;
