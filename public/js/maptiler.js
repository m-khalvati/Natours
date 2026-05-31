/* eslint-disable */

export const displayMap = locations => {
  const map = new maplibregl.Map({
    container: 'map',
    style: 'https://vector.maptiler.ir/styles/osm/style.json',
    scrollZoom: false,
    zoom: 25,
    interactive: false
  });

  const bounds = new maplibregl.LngLatBounds();

  // Force English Labels ---
  map.on('load', () => {
    const layers = map.getStyle().layers;

    layers.forEach(layer => {
      // Find layers that render text symbols (like city and street names)
      if (
        layer.type === 'symbol' &&
        layer.layout &&
        layer.layout['text-field']
      ) {
        // Override the text to use English ('name:en'), falling back to the default if English isn't available
        map.setLayoutProperty(layer.id, 'text-field', [
          'coalesce',
          ['get', 'name:en'],
          ['get', 'name']
        ]);
      }
    });
  });

  locations.forEach(loc => {
    const el = document.createElement('div');
    el.className = 'marker';

    new maplibregl.Marker({
      element: el,
      anchor: 'bottom'
    })
      .setLngLat(loc.coordinates)
      .addTo(map);

    new maplibregl.Popup({
      offset: 30
    })
      .setLngLat(loc.coordinates)
      .setHTML(`<p>Day ${loc.day}: ${loc.description}</p>`)
      .addTo(map);

    bounds.extend(loc.coordinates);
  });

  map.fitBounds(bounds, {
    padding: {
      top: 200,
      bottom: 150,
      left: 100,
      right: 100
    }
  });
};
