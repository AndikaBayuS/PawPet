import React from 'react'
import { sectionOne, sectionTwo, sectionThree } from './Data'
import { InfoSection, Services, Footer } from '../../components'

const Home = () => {
    return (
        <>
            <Services />
            <InfoSection {...sectionOne} />
            <InfoSection {...sectionTwo} />
            <InfoSection {...sectionThree} />
            <Footer />
        </>
    )
}

export default Home
