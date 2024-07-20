import React from 'react'

const MessageH = ({ message }) => {
    return (
        <div className='bg-slate-50 border-solid border border-slate-200 rounded p-4 mx-2 my-3 '>
            <p className=' text-xs '><span className='font-bold'>Tu:</span> {message}</p>
        </div>
    )
}

export default MessageH