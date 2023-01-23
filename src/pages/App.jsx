import Header from "../componens/atoms/header";
import Acerca from "../componens/moleculas/Acercade";
import Aficiones from "../componens/moleculas/aficiones";
import Contacto from "../componens/moleculas/contacto";
import Estudie from "../componens/moleculas/Estudi";
import Habilidades from "../componens/moleculas/habilidades";
import Face from "../componens/atoms/icon-facebook";
import Git from "../componens/atoms/icon-git";
import Whats from "../componens/atoms/icon-what";


function  App(){
    return(
        <>
        <Header></Header>
        <Acerca></Acerca>
        <Contacto></Contacto>
        <Estudie></Estudie>
        <Habilidades></Habilidades>
        <Aficiones></Aficiones>
        <Face></Face>
        <Git></Git>
        <Whats></Whats>
        </>
        
        
    )
}
export default App;