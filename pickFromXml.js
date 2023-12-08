const { transform, prettyPrint } = require('camaro');

const xmlData = `
<?xml version="1.0" encoding="UTF-8"?>
<wfs:FeatureCollection
  timeStamp="2023-11-09T11:30:24Z"
  numberMatched="1"
  numberReturned="1"
  xmlns:wfs="http://www.opengis.net/wfs/2.0"
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"

  xmlns:xlink="http://www.w3.org/1999/xlink"
  xmlns:om="http://www.opengis.net/om/2.0"
  xmlns:ompr="http://inspire.ec.europa.eu/schemas/ompr/3.0"
  xmlns:omso="http://inspire.ec.europa.eu/schemas/omso/3.0"
  xmlns:gml="http://www.opengis.net/gml/3.2"
  xmlns:gmd="http://www.isotc211.org/2005/gmd"
  xmlns:gco="http://www.isotc211.org/2005/gco"
  xmlns:swe="http://www.opengis.net/swe/2.0"
  xmlns:gmlcov="http://www.opengis.net/gmlcov/1.0"
  xmlns:sam="http://www.opengis.net/sampling/2.0"
  xmlns:sams="http://www.opengis.net/samplingSpatial/2.0"
  xmlns:target="http://xml.fmi.fi/namespace/om/atmosphericfeatures/1.1"
  xsi:schemaLocation="http://www.opengis.net/wfs/2.0 http://schemas.opengis.net/wfs/2.0/wfs.xsd
  http://www.opengis.net/gmlcov/1.0 http://schemas.opengis.net/gmlcov/1.0/gmlcovAll.xsd
  http://www.opengis.net/sampling/2.0 http://schemas.opengis.net/sampling/2.0/samplingFeature.xsd
  http://www.opengis.net/samplingSpatial/2.0 http://schemas.opengis.net/samplingSpatial/2.0/spatialSamplingFeature.xsd
  http://www.opengis.net/swe/2.0 http://schemas.opengis.net/sweCommon/2.0/swe.xsd
  http://inspire.ec.europa.eu/schemas/ompr/3.0 https://inspire.ec.europa.eu/schemas/ompr/3.0/Processes.xsd
  http://inspire.ec.europa.eu/schemas/omso/3.0 https://inspire.ec.europa.eu/schemas/omso/3.0/SpecialisedObservations.xsd
  http://xml.fmi.fi/namespace/om/atmosphericfeatures/1.1 https://xml.fmi.fi/schema/om/atmosphericfeatures/1.1/atmosphericfeatures.xsd">
    <wfs:member>
        <omso:GridSeriesObservation gml:id="WFS-RQOJB30Zl89L4IY3kN08qRLIWKqJTowtoWbbpdOt.Lnl5dsPTTv3c3Trvlw9NGXk6daN_Xls8unW3rs6aeG_Tu6Y9_bLyw58sLSxZc.ndU07ctqf.FWocNZoTGx8udakWhTjunTRk1cM7LuyVNO3Lan_hVqXDWaEzteXz338slTo15fPffyyX9_bLy78tPTDi2ZYmZsw9MvPpEzNm_Hh2Za1M2m_GkruvTM4a23D4iaefTDux5aVq6EBpbcPiLw349HOcFUcxvbcvTLvoYeWHbl6ZeXOtqvp3ZImnllx9NO_dWtX07slPhly5JtOtapl28MvLD068srW26efPTuz1MvjpWNOwzm1u67Z.an0w9NO_dznCZnDZhx5edZ2vfr179mFrceuHZp6eZO7Nvia3Pph6ad.6p54Za3N_DLuyYemG_kw6dnluc.m_llyceuXl5v6cldoWbbpdOt.Lnl5dsPTTv3c3Trvlw9NGXk6daN_Xls8unW3rs6aeG_Tu6Y9_bLyw58rQ6aduWn0y8Jmh007ctrfuy1jVakM">
            <om:phenomenonTime>
                <gml:TimePeriod gml:id="time1-1-1">
                    <gml:beginPosition>2023-11-08T11:00:00Z</gml:beginPosition>
                    <gml:endPosition>2023-11-09T11:00:00Z</gml:endPosition>
                </gml:TimePeriod>
            </om:phenomenonTime>
            <om:resultTime>
                <gml:TimeInstant gml:id="time2-1-1">
                    <gml:timePosition>2023-11-09T11:00:00Z</gml:timePosition>
                </gml:TimeInstant>
            </om:resultTime>
            <om:procedure xlink:href="http://xml.fmi.fi/inspire/process/opendata_daily"/>
            <om:parameter>
                <om:NamedValue>
                    <om:name xlink:href="https://inspire.ec.europa.eu/codeList/ProcessParameterValue/value/groundObservation/observationIntent"/>
                    <om:value>
			atmosphere
                    </om:value>
                </om:NamedValue>
            </om:parameter>
            <om:observedProperty  xlink:href="https://opendata.fmi.fi/meta?observableProperty=observation&amp;param=WindDirection,WindSpeedMS,Temperature&amp;language=eng"/>
            <om:featureOfInterest>
                <sams:SF_SpatialSamplingFeature gml:id="sampling-feature-1-1-fmisid">
                    <sam:sampledFeature>
                        <target:LocationCollection gml:id="sampled-target-1-1">
                            <target:member>
                                <target:Location gml:id="obsloc-fmisid-101675-pos">
                                    <gml:identifier codeSpace="http://xml.fmi.fi/namespace/stationcode/fmisid">101675</gml:identifier>
                                    <gml:name codeSpace="http://xml.fmi.fi/namespace/locationcode/name">Kokkola Santahaka</gml:name>
                                    <gml:name codeSpace="http://xml.fmi.fi/namespace/locationcode/geoid">-16000200</gml:name>
                                    <gml:name codeSpace="http://xml.fmi.fi/namespace/locationcode/wmo">2852</gml:name>
                                    <target:representativePoint xlink:href="#point-101675"/>
                                    <target:region codeSpace="http://xml.fmi.fi/namespace/location/region">Kokkola</target:region>
                                </target:Location>
                            </target:member>
                        </target:LocationCollection>
                    </sam:sampledFeature>
                    <sams:shape>
                        <gml:MultiPoint gml:id="mp-1-1-fmisid">
                            <gml:pointMember>
                                <gml:Point gml:id="point-101675" srsName="http://www.opengis.net/def/crs/EPSG/0/4258" srsDimension="2">
                                    <gml:name>Kokkola Santahaka</gml:name>
                                    <gml:pos>63.83882 23.09715 </gml:pos>
                                </gml:Point>
                            </gml:pointMember>
                        </gml:MultiPoint>
                    </sams:shape>
                </sams:SF_SpatialSamplingFeature>
            </om:featureOfInterest>
            <om:result>
                <gmlcov:MultiPointCoverage gml:id="mpcv1-1-1">
                    <gml:domainSet>
                        <gmlcov:SimpleMultiPoint gml:id="mp1-1-1" srsName="http://xml.fmi.fi/gml/crs/compoundCRS.php?crs=4258&amp;time=unixtime" srsDimension="3">
                            <gmlcov:positions>
                63.83882 23.09715  1699441200
                63.83882 23.09715  1699441800
                63.83882 23.09715  1699442400
                63.83882 23.09715  1699443000
                63.83882 23.09715  1699443600
                63.83882 23.09715  1699444200
                63.83882 23.09715  1699444800
                63.83882 23.09715  1699445400
                63.83882 23.09715  1699446000
                63.83882 23.09715  1699446600
                63.83882 23.09715  1699447200
                63.83882 23.09715  1699447800
                63.83882 23.09715  1699448400
                63.83882 23.09715  1699449000
                63.83882 23.09715  1699449600
                63.83882 23.09715  1699450200
                63.83882 23.09715  1699450800
                63.83882 23.09715  1699451400
                63.83882 23.09715  1699452000
                63.83882 23.09715  1699452600
                63.83882 23.09715  1699453200
                63.83882 23.09715  1699453800
                63.83882 23.09715  1699454400
                63.83882 23.09715  1699455000
                63.83882 23.09715  1699455600
                63.83882 23.09715  1699456200
                63.83882 23.09715  1699456800
                63.83882 23.09715  1699457400
                63.83882 23.09715  1699458000
                63.83882 23.09715  1699458600
                63.83882 23.09715  1699459200
                63.83882 23.09715  1699459800
                63.83882 23.09715  1699460400
                63.83882 23.09715  1699461000
                63.83882 23.09715  1699461600
                63.83882 23.09715  1699462200
                63.83882 23.09715  1699462800
                63.83882 23.09715  1699463400
                63.83882 23.09715  1699464000
                63.83882 23.09715  1699464600
                63.83882 23.09715  1699465200
                63.83882 23.09715  1699465800
                63.83882 23.09715  1699466400
                63.83882 23.09715  1699467000
                63.83882 23.09715  1699467600
                63.83882 23.09715  1699468200
                63.83882 23.09715  1699468800
                63.83882 23.09715  1699469400
                63.83882 23.09715  1699470000
                63.83882 23.09715  1699470600
                63.83882 23.09715  1699471200
                63.83882 23.09715  1699471800
                63.83882 23.09715  1699472400
                63.83882 23.09715  1699473000
                63.83882 23.09715  1699473600
                63.83882 23.09715  1699474200
                63.83882 23.09715  1699474800
                63.83882 23.09715  1699475400
                63.83882 23.09715  1699476000
                63.83882 23.09715  1699476600
                63.83882 23.09715  1699477200
                63.83882 23.09715  1699477800
                63.83882 23.09715  1699478400
                63.83882 23.09715  1699479000
                63.83882 23.09715  1699479600
                63.83882 23.09715  1699480200
                63.83882 23.09715  1699480800
                63.83882 23.09715  1699481400
                63.83882 23.09715  1699482000
                63.83882 23.09715  1699482600
                63.83882 23.09715  1699483200
                63.83882 23.09715  1699483800
                63.83882 23.09715  1699484400
                63.83882 23.09715  1699485000
                63.83882 23.09715  1699485600
                63.83882 23.09715  1699486200
                63.83882 23.09715  1699486800
                63.83882 23.09715  1699487400
                63.83882 23.09715  1699488000
                63.83882 23.09715  1699488600
                63.83882 23.09715  1699489200
                63.83882 23.09715  1699489800
                63.83882 23.09715  1699490400
                63.83882 23.09715  1699491000
                63.83882 23.09715  1699491600
                63.83882 23.09715  1699492200
                63.83882 23.09715  1699492800
                63.83882 23.09715  1699493400
                63.83882 23.09715  1699494000
                63.83882 23.09715  1699494600
                63.83882 23.09715  1699495200
                63.83882 23.09715  1699495800
                63.83882 23.09715  1699496400
                63.83882 23.09715  1699497000
                63.83882 23.09715  1699497600
                63.83882 23.09715  1699498200
                63.83882 23.09715  1699498800
                63.83882 23.09715  1699499400
                63.83882 23.09715  1699500000
                63.83882 23.09715  1699500600
                63.83882 23.09715  1699501200
                63.83882 23.09715  1699501800
                63.83882 23.09715  1699502400
                63.83882 23.09715  1699503000
                63.83882 23.09715  1699503600
                63.83882 23.09715  1699504200
                63.83882 23.09715  1699504800
                63.83882 23.09715  1699505400
                63.83882 23.09715  1699506000
                63.83882 23.09715  1699506600
                63.83882 23.09715  1699507200
                63.83882 23.09715  1699507800
                63.83882 23.09715  1699508400
                63.83882 23.09715  1699509000
                63.83882 23.09715  1699509600
                63.83882 23.09715  1699510200
                63.83882 23.09715  1699510800
                63.83882 23.09715  1699511400
                63.83882 23.09715  1699512000
                63.83882 23.09715  1699512600
                63.83882 23.09715  1699513200
                63.83882 23.09715  1699513800
                63.83882 23.09715  1699514400
                63.83882 23.09715  1699515000
                63.83882 23.09715  1699515600
                63.83882 23.09715  1699516200
                63.83882 23.09715  1699516800
                63.83882 23.09715  1699517400
                63.83882 23.09715  1699518000
                63.83882 23.09715  1699518600
                63.83882 23.09715  1699519200
                63.83882 23.09715  1699519800
                63.83882 23.09715  1699520400
                63.83882 23.09715  1699521000
                63.83882 23.09715  1699521600
                63.83882 23.09715  1699522200
                63.83882 23.09715  1699522800
                63.83882 23.09715  1699523400
                63.83882 23.09715  1699524000
                63.83882 23.09715  1699524600
                63.83882 23.09715  1699525200
                63.83882 23.09715  1699525800
                63.83882 23.09715  1699526400
                63.83882 23.09715  1699527000
                63.83882 23.09715  1699527600
                </gmlcov:positions>
                        </gmlcov:SimpleMultiPoint>
                    </gml:domainSet>
                    <gml:rangeSet>
                        <gml:DataBlock>
                            <gml:rangeParameters/>
                            <gml:doubleOrNilReasonTupleList>
                113.0 2.6 1.6 
                107.0 2.6 1.6 
                107.0 2.4 1.6 
                99.0 2.7 1.6 
                103.0 2.6 1.5 
                100.0 2.4 1.5 
                100.0 2.4 1.5 
                101.0 2.4 1.5 
                106.0 2.3 1.5 
                109.0 2.5 1.5 
                108.0 3.0 1.5 
                101.0 2.5 1.5 
                101.0 2.1 1.5 
                104.0 2.4 1.5 
                107.0 2.3 1.4 
                102.0 2.2 1.4 
                102.0 2.3 1.4 
                97.0 2.4 1.3 
                111.0 2.2 1.3 
                106.0 2.5 1.3 
                98.0 2.3 1.3 
                95.0 2.5 1.2 
                98.0 2.2 1.1 
                94.0 2.0 1.0 
                91.0 2.4 1.1 
                90.0 2.0 1.0 
                82.0 1.7 0.9 
                78.0 2.1 0.9 
                77.0 2.0 0.9 
                80.0 2.1 0.9 
                79.0 1.8 0.8 
                78.0 1.5 0.8 
                79.0 2.0 0.7 
                85.0 2.3 0.7 
                91.0 2.2 0.6 
                96.0 2.6 0.6 
                94.0 2.3 0.6 
                93.0 2.4 0.6 
                93.0 2.1 0.6 
                90.0 2.3 0.6 
                90.0 2.0 0.6 
                96.0 2.3 0.6 
                96.0 2.1 0.6 
                89.0 2.1 0.6 
                92.0 2.0 0.6 
                96.0 2.3 0.6 
                98.0 2.1 0.6 
                97.0 2.3 0.6 
                99.0 2.1 0.6 
                97.0 2.1 0.5 
                102.0 2.2 0.6 
                96.0 2.3 0.6 
                97.0 2.1 0.5 
                101.0 2.4 0.5 
                99.0 2.2 0.5 
                103.0 2.4 0.5 
                107.0 2.3 0.5 
                114.0 2.1 0.5 
                115.0 2.6 0.5 
                112.0 2.1 0.6 
                110.0 2.4 0.6 
                112.0 2.7 0.6 
                114.0 2.1 0.6 
                115.0 1.6 0.6 
                117.0 2.1 0.6 
                115.0 2.4 0.6 
                113.0 2.4 0.6 
                114.0 1.9 0.6 
                112.0 2.0 0.6 
                118.0 2.0 0.7 
                111.0 2.0 0.6 
                113.0 2.1 0.6 
                113.0 1.9 0.6 
                111.0 2.1 0.6 
                105.0 1.7 0.5 
                113.0 2.0 0.5 
                113.0 2.2 0.5 
                119.0 1.9 0.5 
                117.0 2.1 0.4 
                116.0 1.9 0.4 
                113.0 2.0 0.4 
                113.0 1.8 0.3 
                102.0 1.7 0.3 
                108.0 2.0 0.2 
                112.0 2.1 0.2 
                115.0 2.3 0.2 
                109.0 2.2 0.2 
                119.0 2.4 0.1 
                119.0 2.1 0.1 
                115.0 2.3 0.1 
                123.0 2.8 0.1 
                119.0 2.4 0.0 
                116.0 2.3 0.1 
                117.0 2.5 0.1 
                119.0 2.6 0.1 
                119.0 2.2 0.0 
                120.0 2.5 0.0 
                126.0 2.2 0.0 
                124.0 2.2 0.0 
                123.0 2.2 0.0 
                128.0 2.0 0.0 
                130.0 2.5 0.0 
                126.0 2.5 0.0 
                127.0 2.2 0.0 
                124.0 2.2 0.1 
                122.0 2.0 0.0 
                122.0 2.3 0.0 
                123.0 2.4 0.0 
                124.0 2.3 0.0 
                120.0 2.0 0.0 
                126.0 2.1 0.0 
                130.0 2.0 0.0 
                126.0 1.9 0.0 
                126.0 1.9 0.0 
                133.0 2.4 0.0 
                129.0 2.1 0.0 
                119.0 2.2 0.0 
                118.0 2.1 0.0 
                121.0 2.3 0.0 
                117.0 2.4 0.0 
                131.0 1.9 0.0 
                127.0 1.8 0.0 
                126.0 1.9 0.0 
                129.0 1.9 0.0 
                119.0 1.7 0.0 
                118.0 2.1 0.0 
                124.0 2.2 0.1 
                126.0 1.9 0.1 
                124.0 1.7 0.1 
                114.0 2.2 0.1 
                117.0 2.0 0.1 
                141.0 1.9 0.2 
                134.0 1.9 0.2 
                125.0 2.7 0.1 
                132.0 2.6 0.2 
                144.0 1.8 0.2 
                138.0 2.0 0.2 
                129.0 1.9 0.2 
                140.0 2.3 0.2 
                137.0 2.2 0.3 
                133.0 2.6 0.2 
                146.0 2.3 0.3 
                144.0 2.2 0.3 
                141.0 2.2 0.3 
                144.0 1.7 0.3 
                </gml:doubleOrNilReasonTupleList>
                        </gml:DataBlock>
                    </gml:rangeSet>
                    <gml:coverageFunction>
                        <gml:CoverageMappingRule>
                            <gml:ruleDefinition>Linear</gml:ruleDefinition>
                        </gml:CoverageMappingRule>
                    </gml:coverageFunction>
                    <gmlcov:rangeType>
                        <swe:DataRecord>
                            <swe:field name="WindDirection"  xlink:href="https://opendata.fmi.fi/meta?observableProperty=observation&amp;param=WindDirection&amp;language=eng"/>
                            <swe:field name="WindSpeedMS"  xlink:href="https://opendata.fmi.fi/meta?observableProperty=observation&amp;param=WindSpeedMS&amp;language=eng"/>
                            <swe:field name="Temperature"  xlink:href="https://opendata.fmi.fi/meta?observableProperty=observation&amp;param=Temperature&amp;language=eng"/>
                        </swe:DataRecord>
                    </gmlcov:rangeType>
                </gmlcov:MultiPointCoverage>
            </om:result>
        </omso:GridSeriesObservation>
    </wfs:member>
</wfs:FeatureCollection>
`

