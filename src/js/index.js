import $ from 'jquery';
import './../css/main.css';
import Request from './requests';
import View from './view';

let weather = new Request();

weather.getCurrent(View.renderMain);

weather.getPerHour(View.renderList);
