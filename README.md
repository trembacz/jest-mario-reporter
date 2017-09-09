# Mario Jest Reporter (jest-mario-reporter)
Mario Reporter for Jest, based on [Mocha's version](https://www.npmjs.com/package/mocha-mario-reporter)

[![Build Status](https://travis-ci.org/trembacz/jest-mario-reporter.svg?branch=master)](https://travis-ci.org/trembacz/jest-mario-reporter)
[![Dependencies](https://david-dm.org/trembacz/jest-mario-reporter/status.svg)](https://david-dm.org/trembacz/jest-mario-reporter?view=list) 
[![devDependencies](https://david-dm.org/trembacz/jest-mario-reporter/dev-status.svg)](https://david-dm.org/trembacz/jest-mario-reporter?type=dev&view=list)

### Installing

```npm install --save-dev jest-mario-reporter```

or

```yarn add -D jest-mario-reporter```

## Getting Started

To use this reporter you will need to have an Jest test environment set up.
In your ```package.json``` add new reporter:

```json
"jest": {
  "bail": false,
  "reporters": ["default", ["<rootDir>/node_modules/jest-mario-reporter", {} ]]
}
```

## Run

```npm run jest``` 
or 
```yarn jest```

##
When all tests pass you will hear Mario music ;)
On failed tests you will see ASCII code + hear sound effect from Mario.

![](http://i.imgur.com/PbkhOBZ.jpg)

## Windows users
**You need "mplayer" installed on your system**

**Tip:** Copy ```mplayer.exe``` into folder with ```package.json```

## LICENSE
[MIT](LICENSE)
