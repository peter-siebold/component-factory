// import React from "react";

// export default (props) => (
//     <div>
//         <span>Gauge Chart for {props.dataSource} </span>
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

class GaugeWidget extends Component {

    constructor(props){
        super(props);
        this.state = {
            currentValue: parseFloat(this.props.value, 10) || this.getRndChartVal(),
            key : `chartdiv_${this.props.chartKey || this.getKey()}`
        }
    }
 getRndChartVal = () => (
    Math.floor(Math.random() * 100) + 1
 )
 getKey = () => (
    `gauge_${Math.floor(Math.random() * 1000) + 1}`
 )
  componentDidMount() {
    let chart = am4core.create(this.state.key, am4charts.GaugeChart);
    chart.innerRadius = am4core.percent(82);

    /**
     * Normal axis
     */

    let axis = chart.xAxes.push(new am4charts.ValueAxis());
    axis.min = 0;
    axis.max = 100;
    axis.strictMinMax = true;
    axis.renderer.radius = am4core.percent(80);
    axis.renderer.inside = true;
    axis.renderer.line.strokeOpacity = 1;
    axis.renderer.ticks.template.strokeOpacity = 1;
    axis.renderer.ticks.template.length = 10;
    axis.renderer.grid.template.disabled = true;
    axis.renderer.labels.template.radius = 40;
    axis.renderer.labels.template.adapter.add("text", function(text) {
        return text + "%";
    })

    /**
     * Axis for ranges
     */

    let colorSet = new am4core.ColorSet();

    let axis2 = chart.xAxes.push(new am4charts.ValueAxis());
    axis2.min = 0;
    axis2.max = 100;
    axis2.renderer.innerRadius = 10
    axis2.strictMinMax = true;
    axis2.renderer.labels.template.disabled = true;
    axis2.renderer.ticks.template.disabled = true;
    axis2.renderer.grid.template.disabled = true;

    let range0 = axis2.axisRanges.create();
    range0.value = 0;
    range0.endValue = 50;
    range0.axisFill.fillOpacity = 1;
    range0.axisFill.fill = colorSet.getIndex(0);

    let range1 = axis2.axisRanges.create();
    range1.value = 50;
    range1.endValue = 100;
    range1.axisFill.fillOpacity = 1;
    range1.axisFill.fill = colorSet.getIndex(2);

    /**
     * Label
     */

    let label = chart.radarContainer.createChild(am4core.Label);
    label.isMeasured = false;
    label.fontSize = 45;
    label.x = am4core.percent(50);
    label.y = am4core.percent(100);
    label.horizontalCenter = "middle";
    label.verticalCenter = "bottom";
    label.text = `${this.state.currentValue}%`;


    /**
     * Hand
     */

    let hand = chart.hands.push(new am4charts.ClockHand());
    hand.axis = axis2;
    hand.innerRadius = am4core.percent(20);
    hand.startWidth = 10;
    hand.pin.disabled = true;
    hand.value = this.state.currentValue;
    this.chart = chart;
  }


  componentWillUnmount() {
    if (this.chart) {
      this.chart.dispose();
    }
  }

  render() {
    return (
      <div id={this.state.key} style={{ width: "100%", height: "300px" }}></div>
    );
  }
}

export default GaugeWidget;