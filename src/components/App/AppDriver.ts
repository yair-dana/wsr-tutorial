import {
  DropdownTestkit,
  InputTestkit,
  ButtonTestkit,
  TextTestkit,
  IconButtonTestkit,
} from 'wix-style-react/dist/testkit';
import DataHooks from '../DataHooks';
import { getIdByColor } from '../colorOptions';

class RTLAppDriver {
  constructor(private baseElement: Element) {}
  is = {
    clearButtonDisabled: async () => {
      const clearButton = ButtonTestkit({
        wrapper: this.baseElement,
        dataHook: DataHooks.CLEAR_BUTTON,
      });

      return clearButton.isButtonDisabled();
    },
    submitButtonDisabled: async () => {
      const submitButton = ButtonTestkit({
        wrapper: this.baseElement,
        dataHook: DataHooks.SUBMIT_BUTTON,
      });

      return submitButton.isButtonDisabled();
    },
    trashIconClickable: async () => {
      const trashIcon = IconButtonTestkit({
        wrapper: this.baseElement,
        dataHook: DataHooks.TRASH_ICON,
      });
      const isDisabled = await trashIcon.isButtonDisabled();
      return !isDisabled;
    },
  };

  get = {
    editSaveButton: async () =>
      ButtonTestkit({
        wrapper: this.baseElement,
        dataHook: DataHooks.EDIT_DETAILS,
      }),

    firstNameValue: async () => {
      const inputFirstName = InputTestkit({
        wrapper: this.baseElement,
        dataHook: DataHooks.FIRST_NAME,
      });
      return inputFirstName.getText();
    },
    lastNameValue: async () => {
      const inputLastName = InputTestkit({
        wrapper: this.baseElement,
        dataHook: DataHooks.LAST_NAME,
      });

      return inputLastName.getText();
    },
    color: async () => {
      const dropdownColor = DropdownTestkit({
        wrapper: this.baseElement,
        dataHook: DataHooks.FAVORITE_COLOR,
      });

      return dropdownColor.inputDriver.getText();
    },

    savedDataFirstName: async () => {
      const firstName = TextTestkit({
        wrapper: this.baseElement,
        dataHook: DataHooks.SUBMIT_FIRST_NAME,
      });

      return firstName.getText();
    },
    savedDataLastName: async () => {
      const lastName = TextTestkit({
        wrapper: this.baseElement,
        dataHook: DataHooks.SUBMIT_LAST_NAME,
      });
      return lastName.getText();
    },
    savedDataColor: async () => {
      const favoriteColor = TextTestkit({
        wrapper: this.baseElement,
        dataHook: DataHooks.SUBMIT_FAVORITE_COLOR,
      });

      return favoriteColor.getText();
    },

    editSaveButtonTitle: async () => {
      const buttonDriver = await this.get.editSaveButton();
      return buttonDriver.getButtonTextContent();
    },

    experienceInput: async () =>
      InputTestkit({
        wrapper: this.baseElement,
        dataHook: DataHooks.EXPERIENCE_INPUT,
      }),

    officialInput: async () =>
      InputTestkit({
        wrapper: this.baseElement,
        dataHook: DataHooks.OFFICIAL_TITLE_INPUT,
      }),

    experienceValue: async () =>
      TextTestkit({
        wrapper: this.baseElement,
        dataHook: DataHooks.EXPERIENCE_TEXT,
      }).getText(),

    officialValue: async () =>
      TextTestkit({
        wrapper: this.baseElement,
        dataHook: DataHooks.OFFICIAL_TITLE_TEXT,
      }).getText(),
  };

  when = {
    enterFirstName: async (name: string) => {
      const inputFirstName = InputTestkit({
        wrapper: this.baseElement,
        dataHook: DataHooks.FIRST_NAME,
      });

      return inputFirstName.enterText(name);
    },
    enterLastName: async (name: string) => {
      const inputLastName = InputTestkit({
        wrapper: this.baseElement,
        dataHook: DataHooks.LAST_NAME,
      });

      return inputLastName.enterText(name);
    },
    selectColor: async (color: string) => {
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
    clearButtonClick: async () => {
      const clearButton = ButtonTestkit({
        wrapper: this.baseElement,
        dataHook: DataHooks.CLEAR_BUTTON,
      });

      return clearButton.click();
    },
    submitButtonClick: async () => {
      const submitButton = ButtonTestkit({
        wrapper: this.baseElement,
        dataHook: DataHooks.SUBMIT_BUTTON,
      });

      return submitButton.click();
    },

    trashIconClick: async () => {
      const trashIcon = IconButtonTestkit({
        wrapper: this.baseElement,
        dataHook: DataHooks.TRASH_ICON,
      });
      return trashIcon.click();
    },

    editSaveRoleButtonClick: async () => {
      const buttonDriver = await this.get.editSaveButton();
      return buttonDriver.click();
    },

    enterExperience: async (value: string) => {
      const inputDriver = await this.get.experienceInput();
      return inputDriver.enterText(value);
    },

    enterOfficialTitle: async (value: string) => {
      const inputDriver = await this.get.officialInput();
      return inputDriver.enterText(value);
    },
  };
}

export default RTLAppDriver;
