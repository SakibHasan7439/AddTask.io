import radar from '../../../assets/svg1 (1).svg';
import flash from '../../../assets/svg2.svg';
import setting from '../../../assets/Component 14 (5).png';
import marketingAnalysis from '../../../assets/Component 15 (1).png';

const Radar = () => {
    return (
        <div className='flex flex-col md:flex-row justify-center gap-4'>
            <img src={flash} alt="" />
            <div className='flex flex-col gap-9 items-center'>
                <img src={setting} alt="" />
                <img src={marketingAnalysis} alt="" />
            </div>
            <img src={radar} alt="" />
        </div>
    );
};

export default Radar;