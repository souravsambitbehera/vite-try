import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ImageShow from './ImageShow.jsx'
import ShowData from './components/ShowData.jsx'
import { RouterProvider } from 'react-router-dom'
import { appRouter } from './react-router/Router.jsx'
import Footer from './components/Footer.jsx'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <RouterProvider router={appRouter} /> */}
    {/* <ImageShow /> */}
    <Slider>
    <Footer />
    </Slider>
    
    
  </React.StrictMode>,
)