const template_resultlist = ['wfs:FeatureCollection/wfs:member/omso:GridSeriesObservation/om:result/gmlcov:MultiPointCoverage/gml:rangeSet/gml:DataBlock',

{
    data: 'gml:doubleOrNilReasonTupleList'
}
]

const template_timeAndPlaceList = ['wfs:FeatureCollection/wfs:member/omso:GridSeriesObservation/om:result/gmlcov:MultiPointCoverage/gml:domainSet/gmlcov:SimpleMultiPoint',
{
    data: 'gmlcov:positions'
}
]

class ObservationData {
    constructor(temperature, wind_speed, wind_direction) {
        this.temperature = temperature;
        this.wind_speed = wind_speed;
        this.wind_direction = wind_direction;
    }
}

class ObservationTimeAndPlace {
    constructor(latitude, longitude, timestamp) {
        this.latitude = latitude;
        this.longitude = longitude;
        this.timestamp = timestamp;
    }
}

class FullWeatherData {
    constructor(latitude, longitude, timestamp, temperature, wind_speed, wind_direction) {
        this.latitude = latitude;
        this.longitude = longitude;
        this.timestamp = timestamp;
        this.temperature = temperature;
        this.wind_speed = wind_speed;
        this.wind_direction = wind_direction;
    }
}

