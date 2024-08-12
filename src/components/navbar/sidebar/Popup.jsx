import './popup.scss';

const Popup = ({showPop}) => {
  return (
    <>
        <div className='popup'>
          <ul>
            <li><a href="/#home">Home</a></li>
            <li><a href="/#about">About Us</a></li>
            <li><a href="/portfolio">Portfolio</a></li>
            <li><a href="/#testimonials">Testimonials</a></li>
            {/* <li><a href="">Contact</a></li> */}
            <li><a href="/apply">Apply</a></li>
          </ul>
        </div>
    </>
  )
}

export default Popup