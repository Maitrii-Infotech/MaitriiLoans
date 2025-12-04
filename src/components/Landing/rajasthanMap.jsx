import React, { useState, useMemo } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  ZoomableGroup
} from "react-simple-maps";

import indiaJson from "../../../public/in-all.topo.json";
const INDIA_TOPO_JSON = indiaJson;

const COLOR_CURRENT = "#6D3078"; // Purple
const COLOR_PROPOSED = "#F47E4D"; // Orange

const stateConfig = {
  "Rajasthan": {
    name: "Rajasthan",
    projectionConfig: {
      scale: 6000,
      center: [74.5, 26.5]
    },
    markers: [
      { name: "Jaipur H.O.", coordinates: [75.7873, 26.9124], status: "current" },
      { name: "Agra Road", coordinates: [75.9200, 26.8963], status: "current" },
      { name: "Tonk Road", coordinates: [75.8036, 26.8589], status: "current" },
      { name: "Kuchaman", coordinates: [74.8632, 27.1517], status: "current" },
      { name: "Nawa", coordinates: [75.0011, 27.0292], status: "current" },
      { name: "Phulera", coordinates: [75.2300, 26.8700], status: "current" },
      { name: "Ramgarh Shekhawati", coordinates: [74.9803, 28.1689], status: "current" },
      { name: "Parbatsar", coordinates: [74.7627, 26.8884], status: "current" },
      { name: "Udaipur", coordinates: [73.7125, 24.5854], status: "proposed" },
      { name: "Jodhpur", coordinates: [73.0243, 26.2389], status: "proposed" },
      { name: "Bhilwara", coordinates: [74.6313, 25.3216], status: "proposed" },
      { name: "Kekari", coordinates: [75.1534, 25.9726], status: "proposed" },
      { name: "Jobner", coordinates: [75.3780, 26.9686], status: "proposed" },
      { name: "Ajmer", coordinates: [74.6399, 26.4499], status: "proposed" }
    ]
  },
  "Madhya Pradesh": {
    name: "Madhya Pradesh",
    projectionConfig: {
      scale: 5000,
      center: [77.5, 23.5]
    },
    markers: [
      { name: "Indore", coordinates: [75.8577, 22.7196], status: "current" },
      { name: "Shujalpur", coordinates: [76.7106, 23.4012], status: "current" },
      { name: "Pachore", coordinates: [76.7273, 23.7244], status: "current" },
      { name: "Neemuch", coordinates: [74.8773, 24.4696], status: "current" },
      { name: "Gwalior", coordinates: [78.1828, 26.2183], status: "proposed" },
      { name: "Bhopal", coordinates: [77.4126, 23.2599], status: "proposed" }
    ]
  }
};

