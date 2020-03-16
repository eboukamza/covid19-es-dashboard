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