const twoTemplateXmlToObjArr = async(xmlData, template1, template2) => {
    const result1 = await transform(xmlData, template1);
    const result2 = await transform(xmlData, template2);
    let result = [result1, result2];
    //console.log(result)
    return result
}

const xmlToObjectArray = async (xmlData, template) => {
    const result = await transform(xmlData, template);
    return result
}

twoTemplateXmlToObjArr(xmlData, template_timeAndPlaceList, template_resultlist).then(result => {
    let allWeahterDataToDb = [];
    
    let timeData = result[0]
    let weatherData = result[1]
        
    let timeDataString = timeData[0].data
    let weatherDataString = weatherData[0].data
   
    const cutMark1 = '\n';
    const cutMark2 = ' ';
    
    let trimmedTDRows = [];
    let tDRows = timeDataString.split(cutMark1)
    tDRows.forEach(element => {
        trimmedElement = element.trim();
        trimmedTDRows.push(trimmedElement);
    });
    trimmedTDRows.shift();
    trimmedTDRows.pop();
   
    let trimmedWDRows = [];
    let wDRows = weatherDataString.split(cutMark1);
    wDRows.forEach(element => {
        trimmedElement = element.trim();
        trimmedWDRows.push(trimmedElement);
    });
    trimmedWDRows.shift();
    trimmedWDRows.pop();
    
    for (let i = 0; i < trimmedTDRows.length; i++) {
        let splittedTDRow = trimmedTDRows[i].split(cutMark2);
        splittedTDRow.splice(2, 1);
        let timeOfInterest = splittedTDRow;
        let weatherOfInterest = trimmedWDRows[i].split(cutMark2);
        let latitude = Number(timeOfInterest[0]);
        let longitude = Number(timeOfInterest[1]);
        let timestamp = Number(timeOfInterest[2]);
        let wind_direction = Number(weatherOfInterest[0]);
        let wind_speed = Number(weatherOfInterest[1]);
        let temperature = Number(weatherOfInterest[2]);

        let objToAdd = new FullWeatherData(latitude, longitude, timestamp, temperature, wind_speed, wind_direction)
        allWeahterDataToDb.push(objToAdd)
        console.log(allWeahterDataToDb)
    }

})

