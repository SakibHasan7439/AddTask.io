// eslint-disable-next-line react/prop-types
const SectionMessage = ({text, colorText, smallText, className}) => {
    return (
        <div className={`flex ${className} justify-center mb-8 lg:mb-16 flex-col items-center gap-2`}>
            <h2 className="text-xl lg:text-3xl text-white font-semibold">{text}</h2>
            <h2 className="text-xl lg:text-3xl text-transparent bg-clip-text font-semibold bg-gradient-to-r from-blue-400 to-blue-100 pb-4">{colorText}</h2>
            <p className="text-center text-white">{smallText}</p>
        </div>
    );
};

export default SectionMessage;