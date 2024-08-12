import './about.scss';
import { Instagram, Mail, Reddit, X } from '@mui/icons-material';

const About = () => {
  return (
    <>
        <div className='about' id='about'>
          <div className="wrap">
            <div className="imageContainer">
              <div className="imageWrap">
                <img src="./About.jpg" alt="" />
              </div>
            </div>
            <div className="textContainer">
              <div className="title">
                <h1>About Us</h1>
              </div>
              <div className="text">
                <p>
                  At FanFlare Media, we believe in empowering creators to reach their full potential on OnlyFans. 
                  Founded with a passion for helping talent shine, 
                  we specialize in managing the behind-the-scenes aspects of your brand, 
                  so you can focus on what you do best—creating captivating content for your fans.
                </p>
                <p>
                  Our team of experts understands the unique challenges of growing a successful OnlyFans account. 
                  From optimizing your profile and enhancing engagement to strategizing content and driving revenue, 
                  we provide the tools and support needed to elevate your brand. 
                  We take pride in our hands-on approach, 
                  offering personalized guidance tailored to your individual style and goals.
                </p>
                <p>
                  With FanFlare Media by your side, you're not just another creator—you're a brand with unlimited potential. We handle the hard stuff so you can enjoy the creative freedom that made you fall in love with content creation in the first place.
                </p>
                <p>
                  Join us, and let's turn your passion into profit, one post at a time.
                </p>
              </div>
            </div>
          </div>
          <div className="socials">
            <ul>
              <li><a href="https://x.com/fanflare"><X/></a></li>
              <li><a href="https://instagram.com/fanflare_media_"><Instagram/></a></li>
              <li><a href="https://reddit/fanflare"><Reddit/></a></li>
              <li><a href="mailto:fanflaremedia@protonmail.com"><Mail/></a></li>
            </ul>
          </div>
        </div>
    </>
  )
}

export default About