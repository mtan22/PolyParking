
// src/components/Map.js
import React, { useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
import './Map.css'; 

const Map = () => {
  useEffect(() => {
    mapboxgl.accessToken = 'pk.eyJ1IjoibWljaGJ1YiIsImEiOiJjbHA5YmE5NDYwMHpmMm1vZHNyN3RwbGM1In0.TBduPGWrLd0Im9Tdy-ybNA';
    
    const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [-120.6605, 35.3001],
        zoom: 14,
      });

    const marker = new mapboxgl.Marker({
    color: "#FFFFFF",
    draggable: true
    }).setLngLat([-120.6627, 35.3006])
    .addTo(map);

    const legend = document.createElement('div');
    legend.className = 'legend';
    legend.innerHTML = `
      <div class="legend-rectangle"></div>
      <div class="legend-content">
        <h3>Legend</h3>
        <div class="legend-item">
          <div class="marker" style="background-color: orange;"></div>
          <span>Orange Lots</span>
        </div>
        <div class="legend-item">
            <svg class="star" width="20" height="20" viewBox="0 0 20 20">
            <polygon points="10,0 13,7 20,7 14,12 17,20 10,15 3,20 6,12 0,7 7,7" fill="purple" />
          </svg>
          <span>Staff Lots</span>
        </div>
        <div class="legend-item">
          <div class="triangle"></div>
          <span>Grand Structure Lots</span>
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
