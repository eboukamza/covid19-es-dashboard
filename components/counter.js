import React from 'react'
import PropTypes from 'prop-types'

import colors from '../styles/colors'
import { formatDelta } from '../lib/utils';

const Counter = ({value, label, color, size, delta}) => {

  return (
    <div className='counter'>
      <div className='value'>{value}</div>
      {delta && (
        <div className='delta'>
          ( {formatDelta(delta)} )
        </div>
      )}
      <div>{label}</div>

      <style jsx>{`
        .counter {
          display: flex;
          flex-direction: column;
          justify-content: center;
          text-align: center;
          margin: 1em 0;
          color: ${colors ? colors[color] : colors.almostBlack};
        }

        .delta {
          font-style: italic;
        }

        .value {
          font-size: ${size};
          font-weight: bold;
        }
        `}</style>
    </div>
  )
}

Counter.defaultProps = {
  label: null,
  color: colors.almostBlack
}

Counter.propTypes = {
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]).isRequired,
  label: PropTypes.string,
  color: PropTypes.string
}

export default Counter
