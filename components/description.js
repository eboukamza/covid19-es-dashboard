import React from 'react'
import { formatDateTime } from '../lib/utils';

const Description = React.memo(({lastUpdate}) => (
  <div className='description'>
    <p>
      El Ministerio de Sanidad publica de manera diaria un <a
      href="https://www.mscbs.gob.es/profesionales/saludPublica/ccayes/alertasActual/nCov-China/situacionActual.htm">resumen
      de la situación</a> de la epidemia de Covid-19 en España.
    </p>
    <p>
      Dichos datos son utilizados en esta aplicación para ofrecer una visión gráfica de la evolución de la epidemia en
      nuestro territorio.
    </p>

    <p>
      Esta herramienta es una adaptación del proyecto <a href="https://veille-coronavirus.fr/">veille-coronavirus.fr</a> al caso Español.
    </p>

    <p><b>Actualizado el {formatDateTime(lastUpdate)}</b></p>

    <style jsx>{`
      .description {
        padding: 1em;
      }

      .description p {
        font-size: 0.85em;
      }
    `}</style>
  </div>
))

export default Description
