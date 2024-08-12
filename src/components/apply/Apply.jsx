import './apply.scss';
import Navbar from '../navbar/Navbar';
import Sidebar from '../navbar/sidebar/Sidebar';

const sendEmail = (e) => {
    e.preventDefault()

    const sm = document.getElementById('stat');

    emailjs.init({
        publicKey: 'yFNDsfwT8__PnMjDk',
      });

    emailjs.sendForm('service_ey11r7z', 'template_76uicad', '#myForm').then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
          sm.style.color = 'green';
          sm.innerHTML = "Message Sent!";
        },
        (error) => {
          console.log('FAILED...', error);
          sm.style.color = 'red';
          sm.innerHTML = "Failed!! Message Not Sent! Try Again!";

        },
      );
};

const Apply = () => {
  return (
    <>
        <Sidebar/>
        <Navbar />
        <div className='apply'>
            <div className="cta">
            <a href="/">
                <button>Home</button>
            </a>
                <h1>
                    Apply Now
                </h1>
            </div>
            
            <div className="form">
                <form onSubmit={sendEmail} id="myForm">
                    <div className="info">
                        <div className="tx">
                            <label htmlFor="name">Full Name*</label> 
                            <input type="text" name="name" placeholder="Jane Doe" required/>
                        </div>
                        <div className="tx">
                            <label htmlFor="email">Email*</label> 
                            <input type="email" name="email" placeholder="E.g., socialboostmedia@protonmail.com" required/>
                        </div>
                        <div className="tx">
                            <label htmlFor="instagram">Instagram Handle</label> 
                            <input type="text" name="instagram" placeholder="fanflare_media_" />
                        </div>
                        <div className="tx">
                            <label htmlFor="twitter">Twitter/X Handle</label> 
                            <input type="text" name="twitter" placeholder="leakedflixx" />
                        </div>
                        <div className="tx">
                            <label htmlFor="country">Country Of Residence*</label> 
                            <input type="text" name="country" placeholder="United States of America (USA)" required/>
                        </div>
                        <div className="tx">
                            <label htmlFor="career">Career Span*</label> 
                            <input type="text" name="career" placeholder="E.g., 0, 2 months, 5 yrs" required/>
                        </div>
                    </div>
                    <div className="tx">
                        <label htmlFor="stage">Stage Name*</label>
                        <input type="text" name='stage' placeholder='Sophie Rain'required/>
                    </div>
                    <div className="tx">
                        <label htmlFor="about">About You*</label>
                        <textarea name="about" placeholder="Say something about you & your OF career. E.g., Niche of Content(if any), Current Challenges, Main Source of Traffic etc." rows={5} required></textarea>
                    </div>
                    <button type="submit">Apply</button>
                </form>
                <small id='stat'></small>
            </div>
        </div>
    </>
  )
}

export default Apply