import wtcclogo from "../../Assets/WTCClogoantiga.svg";

function Eventos() {
  return (
    <section className="mt-[12rem]" id="Events">
      <div className="flex flex-col items-center">
        <h1 className="text-5xl">Eventos</h1>
        <div className="mt-[3rem] bg-[#CBD5E1] rounded-lg p-[3rem] w-1/5">
          <img src={wtcclogo} alt="logo do wtcc" />
          <p className="text-wrap mt-[3rem] text-justify">
            {" "}
            O Workshop Técnico-Científico de Computação visa despertar e
            estimular o interesse dos estudantes de Graduação e de Pós-Graduação
            em Computação na pesquisa...
          </p>
          <div className="flex flex-col items-center mt-[3rem]">
            <a
              className="bg-[#0EA5E9] p-[1rem] rounded-lg"
              target="_blank"
              rel="noopener noreferrer"
              href="https://wtcc.com.br"
            >
              Inscreva-se
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Eventos;
