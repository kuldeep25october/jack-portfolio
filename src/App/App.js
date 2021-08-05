import React from 'react'
import AppRoutes from '../Routes/index'
import '../App/App.scss'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import ScrollToTop from '../Components/Atom/ScrollToTop/ScrollButton'

const App = () => {
  return (
    <>
      <AppRoutes />
      <ScrollToTop />
    </>
  )
}
export default App;
