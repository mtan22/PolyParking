
// src/components/Map.js
import React, { useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
import './Map.css';
import 'mapbox-gl/dist/mapbox-gl.css';

const Map = () => {
  useEffect(() => {
    mapboxgl.accessToken = 'pk.eyJ1IjoibWljaGJ1YiIsImEiOiJjbHA5YmE5NDYwMHpmMm1vZHNyN3RwbGM1In0.TBduPGWrLd0Im9Tdy-ybNA';

    const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [-120.6605, 35.3001],
        zoom: 14,
      });


    const geojson = {
      type: 'FeatureCollection',
      features: [
        {
          type: 'Feature',
          lotType : 'Orange',
          geometry: {
            type: 'Point',
            coordinates: [-120.66368194833512, 35.30675519359775]
          },
          properties: {
            title: 'H-14',
            description: 'Spaces Available: 365'
          }
        },
        {
          type: 'Feature',
          lotType : 'Orange',
          geometry: {
            type: 'Point',
            coordinates: [-120.66225690641959, 35.30594529945929]
          },
          properties: {
            title: 'H-16',
            description: 'Commuter Spaces Available: 504 -------\n' +
            'Staff Spaces Available: 36 -------',
          }
        },
        {
          type: 'Feature',
          lotType : 'Orange',
          geometry: {
            type: 'Point',
            coordinates: [-120.66366885525774, 35.30492537989601]
          },
          properties: {
            title: 'H-12',
            description: 'Commuter Spaces Available: 409 -------\n' +
            'Staff Spaces Available: 25 -------',
          }
        },
        {
          type: 'Feature',
          lotType : 'Triangle',
          geometry: {
            type: 'Point',
            coordinates: [-120.66492175930149, 35.29763768935735]
          },
          properties: {
            title: 'C1',
            description: 'Test'
          }
        },
        {
          type: 'Feature',
          lotType : 'Triangle',
          geometry: {
            type: 'Point',
            coordinates: [-120.66451328473349, 35.29746926583917]
          },
          properties: {
            title: 'C3',
            description: 'Test'
          }
        },
        {
          type: 'Feature',
          lotType : 'Triangle',
          geometry: {
            type: 'Point',
            coordinates: [-120.66488441839438, 35.297520174758155]
          },
          properties: {
            title: 'C4',
            description: 'Test'
          }
        },
        {
          type: 'Feature',
          lotType : 'Grand',
          geometry: {
            type: 'Point',
            coordinates: [-120.65721739519704, 35.298346315195815]
          },
          properties: {
            title: 'Grand Avenue Structure',
            description: 'Commuter Spaces Available: 563 -------\n' +
            'Staff Spaces Available: 308 -------\n' +
            'Disabled Spaces Available: 38 -------\n' +
            'Metered Spaces Available: 5 -------',
          }
        }
      ]
    };

    // add markers to map
    for (const feature of geojson.features) {
      // create a HTML element for each feature
      const el = document.createElement('div');
      if(feature.lotType === 'Orange'){
        el.className = 'orange-marker';
      }
      else if(feature.lotType === 'Triangle'){
        el.className = 'triangle-marker';
      }
      else{
        el.className = 'square-marker';
      }


      // make a marker for each feature and add to the map
      new mapboxgl.Marker(el).setLngLat(feature.geometry.coordinates)
          .setPopup(
              new mapboxgl.Popup({ offset: 25 }) // add popups
                  .setHTML(
                      `<h3>${feature.properties.title}</h3><p>${feature.properties.description}</p>`
                  )
          ).addTo(map);
    }

    const legend = document.createElement('div');
    legend.className = 'legend';
    legend.innerHTML = `
      <div class="legend-rectangle"></div>
      <div class="legend-content">
        <h3>Legend</h3>
        <div class="legend-item">
          <div class="orangeLot" style="background-color: orange;"></div>
          <span>Orange Lots</span>
        </div>
        <div class="legend-item">
          <svg class="square" width="20" height="20" viewBox="0 0 20 20">
            <polygon points="0,0 20,0 20,20 0,20" fill="purple" />
          </svg>
          <span>Grand Structure Lots</span>
        </div>
        <div class="legend-item">
          <div class="triangle"></div>
          <span>Staff Lots</span>
        </div>
        <!-- Add more legend items as needed -->
      </div>
    `;


    map.getContainer().appendChild(legend);


    return () => {
    map.remove();
    };
  }, []);

    return <div id="map" className="map" />;
  };
  
  export default Map;
