const { transform, prettyPrint } = require('camaro');

const xmlData = `
<?xml version="1.0" encoding="UTF-8"?>
<wfs:FeatureCollection
  timeStamp="2023-11-08T12:20:18Z"
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
        <omso:GridSeriesObservation gml:id="WFS-QKZ7I_.WpEamxGxUAc.lke7CUvaJTowtoWbbpdOt.Lnl5dsPTTv3c3Trvlw9NGXk6daN_Xls8unW3rs6aeG_Tu6Y9_bLyw58sLSxZc.ndU07ctqf.FWnYJqoTGx8udakWhTjunTRk1cM7LuyVNO3Lan_hVqGCaqEzteXz338slTo15fPffyyX9_bLy78tPTDi2ZYmZsw9MvPpEzNm_Hh2Za1M2m_GkruvTM4a23D4iaefTDux5aVq6EBpbcPiLw349HOcFUcxvbcvTLvoYeWHbl6ZeXOtqvp3ZImnllx9NO_dWtX07slPhly5JtOtapl28MvLD068srW26efPTuz1MvjpWNOwzm1u67Z.an0w9NO_dznCZnDZhx5edZXTry19Wtx64dmnp5k7s2.Jrc.mHpp37qnnhlrc38Mu7Jh6Yb.TDp2eW5z6b.WXJx65eXm_pyV2hZtul0634ueXl2w9NO_dzdOu.XD00ZeTp1o39eWzy6dbeuzpp4b9O7pj39svLDnytDpp25afTLwmaHTTty2t.7LWNVqQwA-">
            <om:phenomenonTime>
                <gml:TimePeriod gml:id="time1-1-1">
                    <gml:beginPosition>2023-11-07T12:00:00Z</gml:beginPosition>
                    <gml:endPosition>2023-11-08T12:00:00Z</gml:endPosition>
                </gml:TimePeriod>
            </om:phenomenonTime>
            <om:resultTime>
                <gml:TimeInstant gml:id="time2-1-1">
                    <gml:timePosition>2023-11-08T12:00:00Z</gml:timePosition>
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
                                <target:Location gml:id="obsloc-fmisid-100949-pos">
                                    <gml:identifier codeSpace="http://xml.fmi.fi/namespace/stationcode/fmisid">100949</gml:identifier>
                                    <gml:name codeSpace="http://xml.fmi.fi/namespace/locationcode/name">Turku Artukainen</gml:name>
                                    <gml:name codeSpace="http://xml.fmi.fi/namespace/locationcode/geoid">-16000132</gml:name>
                                    <gml:name codeSpace="http://xml.fmi.fi/namespace/locationcode/wmo">2773</gml:name>
                                    <target:representativePoint xlink:href="#point-100949"/>
                                    <target:region codeSpace="http://xml.fmi.fi/namespace/location/region">Turku</target:region>
                                </target:Location>
                            </target:member>
                        </target:LocationCollection>
                    </sam:sampledFeature>
                    <sams:shape>
                        <gml:MultiPoint gml:id="mp-1-1-fmisid">
                            <gml:pointMember>
                                <gml:Point gml:id="point-100949" srsName="http://www.opengis.net/def/crs/EPSG/0/4258" srsDimension="2">
                                    <gml:name>Turku Artukainen</gml:name>
                                    <gml:pos>60.45439 22.17870 </gml:pos>
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
                60.45439 22.17870  1699358400
                60.45439 22.17870  1699359000
                60.45439 22.17870  1699360800
                60.45439 22.17870  1699361400
                60.45439 22.17870  1699362000
                60.45439 22.17870  1699362600
                60.45439 22.17870  1699363200
                60.45439 22.17870  1699363800
                60.45439 22.17870  1699364400
                60.45439 22.17870  1699365000
                60.45439 22.17870  1699365600
                60.45439 22.17870  1699366200
                60.45439 22.17870  1699366800
                60.45439 22.17870  1699367400
                60.45439 22.17870  1699368000
                60.45439 22.17870  1699368600
                60.45439 22.17870  1699369200
                60.45439 22.17870  1699369800
                60.45439 22.17870  1699370400
                60.45439 22.17870  1699371000
                60.45439 22.17870  1699371600
                60.45439 22.17870  1699372200
                60.45439 22.17870  1699372800
                60.45439 22.17870  1699373400
                60.45439 22.17870  1699374000
                60.45439 22.17870  1699374600
                60.45439 22.17870  1699375200
                60.45439 22.17870  1699375800
                60.45439 22.17870  1699376400
                60.45439 22.17870  1699377000
                60.45439 22.17870  1699377600
                60.45439 22.17870  1699378200
                60.45439 22.17870  1699378800
                60.45439 22.17870  1699379400
                60.45439 22.17870  1699380000
                60.45439 22.17870  1699380600
                60.45439 22.17870  1699381200
                60.45439 22.17870  1699381800
                60.45439 22.17870  1699382400
                60.45439 22.17870  1699383000
                60.45439 22.17870  1699383600
                60.45439 22.17870  1699384200
                60.45439 22.17870  1699384800
                60.45439 22.17870  1699385400
                60.45439 22.17870  1699386000
                60.45439 22.17870  1699386600
                60.45439 22.17870  1699387200
                60.45439 22.17870  1699387800
                60.45439 22.17870  1699388400
                60.45439 22.17870  1699389000
                60.45439 22.17870  1699389600
                60.45439 22.17870  1699390200
                60.45439 22.17870  1699390800
                60.45439 22.17870  1699391400
                60.45439 22.17870  1699392000
                60.45439 22.17870  1699392600
                60.45439 22.17870  1699393200
                60.45439 22.17870  1699393800
                60.45439 22.17870  1699394400
                60.45439 22.17870  1699395000
                60.45439 22.17870  1699395600
                60.45439 22.17870  1699396200
                60.45439 22.17870  1699396800
                60.45439 22.17870  1699397400
                60.45439 22.17870  1699398000
                60.45439 22.17870  1699398600
                60.45439 22.17870  1699399200
                60.45439 22.17870  1699399800
                60.45439 22.17870  1699400400
                60.45439 22.17870  1699401000
                60.45439 22.17870  1699401600
                60.45439 22.17870  1699402200
                60.45439 22.17870  1699402800
                60.45439 22.17870  1699403400
                60.45439 22.17870  1699404000
                60.45439 22.17870  1699404600
                60.45439 22.17870  1699405200
                60.45439 22.17870  1699405800
                60.45439 22.17870  1699406400
                60.45439 22.17870  1699407000
                60.45439 22.17870  1699407600
                60.45439 22.17870  1699408200
                60.45439 22.17870  1699408800
                60.45439 22.17870  1699409400
                60.45439 22.17870  1699410000
                60.45439 22.17870  1699410600
                60.45439 22.17870  1699411200
                60.45439 22.17870  1699411800
                60.45439 22.17870  1699412400
                60.45439 22.17870  1699413000
                60.45439 22.17870  1699413600
                60.45439 22.17870  1699414200
                60.45439 22.17870  1699414800
                60.45439 22.17870  1699415400
                60.45439 22.17870  1699416000
                60.45439 22.17870  1699416600
                60.45439 22.17870  1699417200
                60.45439 22.17870  1699417800
                60.45439 22.17870  1699418400
                60.45439 22.17870  1699419000
                60.45439 22.17870  1699419600
                60.45439 22.17870  1699420200
                60.45439 22.17870  1699420800
                60.45439 22.17870  1699421400
                60.45439 22.17870  1699422000
                60.45439 22.17870  1699422600
                60.45439 22.17870  1699423200
                60.45439 22.17870  1699423800
                60.45439 22.17870  1699424400
                60.45439 22.17870  1699425000
                60.45439 22.17870  1699425600
                60.45439 22.17870  1699426200
                60.45439 22.17870  1699426800
                60.45439 22.17870  1699427400
                60.45439 22.17870  1699428000
                60.45439 22.17870  1699428600
                60.45439 22.17870  1699429200
                60.45439 22.17870  1699429800
                60.45439 22.17870  1699430400
                60.45439 22.17870  1699431000
                60.45439 22.17870  1699431600
                60.45439 22.17870  1699432200
                60.45439 22.17870  1699432800
                60.45439 22.17870  1699433400
                60.45439 22.17870  1699434000
                60.45439 22.17870  1699434600
                60.45439 22.17870  1699435200
                60.45439 22.17870  1699435800
                60.45439 22.17870  1699436400
                60.45439 22.17870  1699437000
                60.45439 22.17870  1699437600
                60.45439 22.17870  1699438200
                60.45439 22.17870  1699438800
                60.45439 22.17870  1699439400
                60.45439 22.17870  1699440000
                60.45439 22.17870  1699440600
                60.45439 22.17870  1699441200
                60.45439 22.17870  1699441800
                60.45439 22.17870  1699442400
                60.45439 22.17870  1699443000
                60.45439 22.17870  1699443600
                60.45439 22.17870  1699444200
                60.45439 22.17870  1699444800
                </gmlcov:positions>
                        </gmlcov:SimpleMultiPoint>
                    </gml:domainSet>
                    <gml:rangeSet>
                        <gml:DataBlock>
                            <gml:rangeParameters/>
                            <gml:doubleOrNilReasonTupleList>
                282.0 2.2 6.6 
                293.0 1.6 6.6 
                274.0 1.5 6.6 
                244.0 1.1 6.5 
                230.0 1.6 6.6 
                233.0 1.6 6.5 
                257.0 0.7 6.4 
                273.0 1.4 6.4 
                242.0 1.3 6.3 
                236.0 1.3 6.3 
                233.0 1.1 6.2 
                238.0 1.2 6.1 
                263.0 0.5 6.1 
                250.0 0.3 6.1 
                298.0 1.1 6.0 
                307.0 1.5 6.0 
                310.0 1.8 6.0 
                301.0 1.2 5.9 
                288.0 1.2 5.8 
                290.0 0.9 5.9 
                276.0 0.9 5.8 
                282.0 0.7 5.8 
                274.0 0.7 5.8 
                256.0 0.6 5.7 
                242.0 0.5 5.7 
                241.0 0.8 5.7 
                271.0 0.7 5.7 
                278.0 0.3 5.6 
                240.0 0.7 5.6 
                274.0 0.3 5.5 
                256.0 0.5 5.4 
                263.0 1.0 5.5 
                265.0 0.8 5.5 
                250.0 0.9 5.5 
                276.0 0.7 5.5 
                278.0 0.9 5.5 
                284.0 0.9 5.5 
                280.0 1.7 5.5 
                288.0 1.3 5.4 
                290.0 1.8 5.3 
                295.0 1.3 5.3 
                302.0 1.4 5.2 
                301.0 1.1 5.2 
                301.0 1.0 5.1 
                285.0 0.7 5.1 
                286.0 0.9 5.1 
                282.0 1.4 5.1 
                290.0 2.0 5.1 
                293.0 1.9 5.1 
                279.0 2.0 5.0 
                281.0 1.4 5.0 
                279.0 1.2 4.9 
                274.0 1.2 5.0 
                281.0 1.1 4.9 
                265.0 0.5 4.8 
                0.0 0.0 4.7 
                273.0 0.6 4.6 
                0.0 0.0 4.5 
                236.0 0.5 4.5 
                269.0 0.6 4.4 
                263.0 0.3 4.5 
                252.0 0.3 4.4 
                263.0 0.6 4.4 
                0.0 0.0 4.4 
                259.0 1.0 4.4 
                246.0 0.8 4.4 
                263.0 0.7 4.5 
                0.0 0.0 4.7 
                221.0 1.3 4.5 
                233.0 1.6 4.5 
                247.0 1.5 4.7 
                260.0 1.3 4.8 
                242.0 0.5 4.8 
                264.0 0.7 4.8 
                290.0 1.8 4.9 
                301.0 2.0 4.8 
                311.0 1.5 4.7 
                300.0 1.1 4.5 
                291.0 1.0 4.5 
                266.0 0.8 4.5 
                260.0 0.9 4.5 
                271.0 1.3 4.5 
                240.0 1.3 4.5 
                233.0 1.8 4.5 
                262.0 1.4 4.5 
                295.0 1.7 4.6 
                305.0 1.1 4.6 
                290.0 0.3 4.6 
                0.0 0.0 4.5 
                292.0 1.3 4.6 
                273.0 1.5 4.6 
                280.0 1.3 4.5 
                284.0 1.3 4.5 
                288.0 1.0 4.5 
                327.0 0.7 4.5 
                308.0 1.2 4.5 
                297.0 0.7 4.5 
                299.0 0.5 4.5 
                314.0 0.8 4.5 
                318.0 0.9 4.5 
                311.0 0.9 4.4 
                307.0 1.1 4.5 
                313.0 0.8 4.4 
                299.0 0.8 4.4 
                278.0 0.5 4.3 
                247.0 0.5 4.0 
                231.0 0.9 3.7 
                258.0 0.6 3.7 
                269.0 1.0 3.7 
                261.0 1.1 3.8 
                255.0 0.8 3.8 
                225.0 0.5 3.6 
                0.0 0.0 3.5 
                0.0 0.0 3.5 
                0.0 0.0 3.4 
                0.0 0.0 3.6 
                0.0 0.0 3.7 
                0.0 0.0 4.0 
                0.0 0.0 4.2 
                0.0 0.0 4.3 
                0.0 0.0 4.5 
                0.0 0.0 4.6 
                0.0 0.0 4.9 
                0.0 0.0 5.0 
                0.0 0.0 5.2 
                249.0 0.7 5.3 
                178.0 0.5 5.5 
                180.0 1.1 5.5 
                225.0 1.0 5.5 
                221.0 1.1 5.6 
                205.0 1.1 5.7 
                232.0 1.1 5.6 
                251.0 1.1 5.4 
                281.0 0.7 5.4 
                263.0 0.4 5.4 
                227.0 1.0 5.5 
                250.0 0.5 5.4 
                0.0 0.0 5.4 
                200.0 1.0 5.1 
                189.0 1.8 5.2 
                192.0 1.7 5.4 
                181.0 1.7 5.6 
                189.0 1.4 5.8 
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

const template = ['wfs:FeatureCollection/wfs:member/omso:GridSeriesObservation/om:result/gmlcov:MultiPointCoverage/gml:rangeSet/gml:DataBlock',

{
    data: 'gml:doubleOrNilReasonTupleList'
}
]

const xmlToObjectArray = async (xmlData, template) => {
    const result = await transform(xmlData, template);
    return result
}

xmlToObjectArray(xmlData, template).then(result => {
    console.log(result)
})