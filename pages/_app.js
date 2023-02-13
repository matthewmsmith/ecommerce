
import { Layout } from '../components'
import '../styles/globals.css'
import { StateContext } from '../context/StateContext'

export default function App({ Component, pageProps }) {
  return (
    <StateContext StateContext>
      <Layout>
    <Component {...pageProps} />
  </Layout>
    </StateContext>

  )   
}
