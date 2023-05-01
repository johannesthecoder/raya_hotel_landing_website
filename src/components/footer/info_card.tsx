import { RxTwitterLogo } from "react-icons/rx";
import { FiFacebook, FiInstagram } from "react-icons/fi";
import { FaTiktok, FaTripadvisor } from "react-icons/fa";

type InfoCardParams = {
  descriptionText: string;
  twitterUrl: string;
  facebookUrl: string;
  instagramUrl: string;
  tiktokUrl: string;
  tripadvisorUrl: string;
};

export default function InfoCard({
  descriptionText,
  twitterUrl,
  facebookUrl,
  instagramUrl,
  tiktokUrl,
  tripadvisorUrl,
}: InfoCardParams) {
  let socialMedias = [
    {
      icon: <RxTwitterLogo className="text-2xl" />,
      link: twitterUrl,
    },
    {
      icon: <FiFacebook className="text-2xl" />,
      link: facebookUrl,
    },
    {
      icon: <FiInstagram className="text-2xl" />,
      link: instagramUrl,
    },
    {
      icon: <FaTiktok className="text-2xl" />,
      link: tiktokUrl,
    },
    {
      icon: <FaTripadvisor className="text-2xl" />,
      link: tripadvisorUrl,
    },
  ];
  return (
    <div className="p-3 mb-12 flex-1 bg-purple-50 bg-opacity-50 rounded-full">
      <div className="p-3 bg-purple-50 rounded-full">
        <div className="p-3 bg-purple-100 rounded-full">
          <div className="px-3 py-9">
            <div className="flex flex-col justify-center items-center text-center">
              <h2 className="mb-6 text-2xl">Hello customers 👋</h2>
              <p className="text-sm" style={{ maxWidth: "500px" }}>
                {descriptionText}
              </p>
            </div>
            <div className="mt-6 tablet:mt-12 flex justify-center gap-3 text-purple-900">
              {socialMedias.map((socialMedia) => (
                <a
                  href={socialMedia.link}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 border border-purple-900 rounded-full"
                >
                  {socialMedia.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
