var replace = require('replace-in-file');
var package = require("./package.json");
var version = package.version;
var buildVersion = process.argv[2];
var host = process.argv[3];
var port = process.argv[4];
const options = {
  files: 'src/environments/environment.prod.ts',
  from: [/{VERSION}/g,/{BUILD_NUMBER}/g,/{HOST}/g,/{PORT}/g],
  to: [version, buildVersion, host, port],
  allowEmptyPaths: false,
};

try {
  let changedFiles = replace.sync(options);
  console.log('Build version set: ' + buildVersion);
}
catch (error) {
  console.error('Error occurred:', error);
}
