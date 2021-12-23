import styles from '../styles/styles.module.css'
import Nav from './nav'

export default function Layout(
    { children }: {
        children: React.ReactNode
    }) {
        return (
            <>
                <Nav />
                <main className={styles.container}>
                    {children}
                </main>
            </>
        )
}