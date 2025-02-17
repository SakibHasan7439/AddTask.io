import amazon from '../../assets/Frame 1345 (1).png'
import meta from '../../assets/Frame 1345 (11).png'
import tiktok from '../../assets/Frame 1345 (2).png'
import linkedIn from '../../assets/Frame 1345 (3).png'
import twitter from '../../assets/Frame 1345 (5).png'
import googleFeature from '../../assets/Frame 1345.png'

const Platform = () => {
    return (
        <div className="grid grid-cols-12 gap-4 md:gap-8">
            <img className='col-span-4 md:col-span-2' src={amazon} alt="amazon" />
            <img className='col-span-4 md:col-span-2' src={meta} alt="meta" />
            <img className='col-span-4 md:col-span-2' src={tiktok} alt="tictok" />
            <img className='col-span-4 md:col-span-2' src={linkedIn} alt="linkedin" />
            <img className='col-span-4 md:col-span-2' src={twitter} alt="twitter" />
            <img className='col-span-4 md:col-span-2' src={googleFeature} alt="google app" />
        </div>
    );
};

export default Platform;