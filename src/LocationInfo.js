import React from 'react'
import NavigateLink from './NavigateLink'

const LocationInfo = ({ p }) => {
    return (
        <div>
            <p className='fw-bold'>{p.name}</p>
            <p>
                {p.address_1}
                <br />
                {p.address_2}
            </p>
            {p['phone'] !== undefined && (
                <a href={`tel:${p.phone}`} className='link-info'>
                    {p.phone}
                </a>
            )}
            <br />
            {p['email'] !== undefined && (
                <a href={`mailto:${p.email}`} className='link-info'>
                    {p.email}
                </a>
            )}
            <NavigateLink position={p.position} />
        </div>
    )
}

export default LocationInfo
