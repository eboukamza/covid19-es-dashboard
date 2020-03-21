import React from 'react'
import PropTypes from 'prop-types'

import ConfirmedChart from '../confirmed-chart'

const RegionSumup = ({name, cases, history}) => {
  history = JSON.parse(history);
  const previous = history.length > 1 ? history[history.length - 2] : undefined;
  const deltaCases = previous ? cases - previous.cases : undefined;

  return (
    <div className='sumup-container'>
      <div className='title'>{name}</div>
      <div>{cases} casos confirmados</div>

      <div>  {deltaCases ? `+${deltaCases} (${((cases / (cases - deltaCases)) * 100 - 100).toFixed(2)}%) nuevos casos`: ''} </div>

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
