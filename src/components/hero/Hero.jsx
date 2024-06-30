import "./hero.scss"
import { motion } from "framer-motion";

const textVariants = {
    initial:{
        x: -500,
        opacity:0,
    },
    animate:{
        x: 0,
        opacity:1,
        transition:{
            duration: 1,
            staggerChildren:.1
        }
    },
    scrollButton:{
        opacity:0,
        y:10,
        transition:{
            duration:2,
            repeat:Infinity,
        }
    }
};

const sliderVariants = {
    initial:{
        x: 0,
    },
    animate:{
        x: "-220%",
        transition:{
            duration: 20,
            repeat:Infinity,
            repeatType:"mirror"
        }
    }
};

const Hero = () => {
    return (
        <div className="hero">
            <div className="wrapper">
                <motion.div className="textContainer" variants={textVariants} initial="initial" animate="animate">
                    <motion.h2 variants={textVariants}>FANFLARE MEDIA</motion.h2>
                    <motion.h1 variants={textVariants}><span>OnlyFans</span> Management Agency</motion.h1>
                    <motion.div variants={textVariants} className="buttons">
                        <motion.a href="#Portfolio">
                            <motion.button variants={textVariants}>Portfolio</motion.button>
                        </motion.a>
                        <motion.a href="#Contact">
                            <motion.button variants={textVariants}>Contact Us</motion.button>
                        </motion.a>
                    </motion.div>
                    <motion.img variants={textVariants} animate="scrollButton" src="/scroll.png" alt="" />
                </motion.div>
            </div>
            <motion.div className="slidingTextContainer" variants={sliderVariants} initial="initial" animate="animate">
                OnlyFans Management Agency
            </motion.div>
            <div className="imageContainer">
                <img src="/FANFLARE_MEDIA-removebg-preview.png" alt="" />
            </div>
        </div>
    )
};

export default Hero;