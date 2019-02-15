import React, {Suspense} from "react";
import ButtonControl from "./FormElements/ButtonControl"
const LazyGaugeChart = React.lazy(() => import("./Charts/GaugeChart"));
const LazySerialChart = React.lazy(() => import("./Charts/SerialChart"));
const LazyStatusCard = React.lazy(() => import("./Widgets/StatusIndicator"));
// const LazyButton = React.lazy(() => import("./FormElements/ButtonControl"));

const getComponent = (component, props) => {
    switch(component.ComponentType){
        case "GaugeChart":
            return (
                <Suspense fallback={<div>Loading...</div>}>
                    <LazyGaugeChart />
                </Suspense>
             )
        case "StatusCard":
            return (
                <Suspense fallback={<div>Loading...</div>}>
                    <LazyStatusCard />
                </Suspense>
             )
        case "SerialChart":
            return (
                <Suspense fallback={<div>Loading...</div>}>
                    <LazySerialChart />
                </Suspense>
             )
        case "Button":
            return (
                <ButtonControl />
             )
        default:
            return ( <div className="component-user">{component.ComponentType}</div>)

    }
}
export const ComponentFactory = props => {
    const {component} = props;
    return (
        <div className="component">
    
            { getComponent(component, props)}
            {
                component.children && (
                    <div className="nested-components">
                        {
                            component.children.map(nestedComponent => (
                                <ComponentFactory key={nestedComponent.id} component={nestedComponent} />
                            ))
                        }
                    </div>
                )
            }
            <style jsx="true">{`
                .component {
                    margin-bottom: 1.5em;
                }
                .component-user {
                    font-size: 0.9rem;
                    font-weight: bold;
                    margin-bottom: 0.5em;
                }
                .component-content {
                    font-size: 0.9rem;
                }
    
                .nested-components {
                    
                    margin-top: 1em;
                    border-left: 1px solid white;
                    padding-left:1em;
                }
            `}</style>
            {
                props.children
            }
        </div>
    )
}
export default ComponentFactory;