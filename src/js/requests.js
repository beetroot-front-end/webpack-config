import $ from 'jquery';
import { URI, API_KEY } from './utils';

class Request {
    constructor(city = 'kiev', 
                requestParams = {}, 
                uri = URI, 
                key = API_KEY) {

        this.city = city;
        this.requestParams = Object.assign({}, requestParams);
        this.key = key;
        this.uri = uri;
    }
    mapToUrlProps(type){
        let result = this.uri[type] + '?' + 'q='+this.city+'&';      
        result +=`appid=${this.key}`;
        return result;
    }
    getCurrent(fn){
        let requestURL = this.mapToUrlProps('current');
        $.get(requestURL, fn);
    }
    getPerHour(fn){
        let requestURL = this.mapToUrlProps('per_day');
        $.get(requestURL, fn);
    }
}

export default Request;