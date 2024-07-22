import "./contact.scss"
import { motion, useInView } from "framer-motion";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

const variants = {
    initial:{
        y:500,
        opacity:0,
    },
    animate:{
        y:0,
        opacity:1,
        transition:{
            duration: .5,
            staggerChildren:.1,
        },
    },
}

const Contact = () => {

    //const ref = useRef()
    
    const formRef = useRef()

    const [error,setError] = useState(false)
    
    const [success,setSuccess] = useState(false)

    //const isInView = useInView(ref, {margin:"-100px"})

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_ey11r7z', 'template_76uicad', form.current, {
            publicKey: 'yFNDsfwT8__PnMjDk',
          })
          .then(
            () => {
              //console.log('SUCCESS!');
              setSuccess(true)
            },
            (error) => {
                //console.log('FAILED...', error.text);
                setError(true)
            },
          );
      };

    return(
        <motion.div className="contact" variants={variants} initial="initial" whileInView="animate">
            <motion.div className="textContainer" variants={variants}>
                <h1>Let's Work Together</h1>
                <motion.div className="item" variants={variants}>
                    <h2>Mail</h2>
                    <span><a href="mailto:socialboostmedia@protonmail.com">socialboostmedia@protonmail.com</a></span>
                </motion.div>
                <motion.div className="item" variants={variants}>
                    <h2>Instagram</h2>
                    <span><a href="https://instagram.com/fanflare_media_">FanFlare Media</a></span>
                </motion.div>
                <motion.div className="item" variants={variants}>
                    <h2>Phone</h2>
                    <span>##########</span>
                </motion.div>
            </motion.div>
            <motion.div className="formContainer">
                <motion.div className="phoneSvg" initial={{opacity:1}} whileInView={{opacity:0}} transition={{delay:3, duration:1}}>
                    {/*<svg version="1.1" id="Icons" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
	                    viewBox="0 0 32 32" xml:space="preserve">
                        <path class="st0" d="M17.6,18.8c-0.4,0.4-0.8,1-1.1,1.5c-1.8-1.4-3.4-3.1-4.8-4.8c0.6-0.3,1.1-0.7,1.5-1.1c2-2,1.3-4.6-0.7-6.6
	                    S8,5,5.9,7.1s-2.3,5.7-0.7,8c2.9,4.4,7.3,8.8,11.7,11.7c2.4,1.6,6,1.3,8-0.7s1.3-4.6-0.7-6.6S19.6,16.7,17.6,18.8z"/>
                        <path class="st1" d="M27.9,13.9c0-5.5-4.4-9.9-9.9-9.9"/>
                        <path class="st1" d="M23,13.7c0-2.6-2.2-4.7-4.9-4.7"/>
                    </svg>*/}
                </motion.div>
                <motion.form ref={formRef} onSubmit={sendEmail} initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay:2, duration:1}}>
                    <input type="text" placeholder="Name" name="name"/>
                    <input type="email" placeholder="Email" name="email"/>
                    <textarea rows="10" placeholder="Message" name="message"/>
                    <button>Submit</button>
                    {error && "Error"}
                    {success && "Success"}
                </motion.form>
            </motion.div>
        </motion.div>
    )
};

export default Contact;