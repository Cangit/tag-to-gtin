tag-to-gtin
=====

Convert our rfid tags to gtin/ean.

```
npm install tag-to-gtin
```

Basic example
-----

```js
const tagConverter = require('tag-to-gtin')

const tag = '3035E8BF60548AED2276206E'
tagConverter.tagToGtin(tag, function (gtin) {
  console.log('gtin: ' + gtin)
  // gtin: 8007640865718
})
```

### Methods

#### tagToGtin (tagStr, callback)

#### mod10control (num)
