import React from 'react';
import {TodoProvider} from '../TodoContext';
import { AppUI } from './AppUI';

// this is clean beacuase es pure state an logic withouth UI layout/structure
function App() { 
  // now we use a provider that is going to inject props in a 360 way to all our app
  return (  
    <TodoProvider>
      < AppUI/>
    </TodoProvider>
  );
}

export {App};
