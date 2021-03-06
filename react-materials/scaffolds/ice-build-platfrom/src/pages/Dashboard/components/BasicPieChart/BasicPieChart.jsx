/* eslint object-shorthand: 0,space-before-function-paren:0, prefer-template:0, wrap-iife:0 */
import React, { Component } from 'react';
import IceContainer from '@icedesign/container';
import { Select } from '@icedesign/base';

const ReactHighcharts = require('react-highcharts');
const Highcharts = require('highcharts');

const { Option } = Select;

const config = {
  chart: {
    height: 300,
    plotBackgroundColor: null,
    plotBorderWidth: null,
    plotShadow: false,
    type: 'pie',
  },
  credits: {
    enabled: false,
  },
  title: {
    text: '',
  },
  tooltip: {
    pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>',
  },
  plotOptions: {
    pie: {
      allowPointSelect: true,
      cursor: 'pointer',
      dataLabels: {
        enabled: true,
        format: '<b>{point.name}</b>: {point.percentage:.1f} %',
        style: {
          color:
            (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black',
        },
      },
    },
  },
  series: [
    {
      name: 'Brands',
      colorByPoint: true,
      data: [
        {
          name: 'Webpack',
          y: 41.41,
          sliced: true,
          selected: true,
          color: '#f29b70',
        },
        {
          name: 'Rollup',
          y: 11.84,
        },
        {
          name: 'Parcel',
          y: 10.26,
        },
        {
          name: 'Gulp',
          y: 10.85,
        },
        {
          name: 'Browserify',
          y: 14.67,
        },
        {
          name: 'Grunt',
          y: 10.97,
        },
      ],
    },
  ],
};

export default class BasicPieChart extends Component {
  static displayName = 'BasicPieChart';

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {
      selectedValue: 'day',
    };
  }

  handleChange = (value) => {
    this.setState({
      selectedValue: value,
    });
  };

  render() {
    const { selectedValue } = this.state;
    console.log({ selectedValue });
    return (
      <IceContainer>
        <div style={styles.cardHead}>
          <h4 style={styles.cardTitle}>Client 构建分布</h4>
          <Select size="large" defaultValue="day" onChange={this.handleChange}>
            <Option value="day">今日</Option>
            <Option value="yesterday">昨日</Option>
            <Option value="week">7 天</Option>
            <Option value="year">12 个月</Option>
          </Select>
        </div>
        <ReactHighcharts config={config} />
      </IceContainer>
    );
  }
}

const styles = {
  cardHead: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: '0 0 20px',
    paddingBottom: '15px',
    borderBottom: '1px solid #eee',
  },
  cardTitle: {
    margin: '0',
    fontSize: '18px',
    fontWeight: 'bold',
  },
};
