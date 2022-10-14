import { useState } from 'react'
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet'
// import First from './First'
// import Second from './Second'
import Map from './Map'

const positions = [
    {
        position: [50.996255, 11.09045],
        name: 'Coburg',
        address_1: 'Rosenauer Strasse 115',
        address_2: 'D-96450 Coburg',
        phone: '+49 (0) 9561 851-0',
        fax: '+49 (0) 9561 851-100',
        email: 'coburg@prodinger.de',
        filter: 'Firmenzentrale',
    },
    {
        position: [50.996255, 11.09045],
        name: 'Coburg',
        address_1: 'Rosenauer Strasse 115',
        address_2: 'D-96450 Coburg',
        phone: '+49 (0) 9561 851-0',
        fax: '+49 (0) 9561 851-100',
        email: 'coburg@prodinger.de',
        filter: 'Büro- und Lagerstandorte',
    },
    {
        position: [50.275875, 10.980706],
        name: 'Erfurt',
        address_1: 'Fichtenweg 48',
        address_2: 'D-99098 Erfurt',
        phone: '+49 (0) 36203 697-0',
        fax: '+49 (0) 36203 697-97',
        email: 'erfurt@prodinger.de',
        filter: 'Büro- und Lagerstandorte',
    },
    {
        position: [48.229969, 7.7641863],
        name: 'Herbolzheim',
        address_1: 'Hans-Prodinger-Platz 1',
        address_2: 'D-79336 Herbolzheim',
        phone: '+49 (0) 7643 23 28-0',
        fax: '+49 (0) 7643 23 28-500',
        email: 'herbolzheim@prodinger.de',
        filter: 'Büro- und Lagerstandorte',
    },
    {
        position: [49.4464966, 11.013524],
        name: 'Nürnberg',
        address_1: 'Flachslander Straße 15',
        address_2: 'D-90431 Nürnberg',
        phone: '+49 (0) 911 65704-0',
        filter: 'Büro- und Lagerstandorte',
    },
    {
        position: [50.4453901, 10.89127],
        name: 'Außenlager Brattendorf',
        address_1: 'Eichenstraße 1',
        address_2: 'D-98673 Auengrund OT\nBrattendorf',
        filter: 'Zusätzliche Lagerstandorte',
    },
    {
        position: [50.8684001, 6.7578367],
        name: 'Außenlager Kerpen',
        address_1: 'Alfred-Nobel-Straße 81-91',
        address_2: 'D-50169 Kerpen',
        phone: '+49 2237 979116 600',
        filter: 'Zusätzliche Lagerstandorte',
    },
]

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
