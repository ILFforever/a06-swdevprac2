'use client';

import styles from './banner.module.css';
import Image from 'next/image';
import { useState } from 'react';

export default function Banner() {
    const covers = ['/img/cover.jpg', '/img/cover2.jpg', '/img/cover3.jpg'];
    const [index, setIndex] = useState(0);

    const handleBannerClick = () => {
        setIndex((prevIndex) => (prevIndex + 1) % covers.length);
    };

    return (
        <div className={styles.banner} onClick={handleBannerClick}>
            <Image 
                src={covers[index]}
                alt="cover"
                fill={true}
                objectFit='cover'
            />
            <div className={`${styles.bannerText} bg-black bg-opacity-40 p-4 rounded-lg`}>
                <h1 className='text-4xl front-medium text-white'>where every event finds its venue</h1>
                <h3 className='text-xl font-serif text-white'>Perfect Spaces, Memorable Moments - Your Event Journey Starts Here</h3>  
            </div>
        </div>
    );
}