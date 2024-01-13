"use client"
import Home from "./Slider";
import AllCategories from "./Product";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css'
import "./globals.css";
import Footer from "./Footer"

const page=()=>{
  return(
    <div>
      <Home/><br />
      <AllCategories/><br/>
      <Footer/><br />
    </div>



  )
}
export default page;

