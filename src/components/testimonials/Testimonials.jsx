import './testimonials.scss';
import { BubbleChart } from '@mui/icons-material';
import { motion } from 'framer-motion';

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
        profile:"./pexels-john-rocha-62772-226326.jpg",
        name:"Emily Carter(Luna Lush)",
        testi:"FanFlare Media completely transformed my OnlyFans account. Their support allowed me to focus on content while they handled everything else. My earnings have never been better!",
    },
    {
        id:2,
        profile:"./pexels-marx-ilagan-963469.jpg",
        name:"Isabella Martinez(Bella Blaze)",
        testi:"I was struggling to grow my audience, but FanFlare Media's strategies made all the difference. They really understand what works on OnlyFans.",
    },
    {
        id:3,
        profile:"./pexels-pixabay-206369.jpg",
        name:"Alexis Johnson(Lexi Lux)",
        testi:"Working with FanFlare Media has been a game-changer. They took the stress out of managing my account, and my engagement has skyrocketed",
    },
];

const Content = ({item}) => {
    return(
        <motion.div className="card" variants={cardVariants}>
            <motion.p variants={cardVariants}>{item.testi}</motion.p>
            <motion.div className="profile" variants={opacityVariants}>
                <img src={item.profile} alt="" />
                <motion.h1 variants={cardVariants}>{item.name}</motion.h1>
            </motion.div>
        </motion.div>
    )
};

const Testimonials = () => {
  return (
    <>
        <div className='testimonials' id='testimonials'>
            <h1 className="title">What Our Models Think</h1>
            <motion.div className="cardHolder" variants={cardVariants} initial="initial" whileInView="animate">
            {services.map(item=>(
                <Content item={item} key={item.id} />
               ))}
            </motion.div>
        </div>
    </>
  )
}

export default Testimonials