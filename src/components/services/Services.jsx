import './services.scss';
import { useRef } from 'react';
import { motion } from 'framer-motion';
import { AutoGraph, BubbleChart, Camera, ManageAccounts } from '@mui/icons-material';

const cardVariants = {
    initial:{
        opacity:0,
        y:200,
    },
    animate:{
        opacity:1,
        y:0,
        transition:{
            duration:2,
            stagerChildren:2,
        }
    },
}

const opacityVariants = {
    initial:{
        opacity:0,
    },
    animate:{
        opacity:1,
        transition:{
            duration:2,
            stagerChildren:2,
            delay:2,
        }
    },
}

const services = [
    {
        id:1,
        icon:<ManageAccounts/>,
        title:"24/7 Account Management",
        desc:"FanFlare Media offers comprehensive account management services, handling everything from content scheduling to subscriber interactions.",
        desc1:"Our team ensures your profile is always active, engaging, and optimized for growth. Let us take care of the daily tasks so you can focus on creating amazing content.",
    },
    {
        id:2,
        icon:<AutoGraph/>,
        title:"Marketing & Promotion",
        desc:"With our targeted marketing campaigns, we help you reach a wider audience and attract more subscribers.",
        desc1:"We utilize social media marketing, influencer partnerships, and paid advertising to boost your visibility and grow your fan base. Let us amplify your online presence and maximize your earning potential.",
    },
    {
        id:3,
        icon:<Camera/>,
        title:"Content Curation",
        desc:"Our experts work with you to develop a tailored content strategy that resonates with your audience and drives engagement.",
        desc1:"We assist with content planning, creation, and optimization, ensuring every post is impactful. Whether it's photos, videos, or exclusive content, we've got you covered.",
    },
];

const Content = ({item}) => {
    return(
        <>
        <motion.div className="card" variants={cardVariants}>
            <motion.div className="icon" variants={opacityVariants}>
                {item.icon}
            </motion.div>
            <motion.h1 variants={cardVariants}>{item.title}</motion.h1>
            <motion.p variants={cardVariants}>{item.desc}</motion.p>
            <motion.p variants={cardVariants}>{item.desc1}</motion.p>
            <motion.a href="apply">
                <motion.button>Apply Now</motion.button>
            </motion.a>
        </motion.div>
        </>
    )
};


const Services = () => {
  return (
    <>
        <div className='services' id='services'>
            <h1 className='title'>
                Take Your <span style={{fontSize:"4rem", color: "rgb(0, 175, 249"}}>OnlyFans</span> To The <span style={{color:"#00FFA0"}}>Next Level!</span>
            </h1>
            <motion.div className="cardHolder" variants={cardVariants} initial="initial" whileInView="animate">
            {services.map(item=>(
                <Content item={item} key={item.id} />
               ))}
            </motion.div>
        </div>
    </>
  )
}

export default Services