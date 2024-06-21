import { BrowserRouter, Routes, Route } from "react-router-dom";

import Erro from "./pages/erro";
import Home from "./pages/home";
import Filme from "./pages/Filme";
import Favoritos from "./pages/Favoritos";
import Header from "./componentes/Header";


function RouterApp(){


    return(

        <BrowserRouter>
            <Header/>
            <Routes>

                <Route path="/"  element={<Home/>}></Route>
                <Route path="*"  element={<Erro/>}></Route>
                <Route path="/Favoritos"  element={<Favoritos/>}></Route>
                <Route path="/Filmes"  element={<Filme/>}></Route>


            </Routes>
        </BrowserRouter>



    );



}


export default RouterApp;