import { NavLink } from "react-router-dom"
import { useUser } from "../../context/UserContext"
import TranslationPage from "../../views/TranslationPage"
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Navbar = () => {
    const {user} = useUser()
    return (
        <nav id="navDesign">
            <h3>Lost in translation</h3>
            <img id ="logoImg" src="img/Logo.png" alt="logo" width="40"/>

            {user !== null &&
            <div> 
                <h4><NavLink id="navLink" to="/translation">Translations </NavLink></h4>
                <h4><NavLink id="navLink" to="/profile">Profile </NavLink></h4>
                {/* <button><NavLink to="/profile">Button <i className='fas fa-user-circle'></i></NavLink></button> */}
            </div>
            
            

            // <ul>
            //     <li>
            //         <NavLink to="/translation">Translations </NavLink>
            //     </li>
            //     <li>
            //         <NavLink to="/profile">Profile </NavLink>
            //     </li>
            // </ul>
            }

        </nav>

    )
}

export default Navbar


