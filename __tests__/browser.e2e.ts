import {
  ButtonTestkit,
  InputTestkit,
  TextTestkit,
  PageHeaderTestkit,
} from 'wix-style-react/dist/testkit/puppeteer';
import DataHooks from '../src/components/DataHooks';

describe('WSR application', () => {
  const Elements: any = {};

  beforeEach(async () => {
    await page.goto(app.getUrl('/'));
    Elements.pageHeader = await PageHeaderTestkit({
      dataHook: DataHooks.PAGE_HEADER,
      page,
    });

    Elements.submitButton = await ButtonTestkit({
      dataHook: DataHooks.SUBMIT_BUTTON,
      page,
    });

    Elements.firstNameInput = await InputTestkit({
      dataHook: DataHooks.FIRST_NAME,
      page,
    });

    Elements.lastNameInput = await InputTestkit({
      dataHook: DataHooks.LAST_NAME,
      page,
    });
  });

  it('should render the title', async () => {
    const title = await Elements.pageHeader.titleText();
    expect(title).toEqual('WSR Form');
  });

  it('should let user click submit just after he fills all required fields', async () => {
    expect(await Elements.submitButton.isButtonDisabled()).toEqual(true);

    await Elements.firstNameInput.enterText('Yair');
    await Elements.lastNameInput.enterText('Dana');

    expect(await Elements.submitButton.isButtonDisabled()).toEqual(false);
  });
});
