import "../../assets/styles/header.css"
import DAVID from  "../../assets//images/david.png"


function Header() {
    return (  
        <header >
            
            <div>
            <img src={DAVID} className="foto" alt="" />
            </div>
            <h1 className="name">Jesus David Ruiz Garcia</h1>
            <h3 className="subn">Desarrollador Junior</h3>
        </header>
    );
}

export default Header;