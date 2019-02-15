const express = require('express');
var cors = require('cors')
const app = express();
const router = express.Router();
const port = 5005;


// url: http://localhost:3000/
// app.get('/', (request, response) => response.send('Hello World'));
 app.use(cors());
// all routes prefixed with /api
app.use('/', router);

const pages = [
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
                                "props": {
                                    "dataSource": {
                                        "type" : "request",
                                        "source": "this.state.currentMachine.qualityUrl",
                                        "url": "http://upiotstreams.westeurope.cloudapp.azure.com:8080/machine/STREAM_UP_IOT_PROD_QUALITY_MACHINE2"
                                    }
                                },
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
                                "props": {
                                    "dataSource": {
                                        "type" : "request",
                                        "source": "this.state.currentMachine.qualityUrl",
                                        "url": "http://upiotstreams.westeurope.cloudapp.azure.com:8080/machine/STREAM_UP_IOT_PROD_QUALITY_MACHINE2"
                                    }
                                },
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
                                "props": {
                                    "dataSource": {
                                        "type" : "request",
                                        "source": "this.state.currentMachine.qualityUrl",
                                        "url": "http://upiotstreams.westeurope.cloudapp.azure.com:8080/machine/STREAM_UP_IOT_PROD_QUALITY_MACHINE2"
                                    }
                                },
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
                                "props": {
                                    "dataSource": {
                                        "type" : "request",
                                        "source": "this.state.currentMachine.qualityUrl",
                                        "url": "http://upiotstreams.westeurope.cloudapp.azure.com:8080/machine/STREAM_UP_IOT_PROD_QUALITY_MACHINE2"
                                    }
                                },
                                "children": null
                            }                
                        ]
                    }
                ]
            }
        ]
    },
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
                                "props": {
                                    "dataSource": {
                                        "type" : "request",
                                        "source": "this.state.currentMachine.qualityUrl",
                                        "url": "http://upiotstreams.westeurope.cloudapp.azure.com:8080/machine/STREAM_UP_IOT_PROD_QUALITY_MACHINE2"
                                    }
                                },
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
                                "props": {
                                    "dataSource": {
                                        "type" : "request",
                                        "source": "this.state.currentMachine.qualityUrl",
                                        "url": "http://upiotstreams.westeurope.cloudapp.azure.com:8080/machine/STREAM_UP_IOT_PROD_QUALITY_MACHINE2"
                                    }
                                },
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
                                "props": {
                                    "dataSource": {
                                        "type" : "request",
                                        "source": "this.state.currentMachine.qualityUrl",
                                        "url": "http://upiotstreams.westeurope.cloudapp.azure.com:8080/machine/STREAM_UP_IOT_PROD_QUALITY_MACHINE2"
                                    }
                                },
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
                                "props": {
                                    "dataSource": {
                                        "type" : "request",
                                        "source": "this.state.currentMachine.qualityUrl",
                                        "url": "http://upiotstreams.westeurope.cloudapp.azure.com:8080/machine/STREAM_UP_IOT_PROD_QUALITY_MACHINE2"
                                    }
                                },
                                "children": null
                            }                
                        ]
                    }
                ]
            }
        ]
    }
]

function getRandomArbitrary(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
const getPage = () => {
    const index = getRandomArbitrary(0, pages.length-1);

    return pages[index];
}
// using router.get() to prefix our path
// url: http://localhost:3000/api/
router.get('/', (_, response) => {
 
    const page = getPage();
    response.json(page);
});



// set the server to listen on port 3000
app.listen(port, () => console.log(`Listening on port ${port}`));