import DataHooks from '../DataHooks';

const validator = require('validator');

import './App.scss';
import React, { useState, useCallback } from 'react';
import {
  Layout,
  Cell,
  Breadcrumbs,
  WixStyleReactProvider,
  Page,
  FontUpgrade,
} from 'wix-style-react';
import ActiveBar from '../ActiveBar/ActiveBar';
import GeneralInfoForm from '../GeneralInfoForm/GeneralInfoForm';
import RoleDetails from '../RoleDetails/RoleDetails';
import SavedData from '../SavedData/SavedData';
import { getColorById } from '../colorOptions';
import { BreadcrumbsItem } from 'wix-style-react/dist/es/src/Breadcrumbs';

const initialFormData = { firstname: '', lastname: '', color: '' };

function App() {
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [colorId, setColorId] = useState<string | undefined>(undefined);
  const [submittedData, setSubmittedData] = useState(initialFormData);

  const isFormValid = useCallback(() => {
    return !validator.isEmpty(firstName) && !validator.isEmpty(lastName);
  }, [firstName, lastName]);

  const isFormEmpty = useCallback(() => {
    return (
      validator.isEmpty(firstName) &&
      validator.isEmpty(lastName) &&
      colorId === undefined
    );
  }, [firstName, lastName, colorId]);

  const submitForm = () => {
    const color = getColorById(colorId);
    const newData = {
      firstname: firstName,
      lastname: lastName,
      color,
    };
    setSubmittedData(newData);
  };

  const clearForm = () => {
    setFirstName('');
    setLastName('');
    setColorId(undefined);
  };

  const breadcrumbItems: BreadcrumbsItem[] = [
    { id: 1, value: 'Root Page' },
    { id: 2, value: 'WSR Form' },
  ];

  return (
    <WixStyleReactProvider features={{ reducedSpacingAndImprovedLayout: true }}>
      <FontUpgrade>
        <Page height="100vh">
          <Page.Header
            dataHook={DataHooks.PAGE_HEADER}
            title="WSR Form"
            breadcrumbs={<Breadcrumbs items={breadcrumbItems} activeId={2} />}
            actionsBar={
              <ActiveBar
                onSubmitForm={submitForm}
                onClearForm={clearForm}
                isFormValid={isFormValid()}
                isFormEmpty={isFormEmpty()}
              />
            }
          />
          <Page.Content>
            <Layout>
              <Cell span={8}>
                <GeneralInfoForm
                  onFirstNameChange={setFirstName}
                  onLastNameChange={setLastName}
                  onColorSelect={setColorId}
                  firstName={firstName}
                  lastName={lastName}
                  colorId={colorId}
                />
              </Cell>
              <Cell span={4}>
                <Layout>
                  <Cell>
                    <RoleDetails />
                  </Cell>
                  <Cell>
                    {submittedData !== initialFormData && (
                      <SavedData data={submittedData} />
                    )}
                  </Cell>
                </Layout>
              </Cell>
            </Layout>
          </Page.Content>
        </Page>
      </FontUpgrade>
    </WixStyleReactProvider>
  );
}
export default App;
