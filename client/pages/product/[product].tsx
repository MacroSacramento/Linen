import { useRouter } from 'next/router'
import Layout from '../../components/layout'

import styles from '../../styles/product.module.css'

export default function Product() {
    const { product } = useRouter().query

    return (
        <Layout>
            <div className={styles.product} >
                <div className={styles.product_display}>
                    <div className={styles.product_image__main}>

                    </div>
                    <div className={styles.product_image__container}>
                        <div className={styles.product_image__subImage}></div>
                        <div className={styles.product_image__subImage}></div>
                        <div className={styles.product_image__subImage}></div>
                        <div className={styles.product_image__subImage}></div>
                    </div>
                </div>
                <div className={styles.product_desc}>
                    adad
                </div>
            </div>
        </Layout>
    )
}