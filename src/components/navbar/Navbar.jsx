import "./navbar.scss";
import {motion} from "framer-motion";
import Sidebar from "../sidebar/Sidebar";
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import RedditIcon from '@mui/icons-material/Reddit';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';

const Navbar = () => {
  return(
   <div className="navbar">
    {/* Sidebar */}
    <Sidebar/>
    <div className="wrapper">
        <motion.span initial={{opacity:0, scale:.5}} animate={{opacity:1, scale:1}} transition={{duration:.5}}>FanFlare Media</motion.span>
        <div className="social">
            <a href="https://instagram.com/fanflare_media_"><InstagramIcon/> </a>
            <a href="https://x.com/FanFlareMedia"><XIcon/> </a>
            <a href="https://reddit.com/r/FanFlareMedia"><RedditIcon/> </a>
            <a href="mailto:socialboostmedia@protonmail.com"><EmailIcon/> </a>
        </div>
    </div>
   </div>
  )
};

export default Navbar;
