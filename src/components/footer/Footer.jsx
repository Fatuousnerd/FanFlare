import './footer.scss';
import { ArrowOutward, Copyright } from '@mui/icons-material';

const Footer = () => {
    return (
        <>
            <div className='footer'>
                <div className="section">
                    <h1>
                        Let's Work Together
                    </h1>
                    <a href="/apply">
                        <button>
                            <p>Apply Now</p>
                            <ArrowOutward />
                        </button>
                    </a>
                </div>

                <div className="details">
                    <div className="text">
                        <img src="./Logo.png" alt="" />
                        <p>
                            Ready to take your OnlyFans to the next level? Let us manage the details while you focus on what matters most
                        </p>
                        <div className="copy">
                            <Copyright /> FanFlare Media - 2024 - All Rights Reserved!
                        </div>
                    </div>

                    <div className="navi">
                        <p>Navigation</p>
                        <ul>
                            <li><a href="#about">About</a></li>
                            <li><a href="#services">Services</a></li>
                            <li><a href="#testimonials">Testimonials</a></li>
                            {/* <li><a href="/portfolio">Portfolio</a></li> */}
                            <li><a href="/apply">Apply</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer