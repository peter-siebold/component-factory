// import React from "react";

// export default (props) => (
//     <div>
//         <span>Serial Chart  for {props.dataSource}</span>
//     </div>
// )

import React, { Component } from 'react';
let am4core = null
let am4charts = null
let am4themes_material = null
if (process.browser) {
  am4core = require('@amcharts/amcharts4/core')
  am4charts = require('@amcharts/amcharts4/charts')
  am4themes_material = require('@amcharts/amcharts4/themes/amcharts')
  am4core.useTheme(am4themes_material.default)
}

class QualityWidget extends Component {

    constructor(props){
        super(props);
        this.state = {
            key : `chartdiv_${this.props.chartKey || this.getKey()}`
        }
    }

    getRndChartVal = (min=10, max = 10000) => (
        Math.floor(Math.random() * max) + min
     )
     getKey = () => (
        `gauge_${Math.floor(Math.random() * 1000) + 1}`
     )
  componentDidMount() {

    // Create chart instance
    var chart = am4core.create(this.state.key, am4charts.XYChart);

    // Add data
    chart.data = [ {
    "year": "2018",
     "OK": this.props.ok || this.getRndChartVal(50, 5000),
     "NOK": this.props.nok || this.getRndChartVal(20, 2000),
    //  "LOW": this.props.low
    }];

    
    chart.legend = new am4charts.Legend();
    chart.legend.position = "bottom";

    // Create axes
    var categoryAxis = chart.yAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "year";
    categoryAxis.renderer.grid.template.opacity = 0;

    var valueAxis = chart.xAxes.push(new am4charts.ValueAxis());
    valueAxis.min = 0;
    valueAxis.renderer.grid.template.opacity = 0;
    valueAxis.renderer.ticks.template.strokeOpacity = 0.5;
    valueAxis.renderer.ticks.template.stroke = am4core.color("#495C43");
    valueAxis.renderer.ticks.template.length = 10;
    valueAxis.renderer.line.strokeOpacity = 0.5;
    valueAxis.renderer.baseGrid.disabled = true;
    valueAxis.renderer.minGridDistance = 40;

    // Create series
    function createSeries(field, name) {
    var series = chart.series.push(new am4charts.ColumnSeries());
    series.dataFields.valueX = field;
    series.dataFields.categoryY = "year";
    series.stacked = true;
    series.name = name;
    
    var labelBullet = series.bullets.push(new am4charts.LabelBullet());
    labelBullet.locationX = 0.5;
    labelBullet.label.text = "{valueX}";
    labelBullet.label.fill = am4core.color("#fff");
    }

    createSeries("OK", "OK");
    createSeries("NOK", "NOK");
    // createSeries("LOW", "LOW");

    this.chart = chart;
  }


  componentWillUnmount() {
    if (this.chart) {
      this.chart.dispose();
    }
  }
  componentDidUpdate() {
    this.chart.data = [ {
      "year": "2018",
       "OK": this.props.ok || this.getRndChartVal(50, 5000),
       "NOK": this.props.nok || this.getRndChartVal(20, 2000),
      //  "LOW": this.props.low
      }];

  }
  render() {
    return (
      <div id={this.state.key} style={{ width: "100%", height: "300px" }}></div>
    );
  }
}

export default QualityWidget;