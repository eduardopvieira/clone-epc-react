import equipeepc from "../../Assets/equipeepc.jpeg";

function SobreNos() {
  return (
    <section className="mt-[12rem]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <div className="flex flex-col items-center">
          <img
            src={equipeepc}
            alt="equipe da epc"
            className="ml-[10rem] rounded-xl w-4/5 mb-3"
          />
          <p className="text-sm ml-[10rem]">
            Equipe da EPC em Dezembro de 2023
          </p>
        </div>
        <div className="flex flex-col justify-center">
          <h1 className="text-5xl ml-[5rem] mr-[2rem] mb-[2rem]">Sobre Nós</h1>
          <p className="text-justify ml-[5rem] mr-[2rem] text-xl">
            A Escola Piloto de Computação teve sua origem em 2019, com a missão
            de promover eventos e atividades educacionais relacionados à
            computação e tecnologia. Entretanto, o ano de 2020 apresentou
            desafios inesperados, com a pandemia de COVID-19 que afetou
            profundamente a maneira como as atividades presenciais poderiam ser
            conduzidas. Como resultado, a Escola Piloto de Computação viu-se
            forçada a interromper suas atividades temporariamente. Em 2023, o
            projeto está de volta, de nova cara e estamos comprometidos em
            oferecer uma ampla gama de iniciativas educacionais e eventos que
            abrangem os mais recentes desenvolvimentos em tecnologia.
          </p>
        </div>
      </div>
    </section>
  );
}

export default SobreNos;
