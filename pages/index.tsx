import type { NextPage } from 'next'
import { Provider } from 'react-redux'
import Header from '../layouts/header'
import Main from '../layouts/main'
import { store } from '../store/store'

const Home: NextPage = () => { 
  return (
    <Provider store={store}>
      <div className='min-h-screen max-w-6xl my-0 mx-auto'>
      <Header />
      <Main />
    </div>
    </Provider>
  )
}

export default Home
