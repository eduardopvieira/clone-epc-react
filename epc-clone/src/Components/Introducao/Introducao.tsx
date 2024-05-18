import fotobody from "../../Assets/fotobody.svg";

function Introducao() {
  return (
    <section>
      <div className="flex justify-center mx-40">
        <div>
          {" "}
          {/* div do titulo e descriçao */}
          <h1 className="text-3xl lg:text-5xl font-semibold lg:font-normal w-auto lg:w-4/6 text-center lg:text-start">
            ESCOLA PILOTO DE COMPUTAÇÃO
          </h1>
          <p className="text-2xl">
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
        </div>
        <img src={fotobody} className="" alt="imagem ilustrativa" />
      </div>
    </section>
  );
}

export default Introducao;
