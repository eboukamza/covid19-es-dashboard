import React from 'react'
import PropTypes from 'prop-types'
import {Bar} from 'react-chartjs-2'

import colors from '../styles/colors'

const options = {
  tooltips: {
    mode: 'index'
  },
  scales: {
    xAxes: [{
      stacked: true
    }],
    yAxes: [{
      stacked: true
    }]
  }
}

const formatData = data => {
  const datasets = []

  if (data.some(h => h.cases)) {
    datasets.push({
      label: 'Casos vivos',
      data: data.map(h => h.cases - (h.recovered || 0) - (h.deaths || 0)),
      backgroundColor: colors.orange
    })
  }

  if (data.some(h => h.recovered)) {
    datasets.push({
      label: 'Curados',
      data: data.map(h => h.recovered),
      backgroundColor: colors.green
    })
  }
  if (data.some(h => h.deaths)) {
    datasets.push({
      label: 'Fallecidos',
      data: data.map(h => h.deaths),
      backgroundColor: colors.red
    })
  }

  return {
    labels: data.map(h => h.date),
    datasets
  }
}

const ConfirmedChart = ({data, height}) => (
  <div style={{padding: '1em'}}>
    <Bar data={formatData(data)} options={options} height={height} />
  </div>
)

ConfirmedChart.defaultProps = {
  height: null
}

ConfirmedChart.propTypes = {
  data: PropTypes.array.isRequired,
  height: PropTypes.number
}

export default ConfirmedChart
