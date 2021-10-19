import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import RTLAppDriver from './AppDriver';

describe('App', () => {
  let driver: RTLAppDriver;
  const testData = {
    firstName: 'Yair',
    lastName: 'Dana',
    color: 'Blue',
  };

  beforeEach(() => {
    const { baseElement } = render(<App />);
    driver = new RTLAppDriver(baseElement);
  });

  it('should display submitted info when user click submit', async () => {
    await driver.when.enterFirstName(testData.firstName);
    await driver.when.enterLastName(testData.lastName);
    await driver.when.selectColor(testData.color);

    await driver.when.submitButtonClick();

    expect(await driver.get.savedDataFirstName()).toEqual(testData.firstName);
    expect(await driver.get.savedDataLastName()).toEqual(testData.lastName);
    expect(await driver.get.savedDataColor()).toEqual(testData.color);
  });

  it('should override save data when user submit another form', async () => {
    const testOverrideData = {
      firstName: 'Dummy First Name',
      lastName: 'Dummy Last Name',
      color: 'Red',
    };

    await driver.when.enterFirstName(testData.firstName);
    await driver.when.enterLastName(testData.lastName);
    await driver.when.selectColor(testData.color);

    await driver.when.submitButtonClick();

    await driver.when.enterFirstName(testOverrideData.firstName);
    await driver.when.enterLastName(testOverrideData.lastName);
    await driver.when.selectColor(testOverrideData.color);

    await driver.when.submitButtonClick();

    expect(await driver.get.savedDataFirstName()).toEqual(
      testOverrideData.firstName,
    );
    expect(await driver.get.savedDataLastName()).toEqual(
      testOverrideData.lastName,
    );
    expect(await driver.get.savedDataColor()).toEqual(testOverrideData.color);
  });

  it('should clear form when user click clear', async () => {
    await driver.when.enterFirstName(testData.firstName);
    await driver.when.enterLastName(testData.lastName);
    await driver.when.selectColor(testData.color);

    await driver.when.clearButtonClick();

    expect(await driver.get.firstNameValue()).toEqual('');
    expect(await driver.get.lastNameValue()).toEqual('');
    expect(await driver.get.color()).toEqual('');
  });

  it('should enable clear button after user type at least one filed', async () => {
    expect(await driver.is.clearButtonDisabled()).toEqual(true);

    await driver.when.enterFirstName('');
    await driver.when.enterLastName('');
    await driver.when.selectColor(testData.color);

    expect(await driver.is.clearButtonDisabled()).toEqual(false);

    await driver.when.enterFirstName('');
    await driver.when.enterLastName(testData.lastName);
    await driver.when.selectColor('');

    expect(await driver.is.clearButtonDisabled()).toEqual(false);

    await driver.when.enterFirstName(testData.firstName);
    await driver.when.enterLastName('');
    await driver.when.selectColor('');

    expect(await driver.is.clearButtonDisabled()).toEqual(false);
  });

  it('should enable submit button ONLY after user fills all required fields', async () => {
    await driver.when.enterFirstName(testData.firstName);
    await driver.when.clearButtonClick();

    expect(await driver.is.submitButtonDisabled()).toEqual(true);

    await driver.when.enterLastName(testData.lastName);
    await driver.when.clearButtonClick();

    expect(await driver.is.submitButtonDisabled()).toEqual(true);

    await driver.when.selectColor(testData.color);
    await driver.when.clearButtonClick();

    expect(await driver.is.submitButtonDisabled()).toEqual(true);

    await driver.when.enterFirstName(testData.firstName);
    await driver.when.enterLastName(testData.lastName);

    expect(await driver.is.submitButtonDisabled()).toEqual(false);
  });

  it('should clear favorite color from dropdown when user click trash icon', async () => {
    await driver.when.selectColor(testData.color);
    expect(await driver.get.color()).toEqual(testData.color);

    await driver.when.trashIconClick();
    expect(await driver.get.color()).toEqual('');
  });

  it('should disable trash icon when no color chosen', async () => {
    expect(await driver.is.trashIconClickable()).toBe(false);

    await driver.when.selectColor(testData.color);
    expect(await driver.get.color()).toEqual(testData.color);
    expect(await driver.is.trashIconClickable()).toBe(true);

    await driver.when.trashIconClick();
    expect(await driver.is.trashIconClickable()).toBe(false);
  });
});
