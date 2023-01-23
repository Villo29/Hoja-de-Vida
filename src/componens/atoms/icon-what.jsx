import what from "../../assets/images/what.png"
import "../../assets/styles/whats.css"


function Whats() {
    return ( 
        <div>
            <a href="https://wa.me/message/ZBGZP74YVW74N1?src=qr">
            <img src={what} className="what1" />
            </a>
        </div>
     );
}

export default Whats;