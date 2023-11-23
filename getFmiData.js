// A MODULE FOR FETCHING FMI OBSERVATIONS AND FORECASTS AND SAVING RETRIEVED DATA TO A DATABASE

// Libraries and Modules

// Axios for using http or http requests to get data
const axios = require('axios');

const { transform, prettyPrint } = require('camaro');
const Pool = require('pg').Pool;
const settings = require('./database_and_timer_settings.json')

const database = settings.database;

const pool = new Pool(
    database
);

// A class for creating various weather objects containing URL and template
class WeatherObservationTimeValue {
    constructor(place, paremeterCode, parameterName) {
        this.place = place;
        this.parameterCode = paremeterCode;
        this.parameterName = parameterName;

        // Creates an URL combining predefined query and place and parametercode like t2m (temperature)
        this.url = 'https://opendata.fmi.fi/wfs/fin?service=WFS&version=2.0.0&request=GetFeature&storedquery_id=fmi::observations::weather::timevaluepair&place=' +
            this.place +
            '&parameters=' +
            this.parameterCode;

        // Constant XML path to the beginning of time-value-pair
        this.WFSPath =
            'wfs:FeatureCollection/wfs:member/omso:PointTimeSeriesObservation/om:result/wml2:MeasurementTimeseries/wml2:point/wml2:MeasurementTVP';

        // Names for the columns of the resultset
        let names = { timeStamp: 'wml2:time', value: 'number(vml2:value)' };

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

    // A method to test that weather data is aviable in a correct form
    getFMIDataAsXML() {
        axios.request(this.axiosConfig).then((response) => {
            console.log(response.data)
        })
    }

}

test = new WeatherObservationTimeValue('Turku', 't2m', 'temerature');
test.getFMIDataAsXML()