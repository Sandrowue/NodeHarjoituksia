const axios = require('axios');

const { transform, prettyPrint } = require('camaro');
const Pool = require('pg').Pool;
const settings = require('./database_and_timer_settings.json')

const database = settings.database;

const pool = new Pool(
    database
);

// A class for creating various weather forecast objects containing URL and template
class WeatherForecastTimeValue {
    constructor(place, parameterCode, parameterName) {
        this.place = place;
        this.parameterCode = parameterCode;
        this.parameterName = parameterName;

        this.url =
            'https://opendata.fmi.fi/wfs/fin?service=WFS&version=2.0.0&request=GetFeature&storedquery_id=ecmwf::forecast::surface::point::timevaluepair&place='
            + place +
            '&parameters=' +
            parameterCode;
        this.WFSPath =
            'wfs:FeatureCollection/wfs:member/omso:PointTimeSeriesObservation/om:result/wml2:MeasurementTimeseries/wml2:point/wml2:MeasurementTVP';

        let names = { timeStamp: 'vml2:time', value: 'number(vml2:value)'}

        names[this.parameterName] = names['value']
        delete names['value']

        this.xmlTemplate = [
            this.WFSPath,
            names,
        ];
        this.axiosConfig = {
            method: 'get',
            maxBodyLength: 'infinity',
            url: this.url,
            headers: {},
        };
    }
    getFMIDataAsXML() {
        axios.request(this.axiosConfig).then((response) => {
            console.log(response.data)
        })
    }

}

const test = new WeatherForecastTimeValue('Turku', 'Temperature', 'temperature')
test.getFMIDataAsXML()

// temperature = parameter Code 'Temperature'
// Tuulivektorin x-komponentti = 'WindUMS'
// Tuulivektorin y-komponentti = 'WindVMS'