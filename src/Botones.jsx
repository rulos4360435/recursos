import {useState} from "react"

export function Botones() {
  const biometrico = {
    decimoAsistencia: {
      user: "admin",
      password: "Admin2931",
    },
    decimo: {
      user: "admin",
      password: "Seeusa10",
    },
    octavo: {
      user: "admin",
      password: "Seeusa10",
    },
  };

 const [mensaje,setmensaje]=useState("")

 const handleclickAsistenciadecimo=()=>{
  setmensaje(`los datos generados de asistencia decimo son:${biometrico.decimoAsistencia.user} ${biometrico.decimoAsistencia.password}`);
  limpiar();
 }
 const handleclickdecimo=()=>{
  setmensaje(`los datos generados del decimo son:${biometrico.decimo.user} ${biometrico.decimo.password}`);
  limpiar();
 }
 const handleclickoctavo=()=>{
  setmensaje(`los datos generados del octavo son:${biometrico.octavo.user} ${biometrico.octavo.password}`)
 }
 const impresora=()=>{
   setmensaje(`172.16.100.1`);
   limpiar();
 }
 const limpiar=()=>{
  setTimeout(() => {
    setmensaje("")
  }, 10000);
 }

  return (
    <div className="main" id="main">
      <button onClick={handleclickAsistenciadecimo} className="btn boton" id="btn">
        Asistencias Decimo
      </button>
      <button onClick={handleclickoctavo} className="octavo boton" id="octavo">
        Octavo
      </button>
      <button  onClick={handleclickdecimo} className="boton" id="decimo">
        Decimo
      </button>
      <button onClick={impresora}
        
        className="btn-impresora boton"
        id="btn-impresora"
      >
        Impresora
      </button>

    {mensaje && <p className="texto">{mensaje}</p>}
    </div>
  );
}
