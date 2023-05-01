export default function Header() {
  return (
    <div className="m-1 p-2 pl-4 flex justify-between items-center shadow-lg shadow-purple-100 rounded-lg">
      <div>
        <h1 className="font-bold text-2xl">Raya Hotel</h1>
        <small className="block text-lg font-bol">Nairobi</small>
      </div>
      <a
        href="tel:+254708428413"
        className="shrink-0 text-purple-800 rounded-full border border-transparent hover:border-purple-600"
      >
        <div className="p-1.5 bg-purple-100 rounded-full">
          <div className="p-1.5 bg-purple-200 rounded-full">
            <div className="p-1.5 bg-purple-300 rounded-full">
              <div className="px-2.5 gap-4 items-center">
                <span className="block font-bold text-sm">
                  Click to call us!
                </span>
                <small className="block">+254708428413</small>
              </div>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
}
