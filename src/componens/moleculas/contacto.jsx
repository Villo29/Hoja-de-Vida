import "../../assets/styles/contacto.css"
import  qr  from "../../assets/images/qr.png"

function Contacto() {
    return (  
        <div className="contacto">
                <div>
                <h1 id="contac">
                Contacto
                </h1>
                <h3 id="txt1">
                Correo: jesuruga@gmail.com <br /> 
                <br />
                Telefono: 961-439-7418
                </h3>
                </div>
                <img src={qr} className="foto1" alt="" />
        </div>
    );
}

export default Contacto;