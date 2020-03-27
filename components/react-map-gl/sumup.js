import React from 'react'
import PropTypes from 'prop-types'

import { calculateActiveCases, format } from '../../lib/utils'
import ConfirmedChart from '../confirmed-chart'

const RegionSumup = (data) => {
  const history = JSON.parse(data.history)
  const {cases} = data
  const previous = history.length > 1 ? history[history.length - 2] : {}
  const deltaCases = previous ? cases - previous.cases : undefined

  const activeCases = calculateActiveCases(data)

  return (
    <div className='sumup-container'>
      <div className='title'>{name}</div>
      <div>{format(cases)} casos confirmados</div>

      <div>  {deltaCases ? `+${deltaCases} (${((cases / (cases - deltaCases)) * 100 - 100).toFixed(2)}%) nuevos casos`: ''} </div>
      <div> {format(activeCases)} casos no curados</div>

      <ConfirmedChart data={history} height={240}/>

      <style jsx>{`
          .sumup-container {
            font-size: larger;
          }

          .title {
            font-weight: bold;
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
