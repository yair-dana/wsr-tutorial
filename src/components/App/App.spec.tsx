import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import {
  inputTestkitFactory,
  DropdownTestkit,
  TextTestkit,
  ButtonTestkit,
} from 'wix-style-react/dist/testkit';
import DataHooks from '../DataHooks';
import { getIdByColor } from '../colorOptions';

const enterFormFields = async (
  baseElement,
  firstName: string,
  lastName: string,
  colorId: string,
) => {
  const inputFirstName = inputTestkitFactory({
    wrapper: baseElement,
    dataHook: DataHooks.FIRST_NAME,
  });
  const inputLastName = inputTestkitFactory({
    wrapper: baseElement,
    dataHook: DataHooks.LAST_NAME,
  });
  const dropdownColor = DropdownTestkit({
    wrapper: baseElement,
    dataHook: DataHooks.FAVORITE_COLOR,
  });

  await inputFirstName.enterText(firstName);
  await inputLastName.enterText(lastName);
  if (colorId !== '') {
    await dropdownColor.driver.selectOptionById(colorId);
  }
};

describe('App', () => {
  it('should allow user clear form only after type at least one field', async () => {
    const { baseElement } = render(<App />);
    const clearButton = ButtonTestkit({
      wrapper: baseElement,
      dataHook: DataHooks.CLEAR_BUTTON,
    });

    expect(await clearButton.isButtonDisabled()).toEqual(true);

    await enterFormFields(baseElement, 'Y', '', '');

    expect(await clearButton.isButtonDisabled()).toEqual(false);

    await enterFormFields(baseElement, '', 'D', '');

    expect(await clearButton.isButtonDisabled()).toEqual(false);

    await enterFormFields(baseElement, '', '', '1');

    expect(await clearButton.isButtonDisabled()).toEqual(false);
  });

  it('should allow user submit form only after fills required fields', async () => {
    const { baseElement } = render(<App />);
    const submitButton = ButtonTestkit({
      wrapper: baseElement,
      dataHook: DataHooks.SUBMIT_BUTTON,
    });

    await enterFormFields(baseElement, 'Yair', '', '');

    expect(await submitButton.isButtonDisabled()).toEqual(true);

    await enterFormFields(baseElement, '', 'Dana', '');

    expect(await submitButton.isButtonDisabled()).toEqual(true);

    await enterFormFields(baseElement, 'Yair', 'Dana', '');

    expect(await submitButton.isButtonDisabled()).toEqual(false);
  });

  it('should display submitted info when user click submit', async () => {
    const { baseElement } = render(<App />);
    const submitButton = ButtonTestkit({
      wrapper: baseElement,
      dataHook: DataHooks.SUBMIT_BUTTON,
    });

    const colorId = getIdByColor('Blue');
    await enterFormFields(baseElement, 'Yair', 'Dana', colorId);
    await submitButton.click();

    const submitFirstName = TextTestkit({
      wrapper: baseElement,
      dataHook: DataHooks.SUBMIT_FIRST_NAME,
    });
    const submitLastName = TextTestkit({
      wrapper: baseElement,
      dataHook: DataHooks.SUBMIT_LAST_NAME,
    });
    const submitFavoriteColor = TextTestkit({
      wrapper: baseElement,
      dataHook: DataHooks.SUBMIT_FAVORITE_COLOR,
    });

    expect(await submitFirstName.getText()).toEqual('Yair');
    expect(await submitLastName.getText()).toEqual('Dana');
    expect(await submitFavoriteColor.getText()).toEqual('Blue');
  });
});
