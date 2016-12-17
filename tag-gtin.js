
const epc = require('node-epc')

const RFID_GTIN = class {

  mod10control (num) {
    let calc
    let checksum = 0
    const r = [2, 1]

    for (var i = num.length - 1; i--;) {
      calc = num.charAt(i) * r[i % r.length]
      calc = ((calc / 10) | 0) + (calc % 10)
      checksum += calc
    }

    const controlNumber = (10 - (checksum % 10)) % 10

    return controlNumber
  }

  tagToGtin (rfidHex, callback) {
    const _this = this
    epc.getParser('SGTIN').then(function (sgtin) {
      sgtin.parse(rfidHex).then(function (parsed) {
        const id = parsed.parts.ItemReference.substring(1, 6)
        const tag = parsed.parts.CompanyPrefix + id
        const controlNumber = _this.mod10control(tag)

        callback(tag + controlNumber)
      }).fail(function (err) {
        console.error(err)
      })
    })
  }

}

const rfidGtin = new RFID_GTIN()
module.exports = rfidGtin
