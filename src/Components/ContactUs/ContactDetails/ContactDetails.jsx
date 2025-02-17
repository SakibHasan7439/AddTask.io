import ContactIn from "./ContactIn/ContactIn";
import location from '../../../assets/location (1).png';
import mail from '../../../assets/mail.png';
import call from '../../../assets/call.png';

const ContactDetails = () => {
    return (
        <div className="flex justify-start flex-col">
            <div className={`mb-8`}>
                <h2 className="text-xl lg:text-3xl text-white font-semibold">Ask whatever you have</h2>
                <h2 className="text-xl lg:text-3xl text-transparent bg-clip-text font-semibold bg-gradient-to-r from-blue-400 to-blue-100 pb-4">in your mind now</h2>
                <p className="text-white w-[90%] md:w-[70%]">Whether you have questions or are ready to discuss your business, we’re here to help. Reach out today.</p>
            </div>
            <div>
                <ContactIn
                    image={mail}
                    text={'contact@adtask.ai'}
                ></ContactIn>
                <ContactIn
                    image={call}
                    text={'(969) 819-8061'}
                ></ContactIn>
                <ContactIn
                    image={location}
                    text={'San Francisco Bay Area'}
                ></ContactIn>
            </div>
        </div>
    );
};

export default ContactDetails;