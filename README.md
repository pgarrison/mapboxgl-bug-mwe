Reproduce this by running:
```
$ nano map.js  # put your mapbox access token in line 1
$ npm install
$ npm test
```
This requires Firefox and npm to be installed.

Test output on my machine:
```
$ firefox --version
Mozilla Firefox 68.11.0esr
$ npm test
> mwe@1.0.0 test /home/philipmg/workspace/coldchain/mwe
> jest

 FAIL  ./test.js (20.675 s)
  Visualization end-to-end tests
    ✕ Headless driver fails to load completely (15011 ms)
    ✓ Headful driver loads without issue (5154 ms)

  ● Visualization end-to-end tests › Headless driver fails to load completely

    : Timeout - Async callback was not invoked within the 15000 ms timeout specified by jest.setTimeout.Timeout - Async callback was not invoked within the 15000 ms timeout specified by jest.setTimeout.Error:

      31 | 
      32 | describe('Visualization end-to-end tests', function () {
    > 33 |     test('Headless driver fails to load completely', async (done) => {
         |     ^
      34 |         await testWithOptions(headlessOptions);
      35 |         done();
      36 |     }, 15000);

      at new Spec (node_modules/jest-jasmine2/build/jasmine/Spec.js:116:22)
      at Suite.<anonymous> (test.js:33:5)
      at Object.<anonymous> (test.js:32:1)

Test Suites: 1 failed, 1 total
Tests:       1 failed, 1 passed, 2 total
Snapshots:   0 total
Time:        21.12 s
Ran all test suites.
npm ERR! Test failed.  See above for more details.
```
