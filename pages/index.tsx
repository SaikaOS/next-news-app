import type { NextPage } from 'next'
import Header from '../layouts/header'

const Home: NextPage = () => {
  return (
    <div className='bg-gray-500 flex min-h-screen'>
      <Header />
    </div>
  )
}

export default Home
