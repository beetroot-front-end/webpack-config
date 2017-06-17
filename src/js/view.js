import $ from 'jquery';
import { WEATHER_BG } from './utils';

class View {
    static renderMain(data){
        let $mainBlock = $('.weather-content'),
            $currentDate = {
                day: $('.day'),
                month: $('.month'),
                year: $('.year')
            },
            $weatherInfo = $('.weather-info-type'),
            $temperature = $('.temperature-q span'),
            $userLocation = $('.weather-location');
        
        let date = (new Date()).toDateString().split(' '),
            weatherNow = data.weather[0];

        let currentWeatherType = WEATHER_BG.find((item) => {
            return String(item.id)[0] === String(weatherNow.id)[0]
        });
        
        $weatherInfo.text(weatherNow.description);
        $temperature.text(Math.round(data.main.temp - 273));
        $userLocation.text(data.name+' , '+data.sys.country || '');
        $currentDate.day.text(date[0]);
        $currentDate.month.text(date[1]);
        $currentDate.year.text(date[3]);
        $mainBlock.css('background-image', `url('${currentWeatherType.src}'`).fadeIn(1500);      
        console.log(data);
    }
    static renderList(data){
        function createItem(w){
             let currentWeather = w.weather[0]
             return `<li class="weather-day">
                  <p class="weather-day-type">
                      ${currentWeather.main}
                  </p>
                  <strong class="weather-day-t">
                    <span>${Math.round(w.main.temp - 273)}</span> &#176;C
                  </strong>
                  <span class="weather-day-time">
                    ${w.dt_txt}
                  </span>
                </li>`    
        }

        let template = data.list.map(createItem);
        $('.weather-week').append(template);
        $('.weather-description').fadeIn();
    }
}

export default View;