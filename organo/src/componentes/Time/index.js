import Colaborador from "../Colaborador";
import "./Time.css";

const Time = (props) => {
  const corPrimaria = { borderColor: props.corPrimaria };
  const corSecundaria = { backgroundColor: props.corSecundaria };

  return (
    <section className="time" style={corSecundaria}>
      <h3 style={corPrimaria}>{props.nome}</h3>
      <Colaborador />
    </section>
  );
};

export default Time;
