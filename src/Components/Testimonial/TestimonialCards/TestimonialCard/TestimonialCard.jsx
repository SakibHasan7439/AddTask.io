// eslint-disable-next-line react/prop-types
const TestimonialCard = ({clientName, comment}) => {
    return (
        <div className="bg-[#131313] p-6 rounded-2xl border border-[#7687B5] col-span-12 md:col-span-6 lg:col-span-4">
            <p className="text-[#C5CDE3] mb-6">
                {comment}
            </p>
            <h4 className="text-white">{clientName}</h4>
        </div>
    );
};

export default TestimonialCard;