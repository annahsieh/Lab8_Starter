// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2
//tests for isPhoneNumber()
test('111-111-1111 is a valid phone number', () => {
    result = functions.isPhoneNumber('111-111-1111');
    expect(result).toBe(true);
});

test('(111)111-1111 is a valid phone number', () => {
    result = functions.isPhoneNumber('(111)111-1111');
    expect(result).toBe(true);
});

test('111-111-111 is an invalid phone number', () => {
    result = functions.isPhoneNumber('111-111-111');
    expect(result).toBe(false);
});

test('(111)111-111 is an invalid phone number', () => {
    result = functions.isPhoneNumber('(111)111-111');
    expect(result).toBe(false);
});

//tests for isEmail()
test('hello@gmail.com is a valid email', () => {
    result = functions.isEmail('hello@gmail.com');
    expect(result).toBe(true);
});

test('HeLLo_@yahoo.com is a valid email', () => {
    result = functions.isEmail('HeLLo_@yahoo.com');
    expect(result).toBe(true);
});

test('hello@gmail.c is an invalid email', () => {
    result = functions.isEmail('hello@gmail.c');
    expect(result).toBe(false);
});

test('hello@gmail!.com is an invalid email', () => {
    result = functions.isEmail('hello@gmail!.com');
    expect(result).toBe(false);
});

//tests for isStrongPassword()
test('hello is a strong password', () => {
    result = functions.isStrongPassword('hello');
    expect(result).toBe(true);
});

test('Hello123 is a strong password', () => {
    result = functions.isStrongPassword('Hello123');
    expect(result).toBe(true);
});

test('1234 is not a strong password', () => {
    result = functions.isStrongPassword('1234');
    expect(result).toBe(false);
});

test('hello! is not a strong password', () => {
    result = functions.isStrongPassword('hello!');
    expect(result).toBe(false);
});

//tests for isDate()
test('1/1/2021 is a valid date', () => {
    result = functions.isDate('1/1/2021');
    expect(result).toBe(true);
});

test('11/11/2021 is a valid date', () => {
    result = functions.isDate('11/11/2021');
    expect(result).toBe(true);
});

test('11/11/21 is not a valid date', () => {
    result = functions.isDate('11/11/21');
    expect(result).toBe(false);
});
test('11/111/2021 is not a valid date', () => {
    result = functions.isDate('11/111/2021');
    expect(result).toBe(false);
});

//tests for isHexColor()
test('#111 is a valid hex color', () => {
    result = functions.isHexColor('#111');
    expect(result).toBe(true);
});

test('#AAA111 is a valid hex color', () => {
    result = functions.isHexColor('#AAA111');
    expect(result).toBe(true);
});

test('#9999 is an invalid hex color', () => {
    result = functions.isHexColor('#9999');
    expect(result).toBe(false);
});

test('#AAAAAAA is an invalid hex color', () => {
    result = functions.isHexColor('#AAAAAAA');
    expect(result).toBe(false);
});