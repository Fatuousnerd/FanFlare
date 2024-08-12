import { useRef } from "react";
import "./mservices.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
    {
        id:1,
        title:"",
        img:"./people.webp",
        desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam ab laborum ut, similique, aliquid ducimus possimus nihil error delectus exercitationem eligendi. Illo aperiam perferendis dignissimos corporis labore, hic et fugiat?",
    },
    {
        id:2,
        title:"",
        img:"./people.webp",
        desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam ab laborum ut, similique, aliquid ducimus possimus nihil error delectus exercitationem eligendi. Illo aperiam perferendis dignissimos corporis labore, hic et fugiat?",
    },
    {
        id:3,
        title:"",
        img:"./people.webp",
        desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam ab laborum ut, similique, aliquid ducimus possimus nihil error delectus exercitationem eligendi. Illo aperiam perferendis dignissimos corporis labore, hic et fugiat?",
    },
    {
        id:4,
        title:"",
        img:"./people.webp",
        desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam ab laborum ut, similique, aliquid ducimus possimus nihil error delectus exercitationem eligendi. Illo aperiam perferendis dignissimos corporis labore, hic et fugiat?",
    },
];

const Single = ({item}) => {
    const ref = useRef()

    const {scrollYProgress} = useScroll({target:ref,

    });

    const y = useTransform(scrollYProgress,[0,1],[-200,200]);

    return(
        <>
        <section>
            <div className="container">
                <div className="wrapper">
                    <div className="imageContainer" ref={ref}>
                        <img src={item.img} alt="" />
                    </div>
                    <motion.div className="textContainer" style={{y}}>
                        <h2>{item.title}</h2>
                        <p>{item.desc}</p>
                        <a href="">
                            <button>Work With Us</button>
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
        </>
    )
}

const MServices = () => {

    const ref = useRef()

    const {scrollYProgress} = useScroll({target:ref, offset:["end end", "start start"]});

    const scaleX = useSpring(scrollYProgress,{
        stiffness:100,
        damping:30,
    })

  return (
    <div className="mservices" ref={ref}>
        <div className="progress">
            <h1>Featured Works</h1>
            <motion.div style={{scaleX}} className="progressBar"></motion.div>
        </div>
        {items.map(item=>(
            <Single item={item} key={item.id} />
        ))}
    </div>
  )
};

export default MServices
