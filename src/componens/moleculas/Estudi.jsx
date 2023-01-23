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
        <h1 id="primaria">{data.estudios.escuela2}{data.estudios.periodo2}</h1>
            </div>
            <div id="secundaria">
            <h1 id="secundaria">{data.estudios.escuela4}{data.estudios.periodo4}</h1>
            </div>
            <div id="prepa">
            <h1 id="prepa">{data.estudios.escuela3}{data.estudios.periodo3}</h1>
            </div>
            <div id="uni">
            <h1 id="uni">{data.estudios.escuela1}{data.estudios.periodo1}</h1>
            </div>
        </div>
      );
}

export default Estudie;