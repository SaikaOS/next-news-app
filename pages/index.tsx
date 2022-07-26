import type { NextPage } from 'next'
import { Provider } from 'react-redux'
import NavbarContainer from '../components/navbar-container'
import Layout from '../layouts/layout'
import Main from '../layouts/main'
import { store } from '../store/store'

const Home: NextPage = () => { 
  return (
    <Provider store={store}>
      <Layout>
        <NavbarContainer />
        <Main />
      </Layout>
    </Provider>
  )
}

export default Home
