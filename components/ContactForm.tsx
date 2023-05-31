import { FunctionComponent } from 'react';
import Button from '@/components/Button';

interface ContactFormProps {}

const ContactForm: FunctionComponent<ContactFormProps> = () => {
  return (
    <form className="flex flex-col gap-[32px]">
      <div className="form-inner flex flex-col gap-[16px]">
        <input
          type="text"
          className="bg-transparent rounded-[8px] text-BLACK text-TEXT px-[16px] py-[14px] w-[480px] border border-BLACK"
          placeholder="Enter your name"
          required
        />
        <input
          type="text"
          className="bg-transparent rounded-[8px] text-BLACK text-TEXT px-[16px] py-[14px] w-[480px] border border-BLACK"
          placeholder="Enter your surname"
          required
        />
        <input
          type="number"
          className="bg-transparent rounded-[8px] text-BLACK text-TEXT px-[16px] py-[14px] w-[480px] border border-BLACK"
          placeholder="Enter your phone"
          required
        />
        <input
          type="email"
          className="bg-transparent rounded-[8px] text-BLACK text-TEXT px-[16px] py-[14px] w-[480px] border border-BLACK"
          placeholder="Enter your email"
          required
        />
      </div>
      <Button text="Submit" />
    </form>
  );
};

export default ContactForm;
