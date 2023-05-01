import { AiOutlineWifi } from "react-icons/ai";
import { IoCallOutline, IoRestaurantOutline } from "react-icons/io5";
import { MdOutlineSecurity, MdScreenshotMonitor } from "react-icons/md";
import { FaLuggageCart } from "react-icons/fa";
import { HiOutlineLightBulb } from "react-icons/hi";
import { RiHotelLine, RiRoadMapLine } from "react-icons/ri";
import { TiInfoLarge } from "react-icons/ti";
import { GoLocation } from "react-icons/go";
import Header from "./components/header";
import Hero from "./components/hero";
import Service from "./components/service";
import Location from "./components/location";
import Comment from "./components/comment";
import Footer from "./components/footer";

export default function App() {
  return (
    <div className="flex flex-col gap-12">
      <header className="">
        <Header />
      </header>
      <section className="">
        <Hero
          title="Welcome to Raya hotel"
          description="
          Situated in the lively downtown area of Upper River Road, Raya Hotel
          offers affordable luxury accommodation, within a ten-minute stroll of
          Nairobi' s Central Business District. Uhuru Park is just under a
          mile from the hotel. Overlooking the terrace, the straightforward
          smoke-free guest rooms are equipped with 32” smart TVs, a study table,
          in-room safe and a wardrobe. En-suite bathrooms contain a shower and
          complimentary bath products. Along with a 24-hour reception, guests of
          Raya Hotel have access to ample meeting spaces and a communal lounge."
          // + "Moreover, the hotel offers high-speed Wi-Fi, currency exchange
          // services, and ATM facilities for guests' convenience. The on-site
          // restaurant welcomes guests to tasty Kenyan buffet breakfasts each
          // morning. Diners will also sample diverse cuisines at the in-house
          // restaurant and a wide choice of fresh juices are available. Nairobi
          // National Museum, which displays the country' s rich history, is
          // about a ten-minute drive from the hotel. Kenyatta International
          // Conference Centre is just over a mile away."
          links={[
            {
              icon: <TiInfoLarge className="text-purple-900 text-2xl" />,
              url: "#raya_info",
            },
            {
              icon: <GoLocation className="text-purple-900 text-2xl" />,
              url: "#raya_location",
            },
            {
              icon: <IoCallOutline className="text-purple-900 text-2xl" />,
              url: "tel:+254708428413",
            },
          ]}
        />
      </section>
      <section className="">
        <Service
          services={[
            {
              icon: <AiOutlineWifi className="text-6xl" />,
              title: "Wi-Fi",
              description:
                "Free internet to keep you connected to work or family & friends.",
            },
            {
              icon: <IoRestaurantOutline className="text-6xl" />,
              title: "Restaurant",
              description:
                "Operates 24/7 food of quality taste and good service is given.",
            },
            {
              icon: <RiHotelLine className="text-6xl" />,
              title: "Front Desk",
              description:
                "Is opened 24/7 with great customer service to our customers.",
            },
            {
              icon: <MdScreenshotMonitor className="text-6xl" />,
              title: "Smart Tv",
              description:
                "Rooms are mounted with 32 inch television easy to access YouTube, Netflix etc.",
            },
            {
              icon: <FaLuggageCart className="text-6xl" />,
              title: "Luggage",
              description: "Free storage we don't charge customers.",
            },
            {
              icon: <MdOutlineSecurity className="text-6xl" />,
              title: "Location & Security",
              description:
                "Security is tight located at CBD area  easy to access also easy to board matatu.",
            },
            {
              icon: <HiOutlineLightBulb className="text-6xl" />,
              title: "Generator",
              description:
                "Back up generator standby anytime there is blackout.lights are on always.",
            },
            {
              icon: <RiRoadMapLine className="text-6xl" />,
              title: "Location Convenience",
              description:
                "Easy and accessible of bank that is opposite to hotel  ATM machine works 24/7 also supermarket is next to us.",
            },
          ]}
        />
      </section>
      <section className="">
        <Location url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1904.3459807704776!2d36.82332974612541!3d-1.2813083179050058!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f110d128f71a3%3A0x976e4710749889f4!2sRaya%20hotel!5e0!3m2!1sen!2ske!4v1682536537827!5m2!1sen!2ske" />
      </section>
      <section className="">
        <Comment
          comments={[
            {
              comment:
                "Secure and friendly environment. There are taxi to aid movement just outside the entrance. Safety: The hotel is secure for both luggage and guests",
              commenter: "Ochieng Luke Okuna",
              source: "google reviews",
            },
            {
              comment:
                "Central location, good and clean rooms, comfy bed Basic bath room",
              commenter: "Thorsten, de",
              source: "booking.com",
            },
            {
              comment:
                "Raya hotel is a standard and human friendly rest place for strangers . Am grateful for there hospitality and care, Not forgetting lucy, maryanne, Gillian, Vincent and all the cooking staff for there amazing help and care. I really enjoyed. Keep it up guys",
              commenter: "Kwaku Yeboah",
              source: "google reviews",
            },
            {
              comment: "Great food for affordable price 👌",
              commenter: "Ken Onyango",
              source: "google reviews",
            },
            {
              comment:
                "Here we are again, my last visit was in May 2022 and I promised to revisit. Am here again and the experience is EXTRA ORDINARY... I would obviously personally like to employ staffs like this when I have my hotel too especially LUCY the receptionist. KENYA, my second home.",
              commenter: "Taofeeq Oloyo",
              source: "google review",
            },
            {
              comment:
                "My stay at Raya Hotel, Nairobi, Kenya Hello, dear all! At Raya Hotel I liked her food. Breakfast service. Security too.",
              commenter: "CJ Mpaka , cd",
              source: "booking.com",
            },
            {
              comment: "Good accommodation, good food and it's within the CBD.",
              commenter: "james Ndung'u",
              source: "google reviews",
            },
            {
              comment:
                "Rooms: Just enough rooms, Nearby activities: Many markets and shops in the nearby Close to the long journey bus stations. Safety: The accommodation section is closely monitored and has a security officer all the time. Walkability: Located in the city centre so no transport costs to incur",
              commenter: "Fahad Hussein Lukyamuzi",
              source: "google review",
            },
          ]}
        />
      </section>
      <footer className="">
        <Footer />
      </footer>
    </div>
  );
}
