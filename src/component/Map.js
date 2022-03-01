import React, { useState } from 'react';
import GoogleMapReact from 'google-map-react';
import LocationMarker from './LocationMarker';
import LocationInfo from './LocationInfo';

export const Map = ({ center, zoom, eventData }) => {
    const [locationInfoBox, setLocatinInfoBox] = useState('')

    const marker = eventData.map((event, ind) => {
        const { geometries } = event

        // console.log(geometries[0].coordinates);
        if (event.categories[0].id === 12) {
            return <LocationMarker key={ind}
                lat={geometries[0].coordinates[0]}
                lng={geometries[0].coordinates[1]}
                onClick={() => setLocatinInfoBox({
                    id: event.id,
                    title: event.title
                })} />
        }
    })

    return (
        <div className="map">
            <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyD6cYGr-T3DcSe-LlW_QZ-pDM5Y9EheXgc' }}
                defaultCenter={center}
                defaultZoom={zoom}
            >
                {marker}
            </GoogleMapReact>
            {locationInfoBox && <LocationInfo info={locationInfoBox} setLocatinInfoBox={setLocatinInfoBox} />}
        </div>
    )
}
Map.defaultProps = {
    zoom: 10,
    center: {
        lat: 16.8409,
        lng: 96.1735
    }
}