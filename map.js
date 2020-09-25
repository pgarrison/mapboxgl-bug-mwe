mapboxgl.accessToken = EDIT_ME;

// Make the map
const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11'
});

// Put something on the page
const missing = document.createElement('div');
missing.id = 'missing';
document.body.appendChild(missing);
