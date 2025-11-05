/**
 * Unit Tests for Lesson 8: Advanced Form Elements Assignment
 * 
 * This test suite validates that students have correctly implemented:
 * - Gender dropdown with proper attributes and accessibility features
 * - Address textarea with proper attributes and accessibility features
 * - Submit and Reset buttons with accesskey and tabindex
 * - Proper form structure and HTML document structure
 * 
 * To run these tests:
 * 1. Install dependencies: npm install --save-dev jest jest-environment-jsdom @testing-library/dom
 * 2. Run tests: npm test
 */

const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');

// Load the HTML file
let htmlContent;
let dom;
let document;

beforeAll(() => {
  const filePath = path.join(__dirname, 'index.html');
  
  if (!fs.existsSync(filePath)) {
    throw new Error('index.html file not found. Please ensure the file exists in the same directory as the test file.');
  }
  
  htmlContent = fs.readFileSync(filePath, 'utf8');
  dom = new JSDOM(htmlContent);
  document = dom.window.document;
});

describe('HTML Document Structure', () => {
  test('should have proper DOCTYPE declaration', () => {
    expect(htmlContent.trim().toLowerCase()).toMatch(/^<!doctype html>/i);
  });

  test('should have html, head, and body elements', () => {
    expect(document.querySelector('html')).toBeTruthy();
    expect(document.querySelector('head')).toBeTruthy();
    expect(document.querySelector('body')).toBeTruthy();
  });

  test('should contain a form element', () => {
    const form = document.querySelector('form');
    expect(form).toBeTruthy();
  });
});

describe('Gender Dropdown (Select Element)', () => {
  let genderSelect;
  let genderLabel;

  beforeAll(() => {
    genderSelect = document.querySelector('select#gender');
    genderLabel = document.querySelector('label[for="gender"]');
  });

  test('should exist with id="gender"', () => {
    expect(genderSelect).toBeTruthy();
  });

  test('should have name="gender"', () => {
    expect(genderSelect?.getAttribute('name')).toBe('gender');
  });

  test('should have required attribute', () => {
    expect(genderSelect?.hasAttribute('required')).toBe(true);
  });

  test('should have tabindex="6"', () => {
    expect(genderSelect?.getAttribute('tabindex')).toBe('6');
  });

  test('should have at least 4 options', () => {
    const options = genderSelect?.querySelectorAll('option');
    expect(options?.length).toBeGreaterThanOrEqual(4);
  });

  test('should have first option as placeholder with empty value', () => {
    const firstOption = genderSelect?.querySelector('option');
    expect(firstOption?.getAttribute('value')).toBe('');
  });

  test('should have options for male, female, and other', () => {
    const options = Array.from(genderSelect?.querySelectorAll('option') || []);
    const values = options.map(opt => opt.getAttribute('value'));
    
    expect(values).toContain('male');
    expect(values).toContain('female');
    expect(values).toContain('other');
  });

  test('should have associated label with for="gender"', () => {
    expect(genderLabel).toBeTruthy();
  });

  test('label should have accesskey="g"', () => {
    expect(genderLabel?.getAttribute('accesskey')).toBe('g');
  });
});

describe('Address Textarea', () => {
  let addressTextarea;
  let addressLabel;

  beforeAll(() => {
    addressTextarea = document.querySelector('textarea#address');
    addressLabel = document.querySelector('label[for="address"]');
  });

  test('should exist with id="address"', () => {
    expect(addressTextarea).toBeTruthy();
  });

  test('should have name="address"', () => {
    expect(addressTextarea?.getAttribute('name')).toBe('address');
  });

  test('should have required attribute', () => {
    expect(addressTextarea?.hasAttribute('required')).toBe(true);
  });

  test('should have tabindex="7"', () => {
    expect(addressTextarea?.getAttribute('tabindex')).toBe('7');
  });

  test('should have rows attribute', () => {
    expect(addressTextarea?.hasAttribute('rows')).toBe(true);
    expect(addressTextarea?.getAttribute('rows')).toBeTruthy();
  });

  test('should have cols attribute', () => {
    expect(addressTextarea?.hasAttribute('cols')).toBe(true);
    expect(addressTextarea?.getAttribute('cols')).toBeTruthy();
  });

  test('should have associated label with for="address"', () => {
    expect(addressLabel).toBeTruthy();
  });

  test('label should have accesskey="a"', () => {
    expect(addressLabel?.getAttribute('accesskey')).toBe('a');
  });
});

