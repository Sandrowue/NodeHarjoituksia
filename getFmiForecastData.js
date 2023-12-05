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
        this.parameterName = parameterName

        // Creates an URL combining predefined query and place and parametercode like temperature
        this.url =
            'https://opendata.fmi.fi/wfs/fin?service=WFS&version=2.0.0&request=GetFeature&storedquery_id=ecmwf::forecast::surface::point::timevaluepair&place='
            + place +
            '&parameters=' +
            parameterCode;

        // Constant XML path to the begining of time-value-pairs
        this.WFSPath =
            'wfs:FeatureCollection/wfs:member/omso:PointTimeSeriesObservation/om:result/wml2:MeasurementTimeseries/wml2:point/wml2:MeasurementTVP';

        // Names for the columns of the resultset
        let names = { timeStamp: 'wml2:time', value: 'number(wml2:value)' };

        // Change the name of the value key to the given parameter name
        names[this.parameterName] = names['value']
        delete names['value'] // Must be removed

        // Create a template for Camaro transformations
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

    readAndConvertToArray() {
        axios.request(this.axiosConfig).then((response) => {
            transform(response.data, this.xmlTemplate).then((result) => {
                console.log(result)
                return result
            })
        })
    }

}

const test = new WeatherForecastTimeValue('Turku', 'Temperature', 'temperature')
// test.getFMIDataAsXML()
test.readAndConvertToArray()

// temperature = parameter Code 'Temperature'
// Tuulivektorin x-komponentti = 'WindUMS'
// Tuulivektorin y-komponentti = 'WindVMS'