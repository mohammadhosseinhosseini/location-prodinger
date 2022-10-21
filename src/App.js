import { useState } from 'react'
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet'
// import First from './First'
// import Second from './Second'
import Map from './Map'

import positions from './positions.json'

function App() {
    return (
        <div className='container'>
            <div className='mt-4'></div>
            {/* <h1>First approach</h1>
            <First positions={positions} />
            <h1 className='mb-5'>Second approach</h1>
            <Second positions={positions} /> */}
            <Map positions={positions} />
        </div>
    )
}

export default App
