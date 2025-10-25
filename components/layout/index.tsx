import React from 'react'
import Footer from './footer'
import Navbar from './nav'


type RootLayoutProps = {
  children: React.ReactNode
}

const MainRootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <div>
      <Navbar />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default MainRootLayout