import { IoLogoWhatsapp } from "react-icons/io5";
import { CiMobile3 } from "react-icons/ci";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";
import { RiContactsBookLine } from "react-icons/ri";
export default function Contact() {
  let contacts = [
    {
      icon: <CiMobile3 className="text-2xl" />,
      label: "+254708428413",
      link: "tel:+254708428413",
    },
    {
      icon: <IoCallOutline className="text-2xl" />,
      label: "+254113376423",
      link: "tel:+254113376423",
    },
    {
      icon: <IoLogoWhatsapp className="text-2xl" />,
      label: "+254708428413",
      link: "tel:+254708428413",
    },
    {
      icon: <MdOutlineAlternateEmail className="text-2xl" />,
      label: "+254708428413",
      link: "mailto:rayahotelnairobi@gmail.com",
    },
  ];

  return (
    <div className="px-6">
      <div className="mb-6 flex gap-3 items-center">
        <RiContactsBookLine className="text-2xl" />
        <div className="font-bold">Contact</div>
      </div>
      {contacts.map((contact) => (
        <a href={contact.link} className="mb-3 flex gap-3 items-center">
          {contact.icon}
          {contact.label}
        </a>
      ))}
    </div>
  );
}
