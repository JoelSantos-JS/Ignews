import type {  NextPage } from 'next'
import  { GetStaticProps } from 'next'
import styles from './home.module.scss'

import Head from 'next/head'
import { SubButton } from '../components/SubsButton'
import { stripe } from '../services/stripe'



interface HomeProps {
  product: {
    priceId: string
    amount: number
  }
}


const Home: NextPage = ({product} : HomeProps) => {
  return (
      <>

<Head>

<title>Inicio / Ig.news</title>
</Head>
      <main className={styles.contentContainer}>
        <section className={styles.hero}>
          <span>👏 Hey , Welcome</span>

          <h1>News About the <span>React</span> World </h1>

          <p>
            Get All Acess to all the publication <br/>
            <span>For {product.amount} month</span>
          </p>
          <SubButton priceId={product.priceId}/>

        </section>

        <img src="/images/avatar.svg" alt="girl" />
      </main>


    </>
  )
}

export default Home

export const getStaticProps: GetStaticProps = async () => {
    const price = await stripe.prices.retrieve('price_1LQXCrAaD4Ol6R4rNyRMUyw1' , {
      
    }) 

    const product ={ 
      priceId: price.id,
      amount: new  Intl.NumberFormat('en-US' , {
        style : 'currency',
        currency: 'USD'
      }).format(price.unit_amount / 100)
    }
  
  return {
        props: {
          product,
        },
        revalidate: 60* 60 * 24
    }
}