import img1 from './images/logo.svg';
import user from './images/user2.png';
import "./NavbarStyles.css";
function Topbar(){
    return(
        <>
        <nav>
            <img src={img1}  height= "48" width="49" viewbox = "0 0 49 48" fill="none"alt=""/>
           <button><img src={user} height= "28" width="29" viewbox = "0 0 29 28" fill="none"alt=""></img></button>
        </nav>
        </>
    )
}
export default Topbar;