const NetworkMap = () => {
  const [activeState, setActiveState] = useState("Rajasthan");
  const [hoveredMarker, setHoveredMarker] = useState(null);
  const [isMapActive, setIsMapActive] = useState(false);

  const currentData = stateConfig[activeState];

  const sortedMarkers = useMemo(() => {
    return [...currentData.markers].sort((a, b) => {
      if (a.name === hoveredMarker) return 1;
      if (b.name === hoveredMarker) return -1;
      return 0;
    });
  }, [currentData.markers, hoveredMarker]);

  // Map container click handler
  const handleMapClick = () => {
    setIsMapActive(true);
  };

  // Document click handler to deactivate map
  React.useEffect(() => {
    const handleDocumentClick = (e) => {
      const mapContainer = document.getElementById('map-container');
      if (mapContainer && !mapContainer.contains(e.target)) {
        setIsMapActive(false);
      }
    };

    document.addEventListener('click', handleDocumentClick);
    return () => document.removeEventListener('click', handleDocumentClick);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">{activeState} Network</h1>

      {/* Toggle Buttons */}
      <div className="flex bg-gray-200 p-1 rounded-full mb-6 shadow-sm">
        <button
          className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${activeState === "Rajasthan"
            ? "bg-[#6D3078] text-white shadow-md"
            : "text-gray-600 hover:text-gray-800"
            }`}
          onClick={() => setActiveState("Rajasthan")}
        >
          Rajasthan
        </button>
        <button
          className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${activeState === "Madhya Pradesh"
            ? "bg-[#6D3078] text-white shadow-md"
            : "text-gray-600 hover:text-gray-800"
            }`}
          onClick={() => setActiveState("Madhya Pradesh")}
        >
          Madhya Pradesh
        </button>
      </div>

      <div
        id="map-container"
        className={`w-full max-w-5xl h-[700px] border rounded-xl shadow-lg bg-white overflow-hidden relative transition-all duration-500 ${isMapActive ? 'ring-2 ring-[#6D3078]' : ''
          }`}
        onClick={handleMapClick}
        style={{
          cursor: isMapActive ? 'grab' : 'pointer',
          overflowY: isMapActive ? 'hidden' : 'auto'
        }}
        onWheel={(e) => {
          if (!isMapActive) {
            e.stopPropagation();
          }
        }}
      >
        {!isMapActive && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/5 backdrop-blur-[0.5px] z-10 pointer-events-none">
            <div className="bg-white/90 px-6 py-3 rounded-full shadow-lg">
              <p className="text-sm font-medium text-gray-700">Click to interact with map</p>
            </div>
          </div>
        )}

        <ComposableMap
          projection="geoMercator"
          projectionConfig={currentData.projectionConfig}
          className="w-full h-full"
        >
          <ZoomableGroup>
            <Geographies geography={INDIA_TOPO_JSON}>
              {({ geographies }) =>
                geographies
                  .filter((geo) => geo.properties.name === activeState)
                  .map((geo) => (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      style={{
                        default: {
                          fill: "#E5E7EB",
                          stroke: "#9CA3AF",
                          strokeWidth: 1,
                          outline: "none",
                        },
                        hover: {
                          fill: "#D1D5DB",
                          stroke: "#6B7280",
                          strokeWidth: 1,
                          outline: "none",
                        },
                        pressed: {
                          fill: "#E5E7EB",
                          outline: "none",
                        },
                      }}
                    />
                  ))
              }
            </Geographies>

            {sortedMarkers.map(({ name, coordinates, status }) => {
              const pinColor = status === "current" ? COLOR_CURRENT : COLOR_PROPOSED;
              const isHovered = hoveredMarker === name;

              return (
                <Marker
                  key={name}
                  coordinates={coordinates}
                  onMouseEnter={() => setHoveredMarker(name)}
                  onMouseLeave={() => setHoveredMarker(null)}
                  style={{ cursor: "pointer" }}
                >
                  <g transform="translate(-12, -24)">
                    <g
                      style={{
                        transition: "all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                        transform: isHovered ? "scale(1.5)" : "scale(1)",
                        transformOrigin: "12px 24px"
                      }}
                    >
                      <path
                        d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 7 8 11.7z"
                        fill={pinColor}
                        stroke={pinColor}
                        strokeWidth="1"
                        className="drop-shadow-md"
                      />
                      <circle cx="12" cy="10" r="3" fill="white" />

                      <text
                        x="12"
                        y="-10"
                        textAnchor="middle"
                        fill="white"
                        stroke="white"
                        strokeWidth="4"
                        fontSize="11"
                        fontFamily="Arial, sans-serif"
                        style={{ pointerEvents: "none", opacity: 0.9 }}
                      >
                        {name}
                      </text>

                      <text
                        x="12"
                        y="-10"
                        textAnchor="middle"
                        fill="#000000"
                        fontSize="11"
                        fontFamily="Arial, sans-serif"
                        fontWeight="500"
                        style={{ pointerEvents: "none" }}
                      >
                        {name}
                      </text>
                    </g>
                  </g>
                </Marker>
              );
            })}
          </ZoomableGroup>
        </ComposableMap>

        {/* --- LEGEND --- */}
        <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-sm border border-gray-200 p-4 rounded-lg shadow-lg">
          <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">Legend</h4>

          <div className="flex items-center mb-2">
            <span className="w-3 h-3 rounded-full mr-2" style={{ backgroundColor: COLOR_CURRENT }}></span>
            <span className="text-sm text-gray-700 font-medium">Currently Working</span>
          </div>

          <div className="flex items-center">
            <span className="w-3 h-3 rounded-full mr-2" style={{ backgroundColor: COLOR_PROPOSED }}></span>
            <span className="text-sm text-gray-700 font-medium">Proposed</span>
          </div>
        </div>

      </div>
    </div>
  );
};

export default NetworkMap;