// src/components/Map.js
import React, { useEffect } from "react";
import mapboxgl from "mapbox-gl";
import "./Map.css";
import "mapbox-gl/dist/mapbox-gl.css";

const Map = () => {
  useEffect(() => {
    mapboxgl.accessToken =
      "pk.eyJ1IjoibWljaGJ1YiIsImEiOiJjbHA5YmE5NDYwMHpmMm1vZHNyN3RwbGM1In0.TBduPGWrLd0Im9Tdy-ybNA";

    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/mapbox/streets-v11",
      center: [-120.6605, 35.3001],
      zoom: 14,
    });

    const geojson = {
      type: "FeatureCollection",
      features: [
        {
          type: "Feature",
          lotType: "Orange",
          geometry: {
            type: "Point",
            coordinates: [-120.66368194833512, 35.30675519359775],
          },
          properties: {
            title: "H-14",
            description: "Spaces Available: 365",
          },
        },
        {
          type: "Feature",
          lotType: "Orange",
          geometry: {
            type: "Point",
            coordinates: [-120.66225690641959, 35.30594529945929],
          },
          properties: {
            title: "H-16",
            description:
              "Commuter Spaces Available: 504 -------\n" +
              "Staff Spaces Available: 36 -------",
          },
        },
        {
          type: "Feature",
          lotType: "Orange",
          geometry: {
            type: "Point",
            coordinates: [-120.66366885525774, 35.30492537989601],
          },
          properties: {
            title: "H-12",
            description:
              "Commuter Spaces Available: 409 -------\n" +
              "Staff Spaces Available: 25 -------",
          },
        },
        {
          type: "Feature",
          lotType: "Triangle",
          geometry: {
            type: "Point",
            coordinates: [-120.66492175930149, 35.29763768935735],
          },
          properties: {
            title: "C1",
            description: "Test",
          },
        },
        {
          type: "Feature",
          lotType: "Triangle",
          geometry: {
            type: "Point",
            coordinates: [-120.66451328473349, 35.29746926583917],
          },
          properties: {
            title: "C3",
            description: "Test",
          },
        },
        {
          type: "Feature",
          lotType: "Triangle",
          geometry: {
            type: "Point",
            coordinates: [-120.66488441839438, 35.297520174758155],
          },
          properties: {
<<<<<<< Updated upstream
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
=======
            title: "C4",
            description: "Test",
          },
        },
      ],
>>>>>>> Stashed changes
    };

    // add markers to map
    for (const feature of geojson.features) {
      // create a HTML element for each feature
      const el = document.createElement("div");
      if (feature.lotType === "Orange") {
        el.className = "orange-marker";
      } else {
        el.className = "triangle-marker";
      }
<<<<<<< Updated upstream
      else if(feature.lotType === 'Triangle'){
        el.className = 'triangle-marker';
      }
      else{
        el.className = 'square-marker';
      }

=======
>>>>>>> Stashed changes

      // make a marker for each feature and add to the map
      new mapboxgl.Marker(el)
        .setLngLat(feature.geometry.coordinates)
        .setPopup(
          new mapboxgl.Popup({ offset: 25 }) // add popups
            .setHTML(
              `<h3>${feature.properties.title}</h3><p>${feature.properties.description}</p>`
            )
        )
        .addTo(map);
    }

    const legend = document.createElement("div");
    legend.className = "legend";
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

    const infoButton = document.createElement("button");
    infoButton.className = "info-button";

    // Create an SVG element
    const svgElement = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "svg"
    );
    svgElement.setAttribute("width", "64");
    svgElement.setAttribute("height", "64");
    svgElement.setAttribute("viewBox", "0 0 64 64");
    svgElement.setAttribute("fill", "none");

    svgElement.innerHTML = `
  <path fill-rule="evenodd" clip-rule="evenodd" d="M50.6666 5.33331H13.3333C8.91497 5.33331 5.33325 8.91503 5.33325 13.3333V50.6666C5.33325 55.0849 8.91497 58.6666 13.3333 58.6666H50.6666C55.0849 58.6666 58.6666 55.0849 58.6666 50.6666V13.3333C58.6666 8.91503 55.0849 5.33331 50.6666 5.33331ZM30.1066 16.7733C30.8695 16.0041 32.022 15.7729 33.0225 16.1883C34.0231 16.6038 34.6729 17.5833 34.6666 18.6666C34.6596 19.8703 33.8471 20.92 32.6837 21.2287C31.5203 21.5373 30.2943 21.0283 29.6916 19.9863C29.089 18.9444 29.259 17.6279 30.1066 16.7733ZM28.9599 48H35.0399C36.5127 48 37.7066 46.8061 37.7066 45.3333C37.7066 43.8606 36.5127 42.6666 35.0399 42.6666H34.6666V26.6666C34.6666 25.1939 33.4727 24 31.9999 24H29.3333C27.8605 24 26.6666 25.1939 26.6666 26.6666C26.6666 28.1394 27.8605 29.3333 29.3333 29.3333V42.6666H28.9599C27.4872 42.6666 26.2933 43.8606 26.2933 45.3333C26.2933 46.8061 27.4872 48 28.9599 48Z" fill="black"/>
`;

    // Append the SVG element to the button
    infoButton.appendChild(svgElement);

    infoButton.addEventListener("click", () => {
      showParkingInformation();
    });

    // Append the button to the map container
    map.getContainer().appendChild(infoButton);

    return () => {
      map.remove();
    };
  }, []);

  return <div id="map" className="map" />;
};

function showParkingInformation() {
  const message = `The A-1 lot, also known as the "Administration Lot" due to its proximity to the Administration Building 001, is the most central lot to the campus core and can be accessed off of North Perimeter Road. Metered, disabled, and sponsored guest parking is provided in the lot.

The C lots are located off of California Boulevard and are primarily staff/faculty and disabled parking areas. There are no commuter parking spaces in the C lots. Students and visitors that need to visit buildings by a C lot are encouraged to park in K1 or H1 lots.

The H lots are located off of Highland Boulevard and provide commuter, staff/faculty, and disabled parking spaces.`;

  alert(message);
}

export default Map;
