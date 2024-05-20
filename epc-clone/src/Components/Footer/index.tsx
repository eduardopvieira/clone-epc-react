import logoepc from "../../Assets/logoepc.png";
import insta from "../../Assets/instalogo.svg";
import email from "../../Assets/Email.svg";
import local from "../../Assets/Localizacao.svg";

function Footer() {
  return (
    <footer className="bg-footer-color pb-10px">
      <div className="py-6 flex justify-between columns-3 text-xl">
        <div className=" ml-4 w-1/3">
          <img className="" src={logoepc} alt="footer" />
        </div>
        <div className="flex flex-col text-white items-center w-1/3 px-10">
          <h3 className="text-center text-2xl mr-14 pb-4 w-full">Contato</h3>
          <div className="flex items-center gap-2 w-full mt-7">
            <img src={email} alt="logo do instagram" className="w-[5%]" />
            <p>escolapilotodecomputacao@gmail.com</p>
          </div>
          <div className="flex items-center gap-2 w-full mt-4">
            <img src={insta} alt="logo do instagram" className="w-[5%]" />
            <p className="justify-items-start">@epc_ufersa</p>
          </div>
        </div>
        <div className="flex flex-col text-white items-center w-1/3">
          <div className="w-full">
            <h3 className="text-center text-2xl mx-auto pb-4 w-full">
              Localização
            </h3>
            <img
              src={local}
              alt="localizacao"
              className="w-[6%] justify-center mx-auto"
            ></img>
          </div>
          <p className="text-center mt-3">
            Av. Francisco Mota, 572 - Bairro Costa e Silva, Mossoró RN | CEP:
            59.625-900, +55 84 3317-8200 CNPJ: 24.529.265/0001-40
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
