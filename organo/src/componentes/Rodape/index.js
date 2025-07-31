import "./Rodape.css";

const Rodape = () => {
  return (
    <footer className="footer">
      <div className="rede-social">
        <img src="/imagens/fb.png" alt="Facebook" />
        <img src="/imagens/tw.png" alt="Twiter" />
        <img src="/imagens/ig.png" alt="Instagram" />
      </div>
      <div className="logo-organo">
        <img src="/imagens/logo.png" alt="Logo" />
      </div>
      <div className="creditos">Desenvolvido por Alura.</div>
    </footer>
  );
};

export default Rodape;
