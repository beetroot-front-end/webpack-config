import test from './module';
import $ from 'jquery';

import './css/main.css';

let component = () => {
    let div = document.createElement('div');
    div.innerHTML = 'Hello Webpack!';
    return div;
}

document.body.appendChild(component());

// test
console.log('>>>', test() === 1);

$(document).ready(()=>{ console.log('jQuery is here!') });