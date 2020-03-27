import React from 'react'
import PropTypes from 'prop-types'

import Counter from './counter'
import { calculateActiveCases, calculatePct, format } from '../lib/utils';

const Statistics = ({report}) => {
  const last = report[report.length - 1] || {}
  const previous = report.length > 1 ? report[report.length - 2] : {}
  const {cases, deaths} = last

  const activeCases = calculateActiveCases(last)
  const previousActiveCases = calculateActiveCases(previous)

  const deltaActiveCasesPct = calculatePct(activeCases, previousActiveCases)
  const pctLabel = deltaActiveCasesPct ? deltaActiveCasesPct > 0 ? `${deltaActiveCasesPct}` : deltaActiveCasesPct : ''

  const deltaCases = cases && previous.cases ? `+${cases - previous.cases}` : '?'
  const deltaDeaths = deaths ? `+${deaths - previous.deaths}` : '?'

  return (
    <div className='stats'>

      <Counter value={activeCases === undefined ? '?' : `${format(activeCases)} (+${format(pctLabel)}%)`}
               label='Casos no curados' color='orange' size='xx-large'/>

      <div className='counters'>

        <Counter value={cases === undefined ? '?' : format(cases)} label='Casos totales' color='orange' size='x-large'/>
        <Counter value={deaths === undefined ? '?' : format(deaths)} label='Fallecidos' color='red' size='x-large'/>

        <Counter value={deltaCases} label='nuevos casos' color='orange' size='x-large'/>
        <Counter value={deltaDeaths} label='nuevos fallecidos' color='red' size='x-large'/>

      </div>
      <style jsx>{`
        .stats {
          flex: 1;
          padding: 1em;
        }

        .counters {
          display: grid;
          grid-template-columns: 1fr 1fr;
        }
      `}</style>
    </div>
  )
}

Statistics.defaultProps = {
  report: []
}

Statistics.propTypes = {
  report: PropTypes.array
}

export default Statistics
