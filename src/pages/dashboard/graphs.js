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
          "caption": "Placement in Top Companies through Hire Me",
          "subCaption": "Hire Me",
          "xAxisName": "Company",
          "yAxisName": "Placements",
          "theme": "umber"
        },
        "data": [
          {
            "label": "TATA",
            "value": "290"
          },
          {
            "label": "INFOSYS",
            "value": "260"
          },
          {
            "label": "Amazon",
            "value": "180"
          },
          {
            "label": "Google",
            "value": "12"
          }
        ]
  },
};

class Graphs extends Component {
  render () {
    return <ReactFC {...chartConfigs} />;
  }
}

export default Graphs;