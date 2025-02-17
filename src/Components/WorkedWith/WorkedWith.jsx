import Marquee from "react-fast-marquee";
import CompanyLogo from "./CompanyLogo";
import google from "../../assets/google.png";
import intel from "../../assets/intel.png";
import amazon from "../../assets/amazon-logo.png";
import sony from "../../assets/Sony.png";
import w from "../../assets/w.png";

const WorkedWith = () => {
  return (
    <div className="mt-8 md:mt-16 pb-8 md:pb-16 text-white">
      <Marquee
        speed={50} // Speed of the marquee (Optional)
      >
        <CompanyLogo
        image={google}
        className={'h-10'}></CompanyLogo>
        <CompanyLogo
        image={intel}></CompanyLogo>
        <CompanyLogo
        image={sony}></CompanyLogo>
        <CompanyLogo
        image={amazon}></CompanyLogo>
        <CompanyLogo
        image={w}></CompanyLogo>
      </Marquee>
    </div>
  );
};

export default WorkedWith;
