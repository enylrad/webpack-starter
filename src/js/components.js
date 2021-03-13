import '../css/components.css';


export const salute = (name) => {

    console.log('Creando etiqueta h1');

    const h1 = document.createElement('h1');
    h1.innerText = `Hola, ${name}. Esto es una prueba`

    document.body.append(h1);
}