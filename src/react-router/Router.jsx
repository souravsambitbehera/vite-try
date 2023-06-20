import React from 'react'
import Header from './Header'
import { Outlet, createBrowserRouter } from 'react-router-dom'
import Footer from './Footer'
import About from './About'
import ShowData from './ShowData'
import BannerPage from './BannerPage'

const AppLayout = () => {
  return (
    <>
        <Header />
        <Outlet/>
        <Footer/>
        </>

  )
}
export const appRouter = createBrowserRouter([
    {
        path:"/",
        element:<AppLayout />,
        children :[
            {
                path:'/',
                element:<BannerPage />
            },

            {
                path:"/about",
                element:<About />,

            },
            {
                path:"/showdata",
                element:<ShowData />
            }
        ]
    }
])



export default AppLayout