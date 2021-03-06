var Helper = require("../Helper.js");

exports.Decoder = function(id) {
    this.id = id;
    this.parse = function(tokens) {
        var gsa;
        var i;
        if(tokens.length < 17) {
            throw new Error('GSA : not enough tokens');
        }

        // trim whitespace
        // some parsers may not want the tokens trimmed so the individual parser has to do it if applicable
        for(i=0;i<tokens.length;++i) {
            tokens[i] = tokens[i].trim();
        }

//        console.log(JSON.stringify(tokens))
        gsa = {
            id : tokens[0].substr(1),
            mode: tokens[1],
            fix: tokens[2],
            sat :[],
            pdop: Helper.parseFloatX(tokens[15]),
            hdop: Helper.parseFloatX(tokens[16]),
            vdop: Helper.parseFloatX(tokens[17])
        };

//        // extract up to 4 sets of sat data
        for(i=3;i<15;i+= 1) {
            if(tokens[i] !== '') {
                gsa.sat.push(tokens[i]);
            }
        }
        return gsa;
    };
};