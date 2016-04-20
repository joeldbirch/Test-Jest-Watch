# Jest --watch error

## Steps to reproduce the --watch issue:

1. Run `npm install`
2. Run `jest --watch`
3. Alter or just save the "sum.js" file to trigger running the tests
4. Output similar to the below should appear in the command line
5. No tests actually run, but `Using Jest CLI v11.0.2, jasmine2` line is output each time.

```
> testjest@1.0.0 test /path/to/testjestwatch
> jest --watch
Using Jest CLI v11.0.2, jasmine2
Using Jest CLI v11.0.2, jasmine2
```

Note, that running `jest` without any flags works correctly.


## The -o flag doesn't work either. Steps to reproduce:

1. Run `npm install` if you haven't already
2. Run `jest -o`
3. The following error is output to the command line…

```
$ jest -o
Using Jest CLI v11.0.2, jasmine2
Error: spawn ENOTDIR
    at exports._errnoException (util.js:890:11)
    at ChildProcess.spawn (internal/child_process.js:302:11)
    at Object.exports.spawn (child_process.js:367:9)
    at /path/to/testjestwatch/node_modules/jest-cli/src/lib/hg.js:43:32
    at Object.isHGRepository (/path/to/testjestwatch/node_modules/jest-cli/src/lib/hg.js:41:10)
    at determineSCM (/path/to/testjestwatch/node_modules/jest-cli/src/jest.js:79:8)
    at Array.map (native)
    at findOnlyChangedTestPaths (/path/to/testjestwatch/node_modules/jest-cli/src/jest.js:56:42)
    at getTestPaths (/path/to/testjestwatch/node_modules/jest-cli/src/jest.js:49:12)
    at runJest (/path/to/testjestwatch/node_modules/jest-cli/src/jest.js:149:10)
```
