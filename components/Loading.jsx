import React from 'react'
import { BiLoader, BiLoaderAlt } from 'react-icons/bi'

function Loading() {
    return (
        <div className='grid place-items-center h-screen text-white'>
            <span className="container mx-auto flex items-center space-x-2">
                <BiLoaderAlt className='animate-spin text-blue-500 w-6 h-6' /> Loading...
            </span>
        </div>
    )
}

export default Loading
