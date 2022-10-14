import React from 'react'
import { useState } from 'react'
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet'
import LocationInfo from './LocationInfo'
import NavigateLink from './NavigateLink'

const defaultLocation = [51, 10]
const defaultZoom = 5.5
const Map = ({ positions }) => {
    const [map, setMap] = useState(null)
    const [filter1, setFilter1] = useState(true)
    const [filter2, setFilter2] = useState(true)
    const [showFilter, setShowFilter] = useState(true)

    const handleShowAll = () => {
        setShowFilter(true)
        map.setView(defaultLocation, defaultZoom)
    }

    const handleShowPointOnMap = (position) => {
        setShowFilter(false)
        map.setView([position[0], position[1]], 12)
        setFilter1(true)
        setFilter2(true)
    }

    return (
        <div>
            {showFilter ? (
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
            ) : (
                <button className='btn btn-primary' onClick={handleShowAll}>
                    Show All
                </button>
            )}

            <MapContainer
                center={defaultLocation}
                zoom={defaultZoom}
                scrollWheelZoom={false}
                ref={setMap}
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
            <div
                className='row row-cols-1 row-cols-md-2 row-cols-lg-3'
                style={{ position: 'relative' }}
            >
                {positions.map((p, index) => (
                    <div className='row col mb-5' key={index}>
                        <div className='col-2 col-md-4 text-center'>
                            <i
                                className='bi bi-map'
                                style={{ fontSize: 40, cursor: 'pointer' }}
                                onClick={() => {
                                    handleShowPointOnMap(p.position)
                                }}
                            ></i>
                        </div>
                        <div className='col-10 col-md-8'>
                            <LocationInfo p={p} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Map
