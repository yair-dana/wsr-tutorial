import React, { useState, useEffect } from 'react';
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

const validator = require('validator');

function App() {
  const [isFormValid, setIsFormValid] = useState(false);
  const [isFormEmpty, setIsFormEmpty] = useState(true);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [submittedData, setSubmittedData] = useState({
    firstname: '',
    lastname: '',
    color: '',
  });
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [colorId, setColorId] = useState('-1');

  useEffect(() => {
    if (!validator.isEmpty(firstName) && !validator.isEmpty(lastName)) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }

    if (
      !validator.isEmpty(firstName) ||
      !validator.isEmpty(lastName) ||
      colorId !== '-1'
    ) {
      setIsFormEmpty(false);
    } else {
      setIsFormEmpty(true);
    }
  }, [firstName, lastName, colorId]);

  const submitForm = () => {
    const color = getColorById(colorId);
    const colorStr = color ? color.value : '';
    setIsFormSubmitted(true);
    const newData = {
      firstname: firstName,
      lastname: lastName,
      color: colorStr,
    };
    setSubmittedData(newData);
    setIsFormSubmitted(true);
  };

  const clearForm = () => {
    setFirstName('');
    setLastName('');
    setColorId('-1');
    setIsFormEmpty(true);
    setIsFormValid(false);
  };

  const breadcrumbItems = [
    { id: 1, value: 'Root Page' },
    { id: 2, value: 'WSR Form' },
  ];

  return (
    <WixStyleReactProvider>
      <Page height="100vh">
        <Page.Header
          title="WSR Form"
          breadcrumbs={<Breadcrumbs items={breadcrumbItems} activeId={2} />}
          actionsBar={
            <ActiveBar
              onSubmit={submitForm}
              onClear={clearForm}
              isFormValid={isFormValid}
              isFormEmpty={isFormEmpty}
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
                  {isFormSubmitted && <SavedData data={submittedData} />}
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
