import React from 'react'
import Banner from '../Layout/Banner';
import Service from "../Layout/Service";
import MyWork from '../Layout/MyPortfolio';
import MyResume from './../Layout/MyResume';
import MyClient from '../Layout/MyClient';
import RecentPost from '../Layout/RecentPost';
import ContractMe from '../Layout/ContractMe';

const Home = () => {
  return (
    <>
    <Banner/>
    <Service/>
    <MyWork/>
    <MyResume/>
    <MyClient/>
    <RecentPost/>
    <ContractMe/>
    </>
  )
}

export default Home