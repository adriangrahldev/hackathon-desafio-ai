import React from 'react'

const MessageH = ({ message }) => {
    return (
        <p className='bg-slate-50 border-solid border border-slate-200 rounded text-xs shadow-sm  p-4 m-4 '>{message}</p>
    )
}

export default MessageH