

import { Component } from 'react';
import axios from 'axios';
import CharacterList from './CharacterList';
import CharacterDetail from './CharacterDetail';
function App(){
    return (
        <div>
            <h1>Click on a name for more details</h1>
            <CharacterList/>
            <CharacterDetail/>
        </div>
    )
}
export default App;