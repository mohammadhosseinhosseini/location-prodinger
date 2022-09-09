import React from 'react'

const NavigateLink = ({ position }) => {
    return (
        <div>
            <a
                href={`https://google.com/maps/dir/?api=1&destination=${position}`}
                className='link-warning'
                target='_blank'
            >
                Navigate
            </a>
        </div>
    )
}

export default NavigateLink
