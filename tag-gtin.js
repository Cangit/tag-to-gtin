
const epc = require('node-epc');

const RFID_GTIN = class {

  modulus10(num){
    var calc, i, check, checksum = 0, r = [2,1]; // alternating routing table

    // iterate on all the numbers
    for ( i=num.length-1; i--; ){
      calc = num.charAt(i) * r[i % r.length];
      calc = ((calc/10)|0) + (calc % 10);
      checksum += calc;
    }

    check = (10-(checksum % 10)) % 10; // make sure to get '0' if checksum is '10'

    return check;
  }

  tagToGtin(rfid_hex, callback) {
    let _this = this;
    epc.getParser('SGTIN')
    .then(function(sgtin) {
      sgtin.parse(rfid_hex)
        .then(function(parsed) {

          const short = parsed.parts.ItemReference.substring(1, 6);
          const getIn9 = parsed.parts.CompanyPrefix + short;
          const mod10 = _this.modulus10(getIn9);

          callback(getIn9 + mod10);
        })
        .fail(function(err) {
          console.error(err);
        });
    });
  }

}

const rfid_gtin = new RFID_GTIN();
module.exports = rfid_gtin;
