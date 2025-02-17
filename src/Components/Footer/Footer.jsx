import webSite from '../../assets/adTask.ai.png';
import ContactIn from '../ContactUs/ContactDetails/ContactIn/ContactIn';
import mail from '../../assets/mail.png';
import location from '../../assets/location (1).png';

const Footer = () => {
    return (
        <div className='border border-t-white py-8 md:py-12'>
            <div className="grid bg-black grid-cols-12 max-w-7xl w-full mx-auto">
                <div className="col-span-6">
                    <img className='mb-6' src={webSite} alt="website name" />
                    <ContactIn
                        image={mail}
                        text={'contact@adtask.ai'}>
                    </ContactIn>
                    <ContactIn
                        image={location}
                        text={'San Francisco Bay Area'}>
                    </ContactIn>
                </div>
                <div className="col-span-3">
                    <h3 className='text-white'>Utilities</h3>
                    <ul className='text-white/35'>
                        <li>Home</li>
                        <li>Products</li>
                        <li>Tools</li>
                        <li>Contact us</li>   
                    </ul>
                </div>
                <div className="col-span-3">
                    <h3 className='text-white'>Socials</h3>
                    <ul className='text-white/35'>
                        <li>X</li>
                        <li>LinkedIn</li>
                        <li>Instagram</li>
                        <li>Facebook</li>   
                    </ul>
                </div>
            </div>
            <p className='text-center text-white/35'>All rights reserved © 2025 adTask</p>
        </div>
    );
};

export default Footer;