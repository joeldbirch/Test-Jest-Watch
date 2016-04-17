# Jest --watch error

## Steps to reproduce:

1. Run `npm install`
2. Run `jest --watch`
3. Alter or just save the "sum.js" file to trigger running the tests
4. Output similar to the following should appear in the command line:

```
> testjest@1.0.0 test /path/to/testjest
> jest --watch
Using Jest CLI v11.0.1, jasmine2
Using Jest CLI v11.0.1, jasmine2

Unexpected Error: spawn ENOTDIR

Error: spawn ENOTDIR
    at exports._errnoException (util.js:890:11)
    at ChildProcess.spawn (internal/child_process.js:302:11)
    at Object.exports.spawn (child_process.js:367:9)
    at /path/to/testjest/node_modules/jest-cli/src/lib/hg.js:43:32
    at Object.isHGRepository (/path/to/testjest/node_modules/jest-cli/src/lib/hg.js:41:10)
    at determineSCM (/path/to/testjest/node_modules/jest-cli/src/jest.js:79:8)
    at Array.map (native)
    at findOnlyChangedTestPaths (/path/to/testjest/node_modules/jest-cli/src/jest.js:56:42)
    at getTestPaths (/path/to/testjest/node_modules/jest-cli/src/jest.js:49:12)
    at runJest (/path/to/testjest/node_modules/jest-cli/src/jest.js:149:10)
npm ERR! Test failed.  See above for more details.
```

Note, that running `jest` without the `--watch` flag works correctly.
