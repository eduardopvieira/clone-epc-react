import fotobody from "../../Assets/fotobody.svg";
import instalogo from "../../Assets/instalogo.svg";

function Introducao() {
  return (
    <section>
      <div className="flex justify-center mx-40 mt-[10rem]">
        <div className="columns-1 justify-center mt-[4rem]">
          {" "}
          {/* div do titulo e descriçao */}
          <h1 className="text-3xl lg:text-5xl font-semibold lg:font-normal w-auto lg:w-4/6 text-center lg:text-start mb-5">
            ESCOLA PILOTO DE COMPUTAÇÃO
          </h1>
          <p className="text-base text-justify mr-[12rem]">
            {" "}
            As Escolas Piloto (EP) são iniciativas de extensão realizadas por
            estudantes e professores de universidades brasileiras. Esses
            projetos buscam preencher lacunas de conhecimento que ainda não são
            abordadas nos currículos tradicionais das instituições de Ensino
            Superior do país. A EPC busca sintonizar os estudantes com o que há
            de mais atual na área da computação. Isso correrá por meio de
            produção de minicursos, organização de palestras com profissionais
            da área, mesas redondas, treinamentos internos e externos, e pela
            realização de visitas técnicas.
          </p>
          <div className="flex justify-center gap-7 mr-[12rem] mt-8">
            <button className="bg-[#0EA5E9] text-white font-semibold py-2 px-6 rounded-lg ">
              Veja nossos eventos!
            </button>
            <button className="bg-[#C13584] px-6 py-2 rounded-lg">
              <img
                src={instalogo}
                alt="Logo do Instagram"
                className="w-6 h-6"
              />
            </button>
          </div>
        </div>
        <img src={fotobody} alt="imagem ilustrativa" className="w-[38rem]" />
      </div>
    </section>
  );
}

export default Introducao;
