type HeroParams = {
  title: string;
  description: string;
  links: {
    url: string;
    icon: JSX.Element;
  }[];
};

export default function Hero({ title, description, links }: HeroParams) {
  return (
    <div className="z_hero flex gap-9 flex-col-reverse justify-between tablet:flex-row">
      <div className="z_hero_image block tablet:absolute right-0"></div>
      <div className="z_hero_text z-10 p-8 flex portrait: gap-9 flex-col justify-center items-start tablet:pr-32 laptop:pl-24">
        <h1 className="text-3xl font-bold laptop:text-4xl">{title}</h1>
        <p className="">{description}</p>
        <div className="flex items-center gap-6">
          {links.map((link) => (
            <a
              href={link.url}
              className="border border-transparent rounded-full hover:border hover:border-purple-800"
            >
              <div className="p-2 bg-purple-100 rounded-full ">
                <div className="p-2 bg-purple-200 rounded-full ">
                  <div className="p-2 bg-purple-300 rounded-full">
                    {link.icon}
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
