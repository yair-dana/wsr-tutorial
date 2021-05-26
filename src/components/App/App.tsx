import React from 'react';
import {
  Layout,
  Cell,
  Card,
  Breadcrumbs,
  WixStyleReactProvider,
  Page,
} from 'wix-style-react';
import ActiveBar from '../ActiveBar/ActiveBar';
import GeneralInfoForm from '../GeneralInfoForm/GeneralInfoForm';
import RoleDetails from "../RoleDetails/RoleDetails";
import SavedData from "../SavedData/SavedData";

function App() {
  const submitForm = () => {};

  const clearForm = () => {};

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
          actionsBar={<ActiveBar onSubmit={submitForm} nClear={clearForm} />}
        />
        <Page.Content>
          <Layout>
            <Cell span={8}>
              <GeneralInfoForm />
            </Cell>
            <Cell span={4}>
              <Layout>
                <Cell>
                  <RoleDetails/>
                </Cell>
                <Cell>
                  <SavedData firstName="yair" lastName="dana" color="red" />
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
