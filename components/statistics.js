import React from 'react'
import PropTypes from 'prop-types'

import Counter from './counter'

const Statistics = ({report}) => {
  const {cases, deaths} = report || {}

  return (
    <div className='stats'>
      <div className='counters'>
        <Counter value={cases === undefined ? '?': cases} label='Casos' color='orange' />
        <Counter value={deaths === undefined ? '?': deaths} label='Fallecidos' color='red' />
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