xmlToObjectArray(xmlData, template_resultlist).then(result => {
    let weatherDataToDb = [];
    let weatherData = result;
    //console.log(weatherData)
    let weatherString = weatherData[0].data;
    //console.log(weatherString)

    // Data must be splitted to rows and column values
    const cutMark1 = '\n';
    const cutMark2 = ' ';

    // Data has been dumped as text containing lots of whitespace, therefore it must be trimmed
    let trimmedWDRows = [];
    let wDRows = weatherString.split(cutMark1);

    wDRows.forEach(element => {
        trimmedElement = element.trim();
        trimmedWDRows.push(trimmedElement);
    });
    
    // Let's remove the 1st element because it is empty
    trimmedWDRows.shift();
    
    // there is an empty element at the end of array, remove it also
    trimmedWDRows.pop();
    
    // Loop the trimmed array element by element
    trimmedWDRows.forEach(element => {
        let valueOfInterest = element.split(cutMark2);
        let wind_direction = Number(valueOfInterest[0]);
        let wind_speed = Number(valueOfInterest[1]);
        let temperature = Number(valueOfInterest[2]);
        
        // Create a new object to add values to an array as an object
        let objToAdd = new ObservationData(temperature, wind_speed, wind_direction);
        weatherDataToDb.push(objToAdd)
        //console.log(weatherDataToDb);
    });
})

