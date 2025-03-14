import styles from './topmenu.module.css'
import Image from 'next/image'
import TopMenuItem from './TopMenuItem';

export default function TopMenu(){
    return (
        <div className={styles.menucontainer}>
            <div className={styles.menuItems}>
                <Image 
                    src={'/img/logo.png'}
                    className={styles.logoimg}
                    alt='logo'
                    width={30}
                    height={30}
                    style={{ objectFit: 'contain' }}
                />
                <TopMenuItem title='Booking' pageRef='/booking'/>
                
            </div>
        </div>
    );
}