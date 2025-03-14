import styles from './bookingmenu.module.css';
import Link from 'next/link';

export default function BookingMenu() {
    return (
        <div className={`${styles.submenu} bg-white text-black shadow-md`}>
            <h3 className="text-lg font-medium mb-4 text-black">Booking Options</h3>
            <ul className="space-y-2">
                <li>
                    <Link href="/booking" className="text-blue-600 hover:text-blue-800">
                        Make a Booking
                    </Link>
                </li>
                <li>
                    <Link href="/booking/manage" className="text-blue-600 hover:text-blue-800">
                        Manage Bookings
                    </Link>
                </li>
            </ul>
        </div>
    );
}