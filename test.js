const { Builder, By, Key, until } = require('selenium-webdriver');
const firefox = require('selenium-webdriver/firefox');
const express = require('express');

const PORT = 8080;
const URL = `http://localhost:${PORT}`;
let server;

const headfulOptions = new firefox.Options();
const headlessOptions = new firefox.Options();
headlessOptions.addArguments('-headless');

beforeAll(async (done) => {
    const app = express();
    app.use(express.static(__dirname));
    server = app.listen(PORT, (err) => {
        if (err) throw err;
        done();
    });
});

async function testWithOptions(options) {
    const driver = await new Builder()
        .forBrowser('firefox')
        .setFirefoxOptions(options)
        .build();
    await driver.get(URL);
    await driver.wait(until.elementLocated(By.id('missing')));
    await driver.quit();
}

describe('Visualization end-to-end tests', function () {
    test('Headless driver fails to load completely', async (done) => {
        await testWithOptions(headlessOptions);
        done();
    }, 15000);

    test('Headful driver loads without issue', async (done) => {
        await testWithOptions(headfulOptions);
        done();
    }, 15000);
});

afterAll(async (done) => {
    server.close();
    server.on('close', done);
});
