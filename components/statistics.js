import React from 'react'
import PropTypes from 'prop-types'

import Counter from './counter'

const Statistics = ({report}) => {
  const {cases, deaths, deltaCases, deltaDeaths} = report || {};

  const deltaCasesPct = ((cases / (cases - deltaCases)) * 100 - 100).toFixed(2);

  return (
    <div className='stats'>
      <div className='counters'>
        <Counter value={cases === undefined ? '?' : cases} label='Casos' color='orange' size='xx-large'/>
        <Counter value={deaths === undefined ? '?' : deaths} label='Fallecidos' color='red' size='xx-large'/>

        <Counter
          value={deltaCases === undefined ? '?' : `${deltaCases >= 0 ? '+' : ''}${deltaCases} (${deltaCasesPct}%)`}
          label='desde la última vez' color='orange'/>
        <Counter value={deltaDeaths === undefined ? '?' : '+' + deltaDeaths} label='desde la última vez' color='red'/>
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
  report: {}
}

Statistics.propTypes = {
  report: PropTypes.object
}

export default Statistics
