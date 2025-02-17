// eslint-disable-next-line react/prop-types
const Button = ({text, className}) => {
    return (
        <button className={`${className} px-6 py-2 text-white font-semibold bg-[#7687B5]/29 z-10 backdrop-blur-lg rounded-full border border-gray-700 transition duration-300 cursor-pointer`}>
            {text}
        </button>
    );
};

export default Button;