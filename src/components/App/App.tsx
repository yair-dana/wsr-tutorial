const validator = require('validator');

import React, { useState, useCallback } from 'react';
import {
  Layout,
  Cell,
  Breadcrumbs,
  WixStyleReactProvider,
  Page,
} from 'wix-style-react';
import ActiveBar from '../ActiveBar/ActiveBar';
import GeneralInfoForm from '../GeneralInfoForm/GeneralInfoForm';
import RoleDetails from '../RoleDetails/RoleDetails';
import SavedData from '../SavedData/SavedData';
import { getColorById } from '../colorOptions';

const initData = { firstname: '', lastname: '', color: '' };

function App() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [colorId, setColorId] = useState('-1');
  const [submittedData, setSubmittedData] = useState(initData);

  const isFormValid = useCallback(() => {
    return !validator.isEmpty(firstName) && !validator.isEmpty(lastName);
  }, [firstName, lastName]);

  const isFormEmpty = useCallback(() => {
    return (
      validator.isEmpty(firstName) &&
      validator.isEmpty(lastName) &&
      colorId === '-1'
    );
  }, [firstName, lastName, colorId]);

  const submitForm = () => {
    const color = getColorById(colorId);
    const colorStr = color ? color.value : '';
    const newData = {
      firstname: firstName,
      lastname: lastName,
      color: colorStr,
    };
    setSubmittedData(newData);
  };

  const clearForm = () => {
    setFirstName('');
    setLastName('');
    setColorId('-1');
  };

  const breadcrumbItems = [
    { id: 1, value: 'Root Page' },
    { id: 2, value: 'WSR Form' },
  ];

  return (
    <WixStyleReactProvider
      features={{ reducedSpacingAndImprovedLayout: false }}
    >
      <Page height="100vh">
        <Page.Header
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
                  {submittedData !== initData && (
                    <SavedData data={submittedData} />
                  )}
                </Cell>
              </Layout>
            </Cell>
          </Layout>
        </Page.Content>
      </Page>
    </WixStyleReactProvider>
  );
}
export default App;
