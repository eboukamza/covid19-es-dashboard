import React from 'react'
import PropTypes from 'prop-types'

import { calculateActiveCases, calculatePct, format, formatDelta } from '../../lib/utils'
import ConfirmedChart from '../confirmed-chart'

const RegionSumup = (data) => {
  const history = JSON.parse(data.history)
  const {cases} = data
  const previous = history.length > 1 ? history[history.length - 2] : {}
  const deltaCases = previous ? cases - previous.cases : undefined

  const activeCases = calculateActiveCases(data)
  const previousActiveCases = calculateActiveCases(previous)

  const deltaActiveCasesPct = calculatePct(activeCases, previousActiveCases)

  return (
    <div className='sumup-container'>
      <div className='title'>{name}</div>
      <div>{format(cases)} {deltaCases && <span className='delta'>( {formatDelta(deltaCases)} )</span>} casos totales</div>

      <div> {format(activeCases)} {deltaActiveCasesPct && <span className='delta'>( {formatDelta(deltaActiveCasesPct)}% )</span>} casos no curados</div>

      <ConfirmedChart data={history} height={240}/>

      <style jsx>{`
          .sumup-container {
            font-size: larger;
          }

          .title {
            font-weight: bold;
          }

          .delta {
            font-style: italic;
            font-size: medium;
          }
        `}</style>
    </div>
  );
}

RegionSumup.propTypes = {
  name: PropTypes.string.isRequired,
  cases: PropTypes.number.isRequired,
  history: PropTypes.string.isRequired
}

export default RegionSumup
