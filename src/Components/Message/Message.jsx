import { BsStars } from "react-icons/bs";

const Message = () => {
    return (
        <div className="my-8 md:my-16 max-w-[371px] md:w-full mx-auto py-2 rounded-lg bg-[#282828] flex items-center justify-center gap-4">
            <BsStars className="text-white"></BsStars>
            <p className="uppercase text-white text-[13px]">Transform your Digital Present with ai agent</p>
        </div>
    );
};

export default Message;