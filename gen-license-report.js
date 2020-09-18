var checker = require('license-checker')
fs = require('fs')

checker.init(
  {
    start: '.',
    customPath: './license-format.json' // somehow this virtually empty file gives us the fields we need
  },
  function (err, packages) {
    if (err) {
      throw err
    } else {
      const proccessed = []
      for (const package of Object.keys(packages)) {
        const { licenses, repository, copyright } = packages[package]
        proccessed.push({ package, licenses, repository, copyright })
      }
      fs.writeFileSync('./public/licenses.json', JSON.stringify(proccessed))
    }
  }
)
