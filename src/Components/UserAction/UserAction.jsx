import websiteName from '../../assets/website.png';
import Button from '../Button/Button';
import SectionMessage from '../Features/SectionMessage/SectionMessage';

const UserAction = () => {
    return (
        <div className="py-8 text-center md:py-16">
            <img className='flex mb-12 md:mb-24 w-[180px] md:w-[468px] mx-auto justify-center' src={websiteName} alt="website name" />
            <SectionMessage
                text={'Are you ready to boost'}
                colorText={'your Digital Presence?'}
            ></SectionMessage>
            <div className='flex flex-col justify-center gap-2'>
            <Button
                text={'start free trial'}
                className={'w-[185px] mx-auto'}>
            </Button>
            <Button
                text={'Schedule a call'}
                className={'w-[185px] mx-auto'}>
            </Button>
            </div>
        </div>
    );
};

export default UserAction