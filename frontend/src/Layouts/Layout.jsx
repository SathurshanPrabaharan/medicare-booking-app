import React from 'react'

import Header from '../Components/Header/Header'
import Footer from '../Components/Footer/Footer'
import Routers from '../Routes/Routers'

function Layout() {
  return (
    <div>
        <Header/>
        <main>
            <Routers/>
        </main>
        <Footer/>
    </div>
  )
}

export default Layout