import React from 'react'

import DateNav from '../components/date-nav'
import Scrollable from '../components/scrollable'
import ReactMapGl from '../components/react-map-gl'
import Statistics from '../components/statistics'
import ConfirmedChart from '../components/confirmed-chart'
import Description from '../components/description'
import Footer from '../components/footer'

import colors from '../styles/colors'

const ScreenPage = ({date, countryReport, regionsReport, prev, next, viewport, setViewport, lastUpdate}) => {
  return (
    <>
      <div className='menu'>
        <DateNav date={date} prev={prev} next={next} />
        <Scrollable date={date}>
          <>
            <Statistics report={countryReport} />
            <ConfirmedChart data={countryReport} height={200} />
            <Description lastUpdate={lastUpdate} />
          </>
        </Scrollable>
        <Footer />
      </div>

      <div className='map'>
        <ReactMapGl
          viewport={viewport}
          date={date}
          regions={regionsReport}
          onViewportChange={setViewport}
          isMobile={false}
        />
      </div>

      <style jsx>{`
          .menu {
            z-index: 1;
            display: flex;
            flex-direction: column;
            max-width: 400px;
            box-shadow: 0 1px 4px ${colors.lightGrey};
          }

          .map {
            flex: 1;
            height: 100%;
          }
      `}</style>
    </>
  )
}

export default ScreenPage
