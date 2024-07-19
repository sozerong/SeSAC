import Link from 'next/link';
import styles from './Navbar.module.css';

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <Link href="/">Chatbot</Link>
            <Link href="/calendar">Calendar</Link>
            <Link href="/missing">Missing Persons</Link>
            <Link href="/profile">
                <img src="/profile-icon.png" alt="Profile" className={styles.profileIcon} />
            </Link>
        </nav>
    );
};

export default Navbar;
