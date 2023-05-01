import InfoCard from "./info_card";
import Address from "./address";
import Contact from "./contact";

export default function Footer() {
  return (
    <div
      className="my-0 flex flex-col justify-between items-center laptop:flex-row"
      id="raya_info"
    >
      <InfoCard
        descriptionText="Situated in the lively downtown area of Upper River Road, Raya Hotel offers affordable luxury accommodation, within a ten-minute stroll of Nairobi' s Central Business District. Uhuru Park is just under a mile from the hotel. Overlooking the terrace, the straightforward smoke-free guest rooms are equipped with 32” smart"
        twitterUrl="https://www.twitter.com"
        facebookUrl="https://www.facebook.com"
        instagramUrl="https://www.instagram.com"
        tiktokUrl="https://www.tiktok.com"
        tripadvisorUrl="https://www.tripadvisor.com"
      />
      <div className="flex-1 flex justify-center items-start flex-row">
        <Contact />
        <Address />
      </div>
    </div>
  );
}
