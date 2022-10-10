import { useState } from 'react'
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet'
import First from './First'
import Second from './Second'

const positions = [
    {
        position: [50.996255, 11.09045],
        address_1: 'Rosenauer Strasse 115',
        address_2: 'D-96450 Coburg',
        phone: '+49 (0) 9561 851-0',
        fax: '+49 (0) 9561 851-100',
        email: 'coburg@prodinger.de',
        filter: 2,
    },
    {
        position: [50.275875, 10.980706],
        address_1: 'Fichtenweg 48',
        address_2: 'D-99098 Erfurt',
        phone: '+49 (0) 36203 697-0',
        fax: '+49 (0) 36203 697-97',
        email: 'erfurt@prodinger.de',
        filter: 2,
    },
    {
        position: [48.229969, 7.7641863],
        address_1: 'Hans-Prodinger-Platz 1',
        address_2: 'D-79336 Herbolzheim',
        phone: '+49 (0) 7643 23 28-0',
        fax: '+49 (0) 7643 23 28-500',
        email: 'herbolzheim@prodinger.de',
        filter: 1,
    },
    {
        position: [49.4465315, 11.0139031],
        address_1: 'Hans-Prodinger-Platz 1',
        address_2: 'D-79336 Herbolzheim',
        phone: '+49 (0) 7643 23 28-0',
        fax: '+49 (0) 7643 23 28-500',
        email: 'herbolzheim@prodinger.de',
        filter: 1,
    },
    {
        position: [47.64077, 7.73318],
        address_1: 'Egertenweg 6',
        address_2: 'D-79585 Steinen',
        phone: '+49 (0) 7643 2328-900',
        fax: '+49 (0) 7643 2328-590',
        email: 'stones@prodinger.de',
        filter: 1,
    },
    {
        position: [50.8684001, 6.7578367],
        address_1: 'Alfred-Nobel-Strasse 81-91',
        address_2: 'D-50169 Kerpen',
        phone: '+49 2237 979116 600',
        fax: '+49 2237 979116 570',
        email: 'kerpen@prodinger.de',
        filter: 2,
    },
]

function App() {
    return (
        <div className='container'>
            <h1>First approach</h1>
            <First positions={positions} />
            <h1 className='mb-5'>Second approach</h1>
            <Second positions={positions} />
        </div>
    )
}

export default App
