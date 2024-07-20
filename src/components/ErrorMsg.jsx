import React from 'react'

const ErrorMsg = ({ message }) => {
    return (
        <p className='bg-red-50 border-solid border border-red-200 rounded text-xs shadow-sm  p-4 m-4 '>{message}</p>
    )
}

export default ErrorMsg