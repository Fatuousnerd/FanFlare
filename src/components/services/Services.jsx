import { useRef } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";

const variants = {
    initial:{
        x: -500,
        y:100,
        opacity:0,
    },
    animate:{
        x:0,
        y:0,
        opacity:1,
        transition:{
            duration:1,
            staggerChildren: .1,
        }
    },
}

const Services = () => {

    const ref = useRef()

    const isInView = useInView(ref,{margin:"-100px"})

    return(
        <motion.div className="services" variants={variants} initial="initial" /*whileInView="animate"*/ ref={ref} animate={"animate"}>
            <motion.div className="textContainer" variants={variants}>
                <p>Discover How Our Management Services <br /> Can Transform Your Profile</p>
                <hr />
            </motion.div>
            <motion.div className="titleContainer" variants={variants}>
                <div className="title">
                    <img src="/pexels-darcy-delia-345397-1442661.jpg" alt="" />
                    <h1>
                        <motion.b whileHover={{color: "orange"}}>Take</motion.b> Your
                    </h1>
                </div>
                <div className="title">
                    <h1>
                    <motion.b whileHover={{color: "#00AFF0"}} style={{color:"#00AFF9"}}>OnlyFans</motion.b> To the Next Level!
                    </h1>
                    <a href="https://www.jotform.com/form/241734255331552">
                        <button>Join Us Now!</button>
                    </a>
                </div>
            </motion.div>
            <motion.div className="listContainer" variants={variants}>
                <motion.div className="box" whileHover={{background:"white", color:"black"}}>
                    <h2>Account Management</h2><hr/>
                    <div className="holder">
                        <p>FanFlare Media offers comprehensive account management services, handling everything from content scheduling to subscriber interactions. Our team ensures your profile is always active, engaging, and optimized for growth. Let us take care of the daily tasks so you can focus on creating amazing content.</p>
                    </div>
                    <a href="https://www.jotform.com/form/241734255331552">
                        <button>Get Started Today</button>
                    </a>
                </motion.div>
                <motion.div className="box" whileHover={{background:"white", color:"black"}}>
                    <h2>Content Curation</h2><hr/>
                    <div className="holder">
                        <p>Our experts work with you to develop a tailored content strategy that resonates with your audience and drives engagement. We assist with content planning, creation, and optimization, ensuring every post is impactful. Whether it's photos, videos, or exclusive content, we've got you covered.</p>
                    </div>
                    <a href="https://www.jotform.com/form/241734255331552">
                        <button>Get Started Today</button>
                    </a>
                </motion.div>
                <motion.div className="box" whileHover={{background:"white", color:"black"}}>
                    <h2>Marketing & Promotion</h2><hr/>
                    <div className="holder">
                        <p>With our targeted marketing campaigns, we help you reach a wider audience and attract more subscribers. We utilize social media marketing, influencer partnerships, and paid advertising to boost your visibility and grow your fan base. Let us amplify your online presence and maximize your earning potential.</p>
                    </div>
                    <a href="https://www.jotform.com/form/241734255331552">
                        <button>Get Started Today</button>
                    </a>
                </motion.div>
                <motion.div className="box" whileHover={{background:"white", color:"black"}}>
                    <h2>Analytics & Reporting</h2><hr/>
                    <div className="holder">
                     <p>Understanding your performance is key to continuous growth. FanFlare Media provides detailed analytics and reports, offering insights into subscriber behavior, content performance, and revenue trends. Our data-driven approach helps you make informed decisions to enhance your content strategy and achieve your goals.</p>
                    </div>
                    <a href="https://www.jotform.com/form/241734255331552">
                        <button>Get Started Today</button>
                    </a>
                </motion.div>
            </motion.div>
        </motion.div>
    )
};

export default Services;