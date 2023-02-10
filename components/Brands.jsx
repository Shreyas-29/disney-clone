import React from 'react'
import Image from 'next/image';


function Brands() {
    return (
        <section className='flex flex-wrap my-10 pb-40 justify-center items-center mt-10 gap-5 px-8 mx-auto'>
            <div className='group brand h-32 w-52 relative cursor-pointer'>
                <Image src={'/images/disnep.png'} alt='Image' width={1000} height={1000} className='object-cover z-20 relative' />
                <video autoPlay loop playsInline className='hidden group-hover:inline rounded-lg object-cover absolute top-0 left-0 transition-opacity duration-300 ease-out transform'>
                    <source src="/videos/disney.mp4" />
                </video>
            </div>
        </section>
    )
}

export default Brands
