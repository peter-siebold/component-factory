import React from "react"
import Component from "./ComponentFactory";
export const ComponentList = ({components}) => (
    <React.Fragment>
        { components.map(component => (
            <Component key={component.id} component={component} />
        ))}
    </React.Fragment>
)
export default ComponentList;