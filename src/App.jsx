import Navbar from './Compnonents/Navbar'
import Header from './Compnonents/Header/Header'
import About from './Compnonents/About/About'
import Services from './Compnonents/Services/Services'
import Work from './Compnonents/Mywork/Work'
import Contact from './Compnonents/Contact/Contact'
import Footer from './Compnonents/Footer/Footer'
import People from './Compnonents/People/People'

const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Header></Header>
      <About></About>
      <Services></Services>
      <Work></Work>
      <People></People>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  )
}

export default App
