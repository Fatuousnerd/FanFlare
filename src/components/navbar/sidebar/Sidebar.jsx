import './sidebar.scss';
import Popup from './Popup';
import Toggle from './Toggle';
import { useState } from 'react';
import { motion } from 'framer-motion';

const variants = {
  open:{
      clipPath: "circle(1200px at 50px 50px)",
      transition: {
          type: "spring",
          stiffness: 20,
      }
  },
  closed:{
      clipPath: "circle(30px at 50px 50px)",
      transition: {
          delay:.5,
          type: "spring",
          stiffness: 400,
          damping: 40,
      }
  },
};

const Sidebar = () => {

  const [open, setOpen] = useState(false);

  const states = () => {
    {open === true ? console.log("Opened") : console.log("Closed")}
  }
  


  return (
    <>
        <motion.div className='sidebar' animate={open ? "open" : "closed"}>
            <motion.div className="bg" variants={variants}>
              {open && <Popup />}
            </motion.div>
            <Toggle setOpen={setOpen} onClick={states}/>
        </motion.div>
    </>
  )
}

export default Sidebar