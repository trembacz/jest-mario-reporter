# Mario Jest Reporter (jest-mario-reporter)

Mario Reporter for Jest, based on [![Mocha's version]()](https://www.npmjs.com/package/mocha-mario-reporter)

### Installing

```npm install --save-dev jest-mario-reporter```
or
```yarn add -D jest-mario-reporter```

## Getting Started

To use this reporter you will need to have an Jest test environment set up.
In your package.json add new reporter:

```json
"jest": {
  "bail": false,
	"reporters": ["default", ["<rootDir>/node_modules/jest-mario-reporter", {} ]]
}
```

![](http://i.imgur.com/PbkhOBZ.jpg)

## LICENSE
[MIT](LICENSE)
