import Radar from "./Radar/Radar";
import SectionMessage from "./SectionMessage/SectionMessage";
import SectionTitle from "./SectionTitle/SectionTitle";

const Features = () => {
    return (
        <div className="py-8 md:py-24">
            <SectionTitle
                text={'features'} className={'w-[96px] mx-auto'}>
            </SectionTitle>
            <SectionMessage
                text={'Feature packed to make'}
                colorText={'Digital marketing easier and affordable'}
                smallText={'Experience Intelligent Features to optimize your marketing efforts.'}
            ></SectionMessage>
            <Radar></Radar>
        </div>
    );
};

export default Features;