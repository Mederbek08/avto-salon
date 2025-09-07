

import Layout from './layout/Layout'
import Header from './components/Header/Header'
import Banner from './components/Banner/Banner'
import FilterAuto from './components/FilterAuto/FilterAuto'
import AutoCards from './components/AutoCards/AutoCards'
import Card from './components/Card/Card'

const App = () => {
  return (
    <div>
      <Layout>
        <Header />
        <Banner />
        <FilterAuto />
        <AutoCards />
        <Card />
      </Layout>
    </div>
  )
}

export default App

// react-router
// axios
// tailwind css
// react-icons
// 200 + 1080px