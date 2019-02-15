import React from "react";


export const AppContext = React.createContext();


export class AppProvider extends React.Component {
    state = {

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