iMac-iMac:instrukcje warunkowe iMac$ npm run build

> learning-task-runner@1.0.0 build /Users/iMac/Projekty/Kodilla/instrukcje warunkowe
> npm-run-all build:* test


> learning-task-runner@1.0.0 build:clean /Users/iMac/Projekty/Kodilla/instrukcje warunkowe
> rimraf css/*.css


> learning-task-runner@1.0.0 build:sass /Users/iMac/Projekty/Kodilla/instrukcje warunkowe
> node-sass --output-style compact -o css sass

fs.js:924
  return binding.readdir(pathModule.toNamespacedPath(path), options.encoding);
                 ^

Error: ENOENT: no such file or directory, scandir '/Users/iMac/Projekty/Kodilla/instrukcje warunkowe/node_modules/node-sass/vendor'
    at Object.fs.readdirSync (fs.js:924:18)
    at Object.getInstalledBinaries (/Users/iMac/Projekty/Kodilla/instrukcje warunkowe/node_modules/node-sass/lib/extensions.js:128:13)
    at foundBinariesList (/Users/iMac/Projekty/Kodilla/instrukcje warunkowe/node_modules/node-sass/lib/errors.js:20:15)
    at foundBinaries (/Users/iMac/Projekty/Kodilla/instrukcje warunkowe/node_modules/node-sass/lib/errors.js:15:5)
    at Object.module.exports.missingBinary (/Users/iMac/Projekty/Kodilla/instrukcje warunkowe/node_modules/node-sass/lib/errors.js:45:5)
    at module.exports (/Users/iMac/Projekty/Kodilla/instrukcje warunkowe/node_modules/node-sass/lib/binding.js:15:30)
    at Object.<anonymous> (/Users/iMac/Projekty/Kodilla/instrukcje warunkowe/node_modules/node-sass/lib/index.js:14:35)
    at Module._compile (module.js:660:30)
    at Object.Module._extensions..js (module.js:671:10)
    at Module.load (module.js:573:32)
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! learning-task-runner@1.0.0 build:sass: `node-sass --output-stylecompact -o css sass`
npm ERR! Exit status 1
npm ERR!
npm ERR! Failed at the learning-task-runner@1.0.0 build:sass script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     /Users/iMac/.npm/_logs/2018-03-11T18_19_22_236Z-debug.log
ERROR: "build:sass" exited with 1.
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! learning-task-runner@1.0.0 build: `npm-run-all build:* test`
npm ERR! Exit status 1
npm ERR!
npm ERR! Failed at the learning-task-runner@1.0.0 build script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     /Users/iMac/.npm/_logs/2018-03-11T18_19_22_331Z-debug.log
iMac-iMac:instrukcje warunkowe iMac$