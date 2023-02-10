import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import Image from 'next/image'

function Slider() {
    return (
        <section className='relative mt-8 shadow-2xl mx-auto'>
            <Carousel
                autoPlay
                infiniteLoop
                showStatus={false}
                showIndicators={false}
                showThumbs={false}
                showArrows={false}
                swipeable={true}
                interval={5000}
                >
                <div>
                    <Image src={'/images/slider-1.jpg'} alt='Image' width={1000} height={1000} />
                </div>
                <div>
                    <Image src={'/images/slider-2.jpg'} alt='Image' width={1000} height={1000} />
                </div>
                <div>
                    <Image src={'/images/slider-3.jpg'} alt='Image' width={1000} height={1000} />
                </div>
                <div>
                    <Image src={'/images/slider-4.jpeg'} alt='Image' width={1000} height={1000} />
                </div>
            </Carousel>
        </section>
    )
}

export default Slider
