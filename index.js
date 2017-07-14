const player = require('play-sound')();
const fs = require('fs');
const path = require('path');
const win32 = (process.platform === 'win32') ? true : false;

class marioReporter {
	constructor(globalConfig) {
		this.failSound = path.join(__dirname, '..', 'jest-mario-reporter/sounds/fail.wav');
		this.passSound = path.join(__dirname, '..', 'jest-mario-reporter/sounds/pass.wav');
		this.gameOverFile = path.join(__dirname, '..', 'jest-mario-reporter/gameover.txt');
		this.stopOnFirstError = globalConfig.bail || false;
	}

	playSound(sound) {
		player.play(sound, function(err) {
			if (err && win32) {
				console.log('\n'+ err + '\nYou need "mplayer" installed on your system for it to work properly!.\n');
				return;
			} else if (err) {
				console.log(err);
			}
		});
	}

	showASCII(gameOverFile) {
		fs.readFile(gameOverFile, function(err, data) {
			if (err) { throw new err; }
			let gameOverText = data.toString();
			console.log(gameOverText)
		});
	}

	onRunComplete(contexts, results) {
		if (this.stopOnFirstError) {
			console.log('\nPlease set "bail" option to false\n');
			return;
		}
		if (!results.numTotalTests || !results.numFailedTests) {
			this.playSound(this.passSound);
		} else {
			this.playSound(this.failSound);
			this.showASCII(this.gameOverFile);
		}
	}
}

module.exports = marioReporter;
