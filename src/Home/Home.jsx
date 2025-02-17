import Button from "../Components/Button/Button";
import ContactUs from "../Components/ContactUs/ContactUs";
import Features from "../Components/Features/Features";
import Footer from "../Components/Footer/Footer";
import Message from "../Components/Message/Message";
import Navbar from "../Components/Navbar/Navbar";
import Platform from "../Components/Platforms/Platform";
import Services from "../Components/Services/Services";
import Testimonial from "../Components/Testimonial/Testimonial";
import UserAction from "../Components/UserAction/UserAction";
import WorkedWith from "../Components/WorkedWith/WorkedWith";
import './style.css';
const Home = () => {
    return (
        <div className="bg-[#050506] pt-4">
            <div className="max-w-7xl w-full mx-auto">
            <Navbar></Navbar>
            
            <div className="text-center">
                <Message></Message>
                <h1 className="intro-text text-center bg-clip-text bg-linear-65 from-[#858992] to-[#E2E8F8] mb-8 md:mb-16 font-semibold text-6xl md:text-[95px]">
                    adTech.ai
                </h1>
                <p className="text-white mb-4 md:mb-8 w-full px-2 text-center text- md:w-[70%] lg:w-[60%] mx-auto">
                Stop struggling with marketing decisions. Our AI assistant analyzes your business, creates personalized strategies, and helps you execute them - all in real-time.
                </p>
                <Button
                    className={'capitalize mb-2'}
                    text={'start free trial'}
                ></Button>
                <p className="text-white text-[10px]">Try AdTask AI free for 30 days</p>
            </div>
                <WorkedWith></WorkedWith>
                <div className="py-8 md:py-16 flex flex-col items-center justify-center">
                    <p className="pb-8 text-white">Adtask AI works with :</p>
                    <Platform></Platform>
                </div>

                <Features></Features>
                <Services></Services>
                <Testimonial></Testimonial>
                <ContactUs></ContactUs>
                <UserAction></UserAction>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;