xmlToObjectArray(xmlData, template_timeAndPlaceList).then(result => {
    let timeAndPlaceToDb = [];
    let timepoint = result
    //console.log(timepoint)
    let timeAndPlatceString = timepoint[0].data
    //console.log(timeAndPlatceString)

    const cutMark1 = '\n';
    const cutMark2 = ' ';

    let trimmedTDRows = [];
    let tDRows = timeAndPlatceString.split(cutMark1);
    //console.log(tDRows)

    tDRows.forEach(element => {
        trimmedElement = element.trim();
        trimmedTDRows.push(trimmedElement);
    });
    trimmedTDRows.shift();
    trimmedTDRows.pop();
    
    //console.log(trimmedTDRows)

    trimmedTDRows.forEach(element => {
        let splittedElement = element.split(cutMark2);
        splittedElement.splice(2, 1);
        let valueOfInterest = splittedElement;
        //console.log(valueOfInterest[0]);
        let latitude = Number(valueOfInterest[0]);
        let longitude = Number(valueOfInterest[1]);
        let timestamp = Number(valueOfInterest[2]);

        let objToAdd = new ObservationTimeAndPlace(latitude, longitude, timestamp);
        timeAndPlaceToDb.push(objToAdd);
        //console.log(timeAndPlaceToDb)
    })
})
