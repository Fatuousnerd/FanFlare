import "./portfolio.scss";
import Pre from "./pre-portfolio.jsx";
import Navbar from "../navbar/Navbar";
import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import ScrollUp from "../scrollUp/ScrollUp.jsx";

const items = [
    {
        id:1,
        title:" Isabella Martinez(Bella Blaze)",
        img:"./people.webp",
        desc:"Increased subscriber count by 200% in six months through strategic content planning and targeted promotions.",
    },
    {
        id:2,
        title:"Alexis Johnson(Lexi Lux)",
        img:"./hero.png",
        desc:"Boosted monthly earnings by 150% with optimized pricing strategies and exclusive content offerings.",
    },
    {
        id:3,
        title:"Rachel Thompson(Raven Rose)",
        img:"./hero.png",
        desc:"Achieved a 300% increase in engagement rates by implementing a tailored marketing campaign and interactive content.",
    },
    {
        id:4,
        title:"Emily Carter(Luna Lush)",
        img:"./hero.png",
        desc:"Grew social media following by 500% with our comprehensive social media management and influencer partnerships.",
    },
];

const Single = ({item}) => {

    const ref = useRef()

    const {scrollYProgress} = useScroll({target:ref, 
        // offset:["start start", "end start"]
            });

    const y = useTransform(scrollYProgress,[0,1],[-600,600])

    return(
        <section>
            <div className="container">
                <div className="wrapper">
                    <div className="imageContainer" ref={ref}>
                        <img src={item.img} alt="" />
                    </div>
                    <motion.div className="textContainer" style={{y}}>
                        <h2>{item.title}</h2>
                        <p>{item.desc}</p>
                        <button>Work With Us!</button>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

const Portfolio = () =>{
    
    const ref = useRef()

    const {scrollYProgress} = useScroll({target:ref, offset:["end end", "start start"]});

    const scaleX = useSpring(scrollYProgress,{
        stiffness:100,
        damping:30,
    })
    
    return(
        <>
            <ScrollUp/>
            <section>
                <Pre />
            </section>
            <Navbar />
            <section>
                <div className="portfolio" ref={ref}>
                    <div className="progress">
                        <h1>Featured Works</h1>
                        <motion.div style={{scaleX}} className="progressBar"></motion.div>
                    </div>
                    {items.map(item=>(
                        <Single item={item} key={item.id} />
                    ))}
                </div>
            </section>
        </>
    )
};

export default Portfolio