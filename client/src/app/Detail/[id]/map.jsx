"use client"
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";


import { useState } from "react";

export default function Map (props){
    
 

const { mapContainerStyle, center} = props







  const [markerPosition, setMarkerPosition] = useState(null);
   const handleMapLoad = (map) => {
    setMarkerPosition(center);
  };

    return(
          <LoadScript googleMapsApiKey="AIzaSyDSHb1gBxjiShwN6LVC_bBnxt9E60TwvmI">
              <GoogleMap
                mapContainerStyle={mapContainerStyle}
                center={center}
                zoom={14}
                onLoad={handleMapLoad}
              >
                <Marker position={markerPosition} />
              </GoogleMap>
            </LoadScript> 
    )
}