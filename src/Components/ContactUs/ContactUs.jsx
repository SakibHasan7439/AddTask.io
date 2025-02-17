import SectionTitle from "../Features/SectionTitle/SectionTitle";
import ContactDetails from "./ContactDetails/ContactDetails";
import ContactForm from "./ContactForm/ContactForm";

const ContactUs = () => {
    return (
        <div className="py-8 md:py-16">
            <SectionTitle
                className={'w-[118px] mx-auto'}
                text={'contact us'}>   
            </SectionTitle>
            <div className="flex flex-col md:flex-row justify-between gap-6">
                <ContactDetails></ContactDetails>
                <ContactForm></ContactForm>
            </div>
        </div>
    );
};

export default ContactUs;