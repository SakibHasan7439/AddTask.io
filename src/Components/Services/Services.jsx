import Button from "../Button/Button";
import SectionMessage from "../Features/SectionMessage/SectionMessage";
import SectionTitle from "../Features/SectionTitle/SectionTitle";
import ServiceBlock from "./ServiceBlock/ServiceBlock";

const Services = () => {
    return (
        <div className="flex flex-col justify-center py-8 md:py-24">
            <SectionTitle
                text={'service'}
                className={'w-[96px] mx-auto'}>
            </SectionTitle>
            <SectionMessage
                text={'Innovative Services'}
                colorText={'for Growth'}>
            </SectionMessage>
            <ServiceBlock></ServiceBlock>
            <Button 
            text={'contact us'}
            className={'w-[130px] md:w-[165px] mx-auto'}></Button>
        </div>
    );
};

export default Services;