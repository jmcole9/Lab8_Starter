// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2

// isPhoneNumber() tests
test('checks if \'916-990-3283\' is a valid phone number', () => {
    expect(functions.isPhoneNumber("916-990-3283")).toBe(true);
});

test('checks if \'916-390-9928\' is a valid phone number', () => {
    expect(functions.isPhoneNumber("916-390-9928")).toBe(true);
});

test('checks if \'7864-435-546\' is not a valid phone number', () => {
    expect(functions.isPhoneNumber("7864-435-546")).toBe(false);
});

test('checks if \'786-435-546F\' is not a valid phone number', () => {
    expect(functions.isPhoneNumber("786-435-546F")).toBe(false);
});

// isEmail() tests
test('checks if \'jmcole@ucsd.edu\' is a valid email', () => {
    expect(functions.isEmail("jmcole@ucsd.edu")).toBe(true);
});

test('checks if \'jamesmcole9@gmail.com\' is a valid email', () => {
    expect(functions.isEmail("jamesmcole9@gmail.com")).toBe(true);
});

test('checks if \'kevin@usa\' is not a valid email', () => {
    expect(functions.isEmail("kevin@usa")).toBe(false);
});

test('checks if \'xXxREAPERxOFxFEARxXx\' is not a valid email', () => {
    expect(functions.isEmail("xXxREAPERxOFxFEARxXx")).toBe(false);
});

// isStrongPassword() tests
test('checks if \'password\' is a strong password', () => {
    expect(functions.isStrongPassword("password")).toBe(true);
});

test('checks if \'password1\' is a strong password', () => {
    expect(functions.isStrongPassword("password1")).toBe(true);
});

test('checks if \'4 eV3rY1 wH0 8 Cr0W\' is not a strong password', () => {
    expect(functions.isStrongPassword("4 eV3rY1 wH0 8 Cr0W")).toBe(false);
});

test('checks if \'no\' is not a strong password', () => {
    expect(functions.isStrongPassword("no")).toBe(false);
});

// isDate() tests
test('checks if \'08/19/2001\' is a valid date', () => {
    expect(functions.isDate("08/19/2001")).toBe(true);
});

test('checks if \'11/21/2022\' is a valid date', () => {
    expect(functions.isDate("11/21/2022")).toBe(true);
});

test('checks if \'113/212/2022\' is a not valid date', () => {
    expect(functions.isDate("113/212/2022")).toBe(false);
});

test('checks if \'123456789\' is a not valid date', () => {
    expect(functions.isDate("123456789")).toBe(false);
});
// isHexColor() tests
test('checks if \'FFFFFF\' is a valid hex color', () => {
    expect(functions.isHexColor("FFFFFF")).toBe(true);
});

test('checks if \'345\' is a valid hex color', () => {
    expect(functions.isHexColor("345")).toBe(true);
});

test('checks if \'3456\' is not a valid hex color', () => {
    expect(functions.isHexColor("3456")).toBe(false);
});

test('checks if \'IDK\' is not a valid hex color', () => {
    expect(functions.isHexColor("IDK")).toBe(false);
});