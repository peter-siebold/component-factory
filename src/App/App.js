import React from 'react';
import './App.css';
import ComponentList from "../components/ComponentList";
import {AppContext} from "./AppProvider";
export const App = props => {
    return <AppContext.Consumer>
      {({components}) =>
      (
        <div className="App">
          <header className="App-header">
          {
            components && components.length > 0 ? (
              <ComponentList components={components} />
            ) : (
              <div>No Components found...yet</div>
            )
          }
          </header>
        </div>
      )}
    </AppContext.Consumer>
}

export default App;
