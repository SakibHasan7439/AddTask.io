import Button from "../../Button/Button";

const ContactForm = () => {
  return (
    <div>
      <form className="gap-4">
        <label className="text-white pb-2">Name</label>
        <input
          type="text"
          className="input mb-4 bg-[#000000] input-bordered border-[#333B4F] w-full"
        />
        <label className="text-white mb-4">Email</label>
        <input
          type="email"
          className="input mb-4 bg-[#000000] input-bordered border-[#333B4F] w-full"
        />
        <label className="text-white mb-4">Message</label>
        <textarea
          className="textarea mb-4 bg-[#000000] textarea-bordered border-[#333B4F] textarea-lg w-full"
        ></textarea>
        <Button
            text={'submit'}
            className={'flex text-center capitalize justify-self-center'}></Button>
      </form>
    </div>
  );
};

export default ContactForm;
