import React, { Component } from 'react';
import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';
import ReactFC from 'react-fusioncharts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

ReactFC.fcRoot(FusionCharts, Charts, FusionTheme);

const chartConfigs = {
  type: 'column2d',
  width: 600,
  height: 400,
  dataFormat: 'json',
  dataSource: {
        "chart": {
          "caption": "Placement Throughout Year",
          "subCaption": "Hire Me",
          "xAxisName": "Months",
          "yAxisName": "Placements",
          "theme": "fusion"
        },
        "data": [
          {
            "label": "January",
            "value": "51"
          },
          {
            "label": "February",
            "value": "42"
          },
          {
            "label": "March",
            "value": "29"
          },
          {
            "label": "April",
            "value": "24"
          },
          {
            "label": "May",
            "value": "67"
          },
          {
            "label": "June",
            "value": "98"
          },
          {
            "label": "July",
            "value": "53"
          },
          {
            "label": "August",
            "value": "12"
          },
          {
            "label": "September",
            "value": "48"
          },
          {
            "label": "Octomber",
            "value": "39"
          },
          {
            "label": "November",
            "value": "26"
          },
          {
            "label": "December",
            "value": "84"
          },
        ]
  },
};

class Graphs2 extends Component {
  render () {
    return <ReactFC {...chartConfigs} />;
  }
}

export default Graphs2;