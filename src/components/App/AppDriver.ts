import {
  DropdownTestkit,
  InputTestkit,
  inputTestkitFactory,
  ButtonTestkit,
  TextTestkit,
} from 'wix-style-react/dist/testkit';
import DataHooks from '../DataHooks';
import { getIdByColor } from '../colorOptions';

class RTLAppDriver {
  constructor(private baseElement: Element) {}
  is = {
    clearButtonDisabled: () => {
      const clearButton = ButtonTestkit({
        wrapper: this.baseElement,
        dataHook: DataHooks.CLEAR_BUTTON,
      });

      return clearButton.isButtonDisabled();
    },
    submitButtonDisabled: () => {
      const submitButton = ButtonTestkit({
        wrapper: this.baseElement,
        dataHook: DataHooks.SUBMIT_BUTTON,
      });

      return submitButton.isButtonDisabled();
    },
  };

  get = {
    firstNameValue: () => {
      const inputFirstName = inputTestkitFactory({
        wrapper: this.baseElement,
        dataHook: DataHooks.FIRST_NAME,
      });
      return inputFirstName.getText();
    },
    lastNameValue: () => {
      const inputLastName = inputTestkitFactory({
        wrapper: this.baseElement,
        dataHook: DataHooks.LAST_NAME,
      });

      return inputLastName.getText();
    },
    color: () => {
      const dropdownColor = DropdownTestkit({
        wrapper: this.baseElement,
        dataHook: DataHooks.FAVORITE_COLOR,
      });

      return dropdownColor.inputDriver.getText();
    },
    savedDataFirstName: () => {
      const firstName = TextTestkit({
        wrapper: this.baseElement,
        dataHook: DataHooks.SUBMIT_FIRST_NAME,
      });

      return firstName.getText();
    },
    savedDataLastName: () => {
      const lastName = TextTestkit({
        wrapper: this.baseElement,
        dataHook: DataHooks.SUBMIT_LAST_NAME,
      });
      return lastName.getText();
    },
    savedDataColor: () => {
      const favoriteColor = TextTestkit({
        wrapper: this.baseElement,
        dataHook: DataHooks.SUBMIT_FAVORITE_COLOR,
      });

      return favoriteColor.getText();
    },
  };

  when = {
    enterFirstName: (name: string) => {
      const inputFirstName = inputTestkitFactory({
        wrapper: this.baseElement,
        dataHook: DataHooks.FIRST_NAME,
      });

      return inputFirstName.enterText(name);
    },
    enterLastName: (name: string) => {
      const inputLastName = inputTestkitFactory({
        wrapper: this.baseElement,
        dataHook: DataHooks.LAST_NAME,
      });

      return inputLastName.enterText(name);
    },
    selectColor: (color: string) => {
      const dropdownColor = DropdownTestkit({
        wrapper: this.baseElement,
        dataHook: DataHooks.FAVORITE_COLOR,
      });
      if (color === '') {
        return;
      }
      const colorId = getIdByColor(color);

      return dropdownColor.driver.selectOptionById(colorId);
    },
    clearButtonClick: () => {
      const clearButton = ButtonTestkit({
        wrapper: this.baseElement,
        dataHook: DataHooks.CLEAR_BUTTON,
      });

      return clearButton.click();
    },
    submitButtonClick: () => {
      const submitButton = ButtonTestkit({
        wrapper: this.baseElement,
        dataHook: DataHooks.SUBMIT_BUTTON,
      });

      return submitButton.click();
    },
  };
}

export default RTLAppDriver;
