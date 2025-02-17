// eslint-disable-next-line react/prop-types
const SectionTitle = ({text, className}) => {
  return (
    <div className={`${className} py-2 mb-8 rounded-full bg-gradient-to-r from-[#282828] to-[#000000]`}>
      <p className="uppercase text-center text-white text-[13px]">
        {text}
      </p>
    </div>
  );
};

export default SectionTitle;
