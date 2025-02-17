import SectionMessage from "../Features/SectionMessage/SectionMessage";
import SectionTitle from "../Features/SectionTitle/SectionTitle";
import TestimonialCards from "./TestimonialCards/TestimonialCards";

const Testimonial = () => {
    return (
        <div className="flex py-8 md:py-16 justify-between flex-col">
            <SectionTitle
                text={'testimonial'}
                className={'w-[112px] mx-auto'}>
            </SectionTitle>
            <SectionMessage
                text={'Trusted by'}
                colorText={'satisfied clients'}
                smallText={'Discover how we’ve driven growth and innovation.'}
            ></SectionMessage>
            <TestimonialCards></TestimonialCards>
        </div>
    );
};

export default Testimonial;