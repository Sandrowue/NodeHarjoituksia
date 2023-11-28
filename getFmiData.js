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
    constructor(place, parameterCode, parameterName) {
        this.place = place;
        this.parameterCode = parameterCode;
        this.parameterName = parameterName;

        // Creates an URL combining predefined query and place and parametercode like t2m (temperature)
        this.url =
            'https://opendata.fmi.fi/wfs/fin?service=WFS&version=2.0.0&request=GetFeature&storedquery_id=fmi::observations::weather::timevaluepair&place=' +
            place +
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

    // A method to test that weather data is aviable in a correct form
    getFMIDataAsXML() {
        axios.request(this.axiosConfig).then((response) => {
            console.log(response.data)
        })
            // A method to convert XML data to an array of objects
    }           
    
    readAndConvertToArray() {
        axios.request(this.axiosConfig).then((response) => {
            transform(response.data, this.xmlTemplate).then((result) => {
                console.log(result)
                return result
            })
        })
        
    }
    // A method to fetch and convert weather data and save it into a database
    putTimeValuePairsToDb() {
        
        // Define the name of table to insert values which will be parameterName and _observation. Build correct table name.
        let tableName = this.parameterName + '_observation';

        // Build a SQL clause to insert data
        const sqlClause = 'INSERT INTO public.' + tableName + 'VALUES ($1, $2, $3) ON CONFLICT DO NOTHING RETURNING *';

        // Use Axios to fetch data from FMI
        axios
            .request(this.axiosConfig);
    }

}



const test = new WeatherObservationTimeValue('Turku', 't2m', 'temperature');
test.readAndConvertToArray()
// test.getFMIDataAsXML()


