//main.js

//Argument Parser
//Cannot use argparse here as the selenium reporter runs as a mocha application and use of argparse conflict with mocha.  Using process.argv for now to pass in the target url.
//console.log(process.argv[3]);
if (process.argv[2] === "--location"){
  var target_location = process.argv[3];
}
else{
  return "Location is not defined.";
}

//Run ZAP Security Scanner and export report
var util = require('util'),
    exec = require('child_process').exec,
    homepageUrl = ' -cmd -quickurl ' + target_location,
    zapOutput = ' -quickout /Users/josborne/code/zap-reporter/output/zapOutput.xml',
    zapShCmd = 'sh server/zap/ZAP_2.3.0.1/zap.sh' + homepageUrl + zapOutput,
    child;

/*
Main
*/

(function(){
  child = exec(zapShCmd, function(error, stdout, stderr){
    console.log('stdout: ' + stdout);
    console.log('stderr: ' + stderr);
    if (error !== null){
      console.log('exec error: ' + error);
    }
  });
  console.log('zap-reporter');
}).call(this);