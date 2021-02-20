import Link from 'next/link'
import styles from '../components/layout.module.css'
// pages/404.js
export default function Custom404() {
    return (
        <>
        <h1>404 - Page Not Found</h1>
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
        </>
    )
}