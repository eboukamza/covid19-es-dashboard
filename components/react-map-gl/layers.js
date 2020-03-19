import colors from '../../styles/colors'

export const regionLayer = {
  id: 'region',
  type: 'circle',
  source: 'regions',
  filter: ['>', 'cases', 0],
  paint: {
    'circle-opacity': 0.6,
    'circle-color': colors.orange,
    'circle-radius': [
      'interpolate',
      ['linear'],
      ['number', ['get', 'cases']],
      0,
      10,
      6000,
      60
    ]
  }
}

export const regionCountLayer = {
  id: 'region-count',
  type: 'symbol',
  source: 'regions',
  filter: ['>', 'cases', 0],
  layout: {
    'text-field': '{cases}',
    'text-size': 14
  }
}
