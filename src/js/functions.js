import '../css/components.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import logoweb from '../assets/img/logo-gfx.png';

export const saludar = (nombre) => {
    console.log('Creando etiqueta h1');
    const h1 = document.createElement('h1');
    h1.innerText = `Holas, ${nombre} eres  Omar`;
    document.body.append(h1);


    const img = document.createElement('img');
    img.src = logoweb;
    document.body.append(img);



}