import { MdLocationCity, MdOutlineNearMe } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";

export default function Address() {
  let addresses = [
    {
      icon: <IoLocationOutline className="text-2xl" />,
      label: "39, River road Nairobi Kenya",
      link: "#",
    },
    {
      icon: <MdOutlineNearMe className="text-2xl" />,
      label: "Next to eastmatt supermarket",
      link: "#",
    },
    {
      icon: <MdOutlineNearMe className="text-2xl" />,
      label: "Opposite of bank of africa",
      link: "#",
    },
  ];

  return (
    <div className="px-6">
      <div className="mb-6 flex gap-3 items-center">
        <MdLocationCity className="text-2xl" />
        <div className="font-bold">Address</div>
      </div>
      {addresses.map((address) => (
        <a href={address.link} className="mb-3 flex gap-3 items-center">
          {address.icon}
          {address.label}
        </a>
      ))}
    </div>
  );
}