describe('Submit Button', () => {
  let submitButton;

  beforeAll(() => {
    submitButton = document.querySelector('button[type="submit"]');
  });

  test('should exist with type="submit"', () => {
    expect(submitButton).toBeTruthy();
  });

  test('should have accesskey="r"', () => {
    expect(submitButton?.getAttribute('accesskey')).toBe('r');
  });

  test('should have tabindex="8"', () => {
    expect(submitButton?.getAttribute('tabindex')).toBe('8');
  });

  test('should have text content', () => {
    expect(submitButton?.textContent.trim().length).toBeGreaterThan(0);
  });
});

describe('Reset Button', () => {
  let resetButton;

  beforeAll(() => {
    resetButton = document.querySelector('button[type="reset"]');
  });

  test('should exist with type="reset"', () => {
    expect(resetButton).toBeTruthy();
  });

  test('should have accesskey="x"', () => {
    expect(resetButton?.getAttribute('accesskey')).toBe('x');
  });

  test('should have tabindex="9"', () => {
    expect(resetButton?.getAttribute('tabindex')).toBe('9');
  });

  test('should have text content', () => {
    expect(resetButton?.textContent.trim().length).toBeGreaterThan(0);
  });
});

describe('Accessibility Features', () => {
  test('should have at least 4 elements with accesskey attributes', () => {
    const elementsWithAccesskey = document.querySelectorAll('[accesskey]');
    expect(elementsWithAccesskey.length).toBeGreaterThanOrEqual(4);
  });

  test('should have at least 4 elements with tabindex attributes', () => {
    const elementsWithTabindex = document.querySelectorAll('[tabindex]');
    expect(elementsWithTabindex.length).toBeGreaterThanOrEqual(4);
  });

  test('should have sequential tabindex values', () => {
    const elementsWithTabindex = document.querySelectorAll('[tabindex]');
    const tabindexValues = Array.from(elementsWithTabindex)
      .map(el => parseInt(el.getAttribute('tabindex')))
      .filter(val => !isNaN(val))
      .sort((a, b) => a - b);
    
    expect(tabindexValues.length).toBeGreaterThanOrEqual(4);
    
    // Check that tabindex values are unique (no duplicates)
    const uniqueValues = [...new Set(tabindexValues)];
    expect(uniqueValues.length).toBe(tabindexValues.length);
  });

  test('accesskey values should be unique', () => {
    const elementsWithAccesskey = document.querySelectorAll('[accesskey]');
    const accesskeyValues = Array.from(elementsWithAccesskey)
      .map(el => el.getAttribute('accesskey'))
      .filter(val => val);
    
    const uniqueValues = [...new Set(accesskeyValues)];
    expect(uniqueValues.length).toBe(accesskeyValues.length);
  });
});

describe('Form Integration', () => {
  test('all form elements should be inside a form tag', () => {
    const form = document.querySelector('form');
    expect(form).toBeTruthy();
    
    const genderSelect = document.querySelector('select#gender');
    const addressTextarea = document.querySelector('textarea#address');
    const submitButton = document.querySelector('button[type="submit"]');
    const resetButton = document.querySelector('button[type="reset"]');
    
    // Check if elements are descendants of form
    expect(form?.contains(genderSelect)).toBe(true);
    expect(form?.contains(addressTextarea)).toBe(true);
    expect(form?.contains(submitButton)).toBe(true);
    expect(form?.contains(resetButton)).toBe(true);
  });

  test('all labels should be properly associated with inputs', () => {
    const genderLabel = document.querySelector('label[for="gender"]');
    const addressLabel = document.querySelector('label[for="address"]');
    const genderSelect = document.querySelector('select#gender');
    const addressTextarea = document.querySelector('textarea#address');
    
    expect(genderLabel).toBeTruthy();
    expect(addressLabel).toBeTruthy();
    expect(genderSelect).toBeTruthy();
    expect(addressTextarea).toBeTruthy();
  });
});