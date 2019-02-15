import React, { Component } from 'react';
import './App.css';
import ComponentList from "../components/ComponentList";
import AppProvider from "./AppProvider";
class App extends Component {
  state = {
    components: [],
  }
  async componentDidMount(){
    const response = await fetch("http://localhost:5005/")
    const appDescription = await response.json();
    this.setState({
      components: appDescription.children
    })
    console.log("app desciption loaded, now invoke component factory to import all components for the page", appDescription)
  }

  render() {
    const {components} = this.state; 
    return (
      <div className="App">
      <AppProvider>
        <header className="App-header">
        {
          components.length > 0 ? (
            <ComponentList components={components} />
          ) : (
            <div>No Components found...yet</div>
          )
        }
        </header>

      </AppProvider>
      </div>
    );
  }
}

export default App;
