function Weather() {
    this.findCity = function (name) {
        Ajax.getJSON('https://geocode-maps.yandex.ru/1.x/?format=json&geocode=' + name.trim(), function (geoData) {
            console.log(geoData);
            var objects = geoData.response.GeoObjectCollection.featureMember.map(function (fm) {
                var go = fm.GeoObject,
                    coordinates = go.Point.pos.split(' ');
                return {
                    name: go.name,
                    description: go.description,
                    kind: go.metaDataProperty.GeocoderMetaData.kind,
                    longitude: coordinates[0].slice(0, 4),
                    latitude: coordinates[1].slice(0, 4)
                };
            }).filter(function (o) {
                return o.kind === 'locality';
            });

            document.querySelector('.weather__cities').innerHTML = Templates.Cities.render({
                cities: objects
            });
        });
    };

    this.getWeather = function (lat, lon) {
        var objectCity = document.querySelectorAll('.city');

        for (var i = 0; i < objectCity.length; i++) {
            var currElem = objectCity[i];

            currElem.onclick = function (event) {
                var weatherUrlAjax = 'http://api.openweathermap.org/data/2.5/weather?appid=53c50defe390864e563ff1aa30410810&lat=' + event.currentTarget.dataset.latitude + '&lon=' + event.currentTarget.dataset.longitude + '&units=metric';
                //console.log(weatherUrlAjax);
                Ajax.getJSON(weatherUrlAjax, function (weatherData) {
                    console.log(weatherData);
                    var weatherObj = {};
                    weatherObj.name = weatherData.name;
                    weatherObj.icon = weatherData.weather[0].id;
                    weatherObj.main = weatherData.weather[0].main;
                    weatherObj.temp = weatherData.main.temp;
                    weatherObj.press = weatherData.main.pressure;
                    weatherObj.humidity = weatherData.main.humidity;
                    document.querySelector('.weather__info').innerHTML = Templates.Weather.render({
                        weather: weatherObj
                    });

                });
            }
        }

    };
}

var Templates = {
    Cities: Hogan.compile($('.templates__city').innerHTML),
    Weather: Hogan.compile($('.templates__weather').innerHTML)
};

var Ajax = {
    getJSON: function (url, callback) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.send();
        xhr.onreadystatechange = function () {
            if (xhr.readyState != 4) return;
            callback(JSON.parse(xhr.responseText));

        };
        //fetch(url).then(function(response) {
        //    return response.json();
        //}).then(callback);
    }
};
