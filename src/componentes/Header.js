import { Link } from "react-router-dom";
import './Header.css';


function Header(){

    return(

                <header>


                    

                    <Link to ='/' className="Logo"> KejuFlix </Link>
                    <Link to ='/Filmes' className="filmes"> Filmes </Link>
                    <Link to ='/Favoritos' className="favoritos"> Favoritos </Link>


                    


                </header>




        


    );
   


}


export default Header;