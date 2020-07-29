import React from 'react'
import { Map as Leafletmap, TileLayer} from 'react-leaflet';

import {showDataOnmap} from '../utils'
import '../Map.css';

function Map({countries, casesType, center, zoom}) {
    return (
        <div className="map">
            <Leafletmap center={center} zoom={zoom}>
                <TileLayer 
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.osm.org/copyright">OpenStreetMap</a> contributors'
                />
                {showDataOnmap(countries, casesType)}
            </Leafletmap>
        </div>
    )
}

export default Map
