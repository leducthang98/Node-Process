const fs = require('fs')
const process = require('node:child_process')
const config = require('./config')

fs.writeFileSync(`${config.staticFolderPath}/default.txt`, 'welcome')
console.log(process.execSync('echo welcome').toString())
