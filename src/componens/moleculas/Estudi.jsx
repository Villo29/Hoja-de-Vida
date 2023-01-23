import { data } from "../../assets/data/data";

import "../../assets/styles/estudi.css"
import "../../assets/images/qr.png"


function Estudie() {
    return (
        <div className="estudio">
            <div id="estio">
              <h2>Estudios</h2>
            </div>
            <div id="primaria">
        <h1 id="primaria">{data.estudios.primaria}{data.estudios.primaria1}</h1>
            </div>
            <div id="secundaria">
            <h1 id="secundaria">{data.estudios.secun}{data.estudios.secun1}</h1>
            </div>
            <div id="prepa">
            <h1 id="prepa">{data.estudios.prepa}{data.estudios.prepa1}</h1>
            </div>
            <div id="uni">
            <h1 id="uni">{data.estudios.uni}{data.estudios.uni1}</h1>
            </div>
        </div>
      );
}

export default Estudie;