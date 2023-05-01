type ServiceParams = {
  icon?: JSX.Element;
  title: string;
  description: string;
};

export default function Service({ services }: { services: ServiceParams[] }) {
  return (
    <div className="flex flex-col gap-9 justify-center items-center">
      <h2 className="font-extrabold text-4xl">Services</h2>
      <div className="flex gap-9 flex-wrap justify-center">
        {services.map((service) => (
          <div className="z_rounded_xl w-96 p-9 flex flex-col justify-center items-center text-center bg-purple-100">
            {service.icon}
            <div className="py-6 text-xl font-bold">{service.title}</div>
            <div>{service.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
