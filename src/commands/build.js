
const webpack = require('webpack')
const config = require('../../webpack.config.js')
const {scaffold} = require('../scaffold')
const {Command} = require('@oclif/command')

class DevCommand extends Command {
  pack() {
    webpack(config,
      (err, stats) => {
        if (err) {
          this.log(err)
        } else {
          this.log('Stats', stats)
        }
      })
  }

  async run() {
    scaffold('./models')
    this.pack()
  }
}

DevCommand.description = `Build the react app
...
Extra documentation goes here
`
module.exports = DevCommand
