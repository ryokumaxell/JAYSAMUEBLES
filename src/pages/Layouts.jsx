import { Outlet } from "react-router-dom";

import Header from "../components/Header";
import Carrusel from '../components/Hero'


export default function Layouts() {return(
    <>
    <Header/>
    <Carrusel/>
    <main>
    
    <Outlet/>
    
    </main>
   
    </>
)}