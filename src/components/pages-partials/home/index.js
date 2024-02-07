import SharedLayout from '@/components/layout/shared-layout'
import Hero from './hero'
import Products from './card'

const Home = () => {
  return (
    <SharedLayout title="Home">
      <Hero />
      <Products />
    </SharedLayout>
  )
}

export default Home
