
// src/components/Map.js
import React, { useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
import './Map.css'; // Import your Map.css file

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

    return () => {
    map.remove();
    };
  }, []);
  
    return <div id="map" className="map" />;
  };
  
  export default Map;
