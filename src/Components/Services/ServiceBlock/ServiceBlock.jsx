import frame1 from '../../../assets/Frame 1370.png';
import frame2 from '../../../assets/Frame 1359.png';
import frame3 from '../../../assets/Frame 1366.png';
import frame4 from '../../../assets/Frame 1367.png';
import frame5 from '../../../assets/Frame 1368.png';
import frame6 from '../../../assets/Frame 1369.png';

const ServiceBlock = () => {
    return (
        <div className="grid grid-cols-12 pb-8 md:pb-16 gap-4 md:gap-2">
            <img className='col-span-12 md:col-span-6 lg:col-span-4 transition duration-300 hover:shadow-white hover:shadow-lg border' src={frame1} alt="" />
            <img className='col-span-12 transition duration-300 hover:shadow-white hover:shadow-lg md:col-span-6 lg:col-span-4 border' src={frame2} alt="" />
            <img className='col-span-12 transition duration-300 hover:shadow-white hover:shadow-lg md:col-span-6 lg:col-span-4 border' src={frame3} alt="" />
            <img className='col-span-12 transition duration-300 hover:shadow-white hover:shadow-lg md:col-span-6 lg:col-span-4 border' src={frame4} alt="" />
            <img className='col-span-12 transition duration-300 hover:shadow-white hover:shadow-lg md:col-span-6 lg:col-span-4 border' src={frame5} alt="" />
            <img className='col-span-12 transition duration-300 hover:shadow-white hover:shadow-lg md:col-span-6 lg:col-span-4 border' src={frame6} alt="" />
        </div>
    );
};

export default ServiceBlock;