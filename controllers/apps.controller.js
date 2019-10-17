let fs = require("fs");
let path = require("path");
let apps = JSON.parse(fs.readFileSync(path.join(__dirname, "../apps.json")));

module.exports = {
  getApps: (req, res) => {
    res.json(apps);
  }
};
