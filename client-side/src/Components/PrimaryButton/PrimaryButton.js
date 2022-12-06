import React from 'react'

const PrimaryButton = ({ children, classes }) => {
    return (
        <button

            className={`hover:text-gray-100 bg-gradient-to-r from-amber-900 to-amber-700 text-white ${classes}`}
        >
            {children}
        </button>
    )
}

export default PrimaryButton