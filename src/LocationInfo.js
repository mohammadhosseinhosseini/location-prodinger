import React from 'react'
import NavigateLink from './NavigateLink'

const LocationInfo = ({ p }) => {
    return (
        <div>
            <p>PRODINGER packaging</p>
            <p>
                {p.address_1}
                <br />
                {p.address_2}
            </p>
            <a href={`tel:${p.phone}`} className='link-info'>
                {p.phone}
            </a>
            <br />
            <a href={`mailto:${p.email}`} className='link-info'>
                {p.email}
            </a>
            <NavigateLink position={p.position} />
        </div>
    )
}

export default LocationInfo
