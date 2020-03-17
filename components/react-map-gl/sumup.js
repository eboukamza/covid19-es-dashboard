import React from 'react'
import PropTypes from 'prop-types'

import ConfirmedChart from '../confirmed-chart'

const RegionSumup = ({name, cases, deltaCases, history}) => (
  <div className='sumup-container'>
    <div className='title'>{name}</div>
    <div>{cases} casos confirmados</div>
    <div>  {deltaCases >= 0 ? '+' : ''}{deltaCases} ({((cases / (cases - deltaCases)) * 100 - 100).toFixed(2)}%) casos desde la última vez</div>

    <ConfirmedChart data={JSON.parse(history)} height={240} />

    <style jsx>{`
        .sumup-container {
          font-size: larger;
        }

        .title {
          font-weight: bold;
        }
      `}</style>
  </div>
)

RegionSumup.propTypes = {
  name: PropTypes.string.isRequired,
  cases: PropTypes.number.isRequired,
  history: PropTypes.string.isRequired
}

export default RegionSumup
