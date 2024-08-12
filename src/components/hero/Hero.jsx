import './hero.scss';
import { motion } from 'framer-motion';
import { ChevronRight } from "@mui/icons-material";

const titleVariants = {
  initial:{
    opacity:0,
    y:200,
  },
  animate:{
    opacity:1,
    y:0,
    transition:{
      duration:2,
      stagerChildren:5,
      delayChildren:2,
    }
  },
}

const textVariants = {
  initial:{
    opacity:0,
  },
  animate:{
    opacity:1,
    transition:{
      duration:2,
      stagerChildren:5,
      delayChildren:2,
    }
  },
}

const scrollVariants = {
  initial:{
    opacity:0,
    rotate:90,
  },
  animate:{
    opacity:1,
    y:5,
    transition:{
      duration:2,
      spring: 200,
      damping:400,
      repeat:Infinity,
    }
  }
}

const Hero = () => {
  return (
    <>
        <div className='hero' id='home'>
          <div className="container">

          <motion.div className="titleContainer" variants={titleVariants} initial="initial" whileInView="animate">
            <motion.h1 variants={titleVariants}>
              rise,
            </motion.h1>
            <motion.h1 variants={titleVariants}>
              Thrive,
            </motion.h1>
            <motion.h1 variants={titleVariants}>
              Shine.
            </motion.h1>
          </motion.div>

          <motion.div className="textContainer" variants={textVariants} initial="initial" whileInView="animate">
            <motion.p variants={textVariants}>
              Maximize Your Earnings. Let Us Handle the Rest.
            </motion.p>
            <motion.a href="/apply" variants={textVariants}>
              <motion.button variants={textVariants}>Apply Now</motion.button>
            </motion.a>
          </motion.div>
          </div>
        </div>
        
        <motion.div className="scrollDown">
          <motion.div className="scr" variants={scrollVariants} initial="initial" animate="animate">
            <ChevronRight/>
            <ChevronRight/>
          </motion.div>
        </motion.div>

    </>
  )
}

export default Hero