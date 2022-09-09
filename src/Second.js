import React from 'react'
import { useState } from 'react'
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet'
import LocationInfo from './LocationInfo'
import NavigateLink from './NavigateLink'

const Second = ({ positions }) => {
    const [showMapIndex, setShowMapIndex] = useState(-1)

    const handleShowMap = (index) => {
        setShowMapIndex(index)
    }

    const handleCloseMap = () => {
        setShowMapIndex(-1)
    }
    return (
        <div>
            <div style={{ height: 1200 }}>
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
                                        handleShowMap(index)
                                    }}
                                ></i>
                            </div>
                            <div className='col-10 col-md-8'>
                                <LocationInfo p={p} />
                            </div>
                            {showMapIndex == index && (
                                <div
                                    style={{
                                        height: 600,
                                        width: '100%',
                                        backgroundColor: '#aaaaaaaa',
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        padding: 0,
                                    }}
                                >
                                    <button
                                        className='btn btn-danger m-0'
                                        onClick={handleCloseMap}
                                    >
                                        <i className='bi bi-x-circle-fill'></i>
                                    </button>
                                    <MapContainer
                                        center={p.position}
                                        zoom={12}
                                        scrollWheelZoom={false}
                                        style={{
                                            height: '100%',
                                            width: '100%',
                                            backgroundColor: 'gray',
                                            marginTop: '8px',
                                            marginBottom: '9px',
                                        }}
                                    >
                                        <TileLayer
                                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                            url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
                                        />
                                        <Marker
                                            key={index}
                                            shadowPane={false}
                                            position={p.position}
                                        >
                                            <Popup>
                                                <NavigateLink
                                                    position={p.position}
                                                />
                                            </Popup>
                                        </Marker>
                                    </MapContainer>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Second
