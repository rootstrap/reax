
const {Command} = require('@oclif/command')
const {promises: fs} = require('fs')
const {spawn} = require('child_process')
const path = require('path')
const {appDir} = require('../config/paths')

class InitCommand extends Command {
  async run() {
    this.install()
    this.webpack()
    this.createSampleModel()
    this.createBaseEnvFile()
  }

  install() {
    fs.copyFile(
      path.resolve(__dirname, '../../app/package.json'),
      `${appDir}/package.json`)

    const install = spawn('npm', ['install'], {stdio: 'inherit'})

    install.on('close', code => {
      if (code !== 0) this.log(`child process exited with code ${code}`)
    })
  }

  webpack() {
    fs.copyFile(
      path.resolve(__dirname, '../config/webpack.client.config.js'),
      `${appDir}/webpack.config.js`)
  }

  createSampleModel() {
    fs.mkdir(`${appDir}/models`)
    fs.writeFile(`${appDir}/models/todo.json`, '{}\n')
  }

  createBaseEnvFile() {
    fs.writeFile(`${appDir}/.env`, 'API_URL=\n')
  }
}

InitCommand.description = `Init project
...
Extra documentation goes here
`
module.exports = InitCommand
