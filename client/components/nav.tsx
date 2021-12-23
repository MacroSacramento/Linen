import Link from 'next/link'

import styles from '../styles/styles.module.css'
import nav_styles from './styles/nav.module.css'

export default function Nav() {
    return (
        <nav className={nav_styles.nav_wrapper}>
            <Link href="/">
                <h1 className={nav_styles.logo}>LINEN</h1>
            </Link>
        </nav>
    )
}