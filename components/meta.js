import React from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'

const Meta = ({title, description}) => {
  return (
    <Head>
      <meta charSet='utf-8' />
      <meta httpEquiv='x-ua-compatible' content='ie=edge' />
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <base href="/dashboard/" />

      <title>{title}</title>

      <link rel='icon' href='/images/favicon.ico' />

      {/* Search Engine */}
      <meta name='description' content={description} />
      {/*<meta name='image' content='https://to-define/images/previews/default.png' />*/}

      {/* Schema.org for Google */}
      <meta itemProp='name' content={title} />
      <meta itemProp='description' content={description} />
      {/*<meta itemProp='image' content='https://to-define/images/previews/default.png' />*/}


      {/* Twitter */}
      <meta name='twitter:title' content={title} />
      <meta name='twitter:description' content={description} />
     {/* <meta name='twitter:image:src' content='https://to-define/images/previews/default.png' />*/}

      {/* Open Graph general (Facebook, Pinterest & Google+) */}
      <meta name='og:title' content={title} />
      <meta name='og:description' content={description} />
      {/*<meta name='og:image' content='https://to-define/images/previews/facebook.png' />*/}
      {/*<meta name='og:url' content='https://to-define/' />*/}
      <meta name='og:site_name' content={title} />
      <meta name='og:locale' content='es_ES' />
      <meta name='og:type' content='website' />
    </Head>
  )
}

Meta.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string
}

Meta.defaultProps = {
  title: 'Mapa Covid España',
  description: 'Mapa de seguimiento de la epidemia de coronavirus en España'
}

export default Meta
