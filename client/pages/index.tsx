import Showcase from "../components/showcase"

import Layout from "../components/layout"
import styles from "../styles/styles.module.css"

export default function Home() {
    return (
        <Layout>
            <header className={styles.hero_wrapper}>
                <div className={styles.hero}>
                    <h1 className={styles.hero_title}>Hero</h1>
                </div>
            </header>
            <Showcase></Showcase>
        </Layout>
    )
}