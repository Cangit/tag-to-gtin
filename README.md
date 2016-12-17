tag-to-gtin
=====

Convert our rfid tags to gtin/ean.

Basic example
-----

```js
const rfidGtin = require('./rfid-gtin')


rfidGtin.tagToGtin('3035E8BF60548AED2276206E', function (gtin) {
  console.log('gtin: ' + gtin)
  // gtin: 8007640865718
})
```

### Methods

#### tagToGtin (tagStr, callback)

#### mod10control (num)
