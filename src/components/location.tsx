type LocationParams = {
  url: string;
};

export default function Location({ url }: LocationParams) {
  return (
    <div
      className="h-full my-12 flex flex-col items-stretch tablet:items-center tablet:flex-row-reverse"
      id="raya_location"
    >
      <h2 className="z_location_text w-full tablet:w-52 pl-0 pb-12 pt-3 text-center text-white text-4xl font-bold tablet:pl-24 tablet:pb-0 tablet:pt-0">
        Location
      </h2>
      <iframe
        title="Raya location"
        src={url}
        allowFullScreen={true}
        loading="lazy"
        className="grow w-full"
        height={500}
      />
    </div>
  );
}
