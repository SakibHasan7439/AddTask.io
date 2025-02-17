// eslint-disable-next-line react/prop-types
const CompanyLogo = ({image, className}) => {
    return (
            <img className={`${className} w-15 h-25 mr-12 lg:mr-28 grayscale md:w-25`} src={image} alt="company icon" />
    );
};

export default CompanyLogo;