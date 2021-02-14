import '../css/components.css';
export const saludar = (nombre)=> {

    console.log('ejecutando la funcion saludar');
    
    const h1 = document.createElement('h1');
    
    h1.innerText = `Hola ${nombre}, ¿cómo estas?`;
    
    document.body.append(h1);
    
}