# Overview

Load Components for an application based on an externally provided app description
Uses React Lazy / Suspend within a simple Factory to lazy load different components based on the given ComponentType.

Example 1:

```JSON
{
    "meta": {
        "pageTitle": "Dashboard 1"
    },
    "id": "main_1",
    "ComponentType": "main",
    "props": {},
    "children": [
        {
            "ComponentType": "GridContainer",
            "id": "GridContainer_1",
            "props": {},
            "children": [
                {
                    "ComponentType": "GridItem",
                    "id": "GridItem_1",
                    "props": {
                        "xs": 12,
                        "md": 6,
                        "spacing": 0
                    },
                    "children": [
                        {
                            "ComponentType": "GaugeChart",
                            "id": "GaugeWidget_1",
                            "props": { },
                            "children": null
                        }                
                    ]
                },
                {
                    "ComponentType": "GridItem",
                    "id": "GridItem_2",
                    "props": {
                        "xs": 12,
                        "md": 6,
                        "spacing": 0
                    },
                    "children": [
                        {
                            "ComponentType": "GaugeChart",
                            "id": "GaugeWidget_2",
                            "props": { },
                            "children": null
                        }                
                    ]
                },
                {
                    "ComponentType": "GridItem",
                    "id": "GridItem_3",
                    "props": {
                        "xs": 12,
                        "md": 6,
                        "spacing": 0
                    },
                    "children": [
                        {
                            "ComponentType": "StatusCard",
                            "id": "StatusCard_1",
                            "props": {  },
                            "children": null
                        }                
                    ]
                },
                {
                    "ComponentType": "GridItem",
                    "id": "GridItem_4",
                    "props": {
                        "xs": 12,
                        "md": 6,
                        "spacing": 0
                    },
                    "children": [
                        {
                            "ComponentType": "SerialChart",
                            "id": "QualityWidget_1",
                            "props": { },
                            "children": null
                        }                
                    ]
                }
            ]
        }
    ]
}
```

Example 2:
```JSON
{
        "meta": {
            "pageTitle": "Dashboard 2"
        },
        "ComponentType": "main",
        "id": "main_2",
        "props": {},
        "children": [
            {
                "ComponentType": "GridContainer",
                "id": "GridContainer_2",
                "props": {},
                "children": [
                    {
                        "ComponentType": "GridItem",
                        "id": "GridItem_5",
                        "props": {
                            "xs": 12,
                            "md": 6,
                            "spacing": 0
                        },
                        "children": [
                            {
                                "ComponentType": "StatusCard",
                                "id": "Andon_card1",
                                "props": { },
                                "children": null
                            }                
                        ]
                    },
                    {
                        "ComponentType": "GridItem",
                        "id": "GridItem_6",
                        "props": {
                            "xs": 12,
                            "md": 6,
                            "spacing": 0
                        },
                        "children": [
                            {
                                "ComponentType": "StatusCard",
                                "id": "StatusCard_2",
                                "props": { },
                                "children": null
                            }                
                        ]
                    },
                    {
                        "ComponentType": "GridItem",
                        "id": "GridItem_7",
                        "props": {
                            "xs": 12,
                            "md": 6,
                            "spacing": 0
                        },
                        "children": [
                            {
                                "ComponentType": "StatusCard",
                                "id": "StatusCard134",
                                "props": {  },
                                "children": null
                            }                
                        ]
                    },
                    {
                        "ComponentType": "GridItem",
                        "id": "GridItem_8",
                        "props": {
                            "xs": 12,
                            "md": 6,
                            "spacing": 0
                        },
                        "children": [
                            {
                                "ComponentType": "Button",
                                "id": "Button_1",
                                "props": { },
                                "children": null
                            }                
                        ]
                    }
                ]
            }
        ]
    }
```

------


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm start:server`

Starts a server to provide the running app with an application description file as json (see the examples)<br>
Open [http://localhost:5005](http://localhost:5005) to view the server's response in the browser or use another tool like postman or curl.


### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
