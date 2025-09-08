
import './App.css'
import Footer from './Components/Footer'
import Banner from './Components/Layout/Banner'
import ContractMe from './Components/Layout/ContractMe'
import Header from './Components/Layout/Header'
import MyClient from './Components/Layout/MyClient'
import MyResume from './Components/Layout/MyResume'
import MyWork from './Components/Layout/MyWork'
import RecentPost from './Components/Layout/RecentPost'
import Service from './Components/Layout/Service'
import MyCustomer from './Components/MyCustomer';

function App() {


  return (
    <>
      <Header/>
      <Banner/>
      <Service/>
      <MyWork/>
      <MyResume/>
      <MyCustomer/>
      <MyClient/>
      <RecentPost/>
      <ContractMe/>
      <Footer/>
    </>
  )
}

export default App
