import Header from "../componens/atoms/header";
import Acerca from "../componens/moleculas/Acercade";
import Aficiones from "../componens/moleculas/aficiones";
import Contacto from "../componens/moleculas/contacto";
import Estudie from "../componens/moleculas/Estudi";
import Habilidades from "../componens/moleculas/habilidades";


function  App(){
    return(
        <>
        <Header></Header>
        <Acerca></Acerca>
        <Contacto></Contacto>
        <Estudie></Estudie>
        <Habilidades></Habilidades>
        <Aficiones></Aficiones>
        </>
        
        
    )
}
export default App;