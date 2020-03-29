import 'isomorphic-unfetch' // eslint-disable-line import/no-unassigned-import

export async function fetchJson(url) {
  const response = await fetch(url)
  if (response && response.ok) {
    return response.json()
  }
}

export const getData = async () => {
  return fetchJson('https://raw.githubusercontent.com/eboukamza/covid19-es-data/master/datos-situacion.json')
}

export const getLastUpdate = async () => {
  const response = await fetch('https://raw.githubusercontent.com/eboukamza/covid19-es-data/master/last-update')
  return response.text()
}
