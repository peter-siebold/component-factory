import React from "react";


export const AppContext = React.createContext();


export class AppProvider extends React.Component {
    state = {
        currentDataSource: "",
        components: [],
    }
    async componentDidMount(){
        const response = await fetch("http://localhost:5005/")
        const appDescription = await response.json();
        const currentDataSource = appDescription.meta.pageTitle;
        this.setState({
          components: appDescription.children,
          currentDataSource
        })
        console.log("app desciption loaded, now invoke component factory to import all components for the page", appDescription)
      }

    render() {
        return(
            <AppContext.Provider value={this.state}>
                { this.props.children }
            </AppContext.Provider>
        )
    }

}

export default AppProvider;