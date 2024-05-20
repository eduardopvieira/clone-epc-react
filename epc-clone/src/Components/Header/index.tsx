import logo2 from "../../Assets/logo2.svg";

export const refs = [
  {
    title: "Home",
    href: "#Home",
  },
  {
    title: "Sobre Nós",
    href: "#AboutUs",
  },
  {
    title: "Eventos",
    href: "#Events",
  },
  {
    title: "Membros",
    href: "#Members",
  },
];

function Header() {
  return (
    <header className="lg:flex lg:justify-center lg:pt-4">
      <div className="hidden lg:flex items-center justify-between fixed bg-gray-200 w-3/4 z-10 rounded-xl h-[7rem]">
        <div className="flex items-center gap-7 ml-8 py-2">
          <img src={logo2} alt="Logo da EPC" className="w-[12rem] pb-2 h-fit" />
        </div>
        <div className="w-1/2">
          <ul className="flex gap-7 mr-8 justify-between text-2xl">
            {refs.map((ref) => (
              <a
                href={ref.href}
                className="hover:text-gray-500 whitespace-nowrap"
              >
                {ref.title}
              </a>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
