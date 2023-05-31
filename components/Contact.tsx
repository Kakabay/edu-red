import { FunctionComponent } from 'react';

interface ContactProps {
  title: string;
  email: string;
  phone: string;
  address: string;
}

const Contact: FunctionComponent<ContactProps> = ({ title, email, phone, address }) => {
  return (
    <div className="contact max-w-[600px] flex flex-col gap-[32px]">
      <h2 className="contact-title text-GREEN text-TITLE font-bold">{title}</h2>
      <div className="contact-info text-BIG_TEXT flex flex-wrap gap-y-[24px] gap-x-[40px]">
        <div className="contact-info-item flex flex-col gap-[8px]">
          <h3 className="contact-info-item-title text-BLACK text-SMALL_TITLE font-bold">
            Administration phone number
          </h3>
          <p className="contact-info-text text-BLACK">{phone}</p>
        </div>
        <div className="contact-info-item flex flex-col gap-[8px]">
          <h3 className="contact-info-item-title text-SMALL_TITLE font-bold flex flex-col gap-[8px]">
            Email
          </h3>
          <p className="contact-info-text text-BLACK">{email}</p>
        </div>
        <div className="contact-info-item flex flex-col gap-[8px]">
          <h3 className="contact-info-item-title text-SMALL_TITLE font-bold flex flex-col gap-[8px]">
            Administration address
          </h3>
          <p className="contact-info-text text-BLACK">{address}</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
