
import './App.css'
import Footer from './Components/Footer'
import Banner from './Components/Layout/Banner'
import ContractMe from './Components/Layout/ContractMe'
import Customer from './Components/Layout/Coustomer'
import Header from './Components/Layout/Header'
import MyClient from './Components/Layout/MyClient'
import MyResume from './Components/Layout/MyResume'
import MyWork from './Components/Layout/MyWork'
import RecentPost from './Components/Layout/RecentPost'
import Service from './Components/Layout/Service'


function App() {


  return (
    <>
      <Header/>
      <Banner/>
      <Service/>
      <MyWork/>
      <MyResume/>
      <Customer/>
      <MyClient/>
      <RecentPost/>
      <ContractMe/>
      <Footer/>
    </>
  )
}

export default App
