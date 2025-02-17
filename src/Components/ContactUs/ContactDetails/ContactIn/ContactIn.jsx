// eslint-disable-next-line react/prop-types
const ContactIn = ({image, text}) => {
    return (
        <div className="flex items-center gap-4 mb-4">
            <img src={image} alt="Contact Image" />
            <p className="text-white">{text}</p>
        </div>
    );
};

export default ContactIn;