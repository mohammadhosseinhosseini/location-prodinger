import React from 'react'
import { useState } from 'react'
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet'
import LocationInfo from './LocationInfo'
import NavigateLink from './NavigateLink'

const First = ({ positions }) => {
    const [filter1, setFilter1] = useState(true)
    const [filter2, setFilter2] = useState(true)
    return (
        <div>
            <div className='d-flex'>
                <div className='form-check form-switch me-3'>
                    <input
                        className='form-check-input'
                        type='checkbox'
                        id='filter-1'
                        checked={filter1}
                        onChange={() => {
                            setFilter1((pre) => !pre)
                        }}
                    />
                    <label className='form-check-label' htmlFor='filter-1'>
                        Filter 1
                    </label>
                </div>
                <div className='form-check form-switch'>
                    <input
                        className='form-check-input'
                        type='checkbox'
                        id='filter-2'
                        checked={filter2}
                        onChange={() => {
                            setFilter2((pre) => !pre)
                        }}
                    />
                    <label className='form-check-label' htmlFor='filter-2'>
                        Filter 2
                    </label>
                </div>
            </div>
            <MapContainer
                center={[51, 10]}
                zoom={5.5}
                scrollWheelZoom={false}
                style={{
                    height: 600,
                    backgroundColor: 'gray',
                    marginTop: '8px',
                    marginBottom: '9px',
                }}
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
                />
                {positions.map((p, index) => {
                    if (
                        (p.filter === 1 && filter1) ||
                        (p.filter === 2 && filter2)
                    )
                        return (
                            <Marker
                                key={index}
                                shadowPane={false}
                                position={p.position}
                            >
                                <Popup>
                                    <LocationInfo p={p} />
                                </Popup>
                            </Marker>
                        )
                    else return null
                })}
            </MapContainer>
        </div>
    )
}

export default First
