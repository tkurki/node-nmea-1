nmea-0183
=========

An extensible parser and encoder for NMEA-0183 sentences for use with node.js.

Features
========

* runs under node.js
* parses individual NMEA-0183 sentences

    (it doesn't read the serial or USB input. you have to get the sentences from somewhere yourself)

    has built-in support for several of the most common NMEA sentences

    GPGGA, GPRMC, GPGSA, GPGSV, GPVTG

    lets you add sentence parsers for those not built-in (there are literally dozens of standard and proprietary sentence types)
* takes geographic location input and encodes it into valid NMEA-0183 sentences
 
API
===

the NMEA object
-----------------------

The NMEA object contains the user API functions that are used to decode and encode NMEA sentences, as well as lower level functions that are used to build additional decoder and encoder extensions.
    nmea = require('nmea-0183')
    
    var GPGGASentence = "$GPGGA,123519,4807.038,N,01131.324,E,1,08,0.9,545.4,M,46.9,M, , *42"

    var GPGGAObject = nmea.parse(GPGGASentence)
    
    console.log(JSON.stringify(GPGGAObject, null, 2))
    
    // result:
    {
        "id": "GPGGA",
        "time": "123519",
        "latitude": "48.11730000",
        "longitude": "11.52206667",
        "fix": 1,
        "satellites": 8,
        "hdop": 0.9,
        "altitude": 545.4,
        "aboveGeoid": 46.9,
        "dgpsUpdate": "",
        "dgpsReference": ""
    }

###error handling  
    function error(String) outputs null. this function is an error handler that is called by the library when an error is detected.
    returns null
    it receieves a string describing the error as input.
    the default handler outputs the error string generated by the library.
    
    function setErrorHandler(function (String)) 
    returns null
    Sets the 'error' callback function for error handling. receives a string and does whatever. 


Examples
---------
See tests
