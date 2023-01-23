import "../../assets/styles/contacto.css"
import  qr  from "../../assets/images/qr.png"
import { data } from "../../assets/data/data";

function Contacto() {
    return (  
        <div className="contacto">
                <div>
                <h1 id="contac">
                Contacto
                </h1>
                <h3 id="txt1">
                {data.contacto.correo}<br /> 
                <br />
                {data.contacto.numero}
                </h3>
                </div>
                <img src={qr} className="foto1" alt="" />
        </div>
    );
}

export default Contacto;