import { useState } from 'react'
import './App.css'
import Header from './component/Header/Header'
import Cards from './component/Cards/Cards'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {

  return (
    <>
      <Header></Header>
      <Cards></Cards>
    </>
  )
}

export default App
