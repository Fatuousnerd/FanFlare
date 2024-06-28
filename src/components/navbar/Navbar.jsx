import "./navbar.scss";
import {motion} from "framer-motion";
import Sidebar from "../sidebar/Sidebar";

const Navbar = () => {
  return(
   <div className="navbar">
    {/* Sidebar */}
    <Sidebar/>
    <div className="wrapper">
        <motion.span initial={{opacity:0, scale:.5}} animate={{opacity:1, scale:1}} transition={{duration:.5}}>FanFlare Media</motion.span>
        <div className="social">
            <a href=""><img src="" alt="" /></a>
            <a href=""><img src="" alt="" /></a>
            <a href=""><img src="" alt="" /></a>
            <a href=""><img src="" alt="" /></a>
        </div>
    </div>
   </div>
  )
};

export default Navbar;
