import React, { useState } from 'react';
import {
  AddItem,
  Layout,
  Card,
  Cell,
  FormField,
  Input,
  Heading,
  Box,
  Dropdown,
  IconButton,
} from 'wix-style-react';
import DeleteSmall from 'wix-ui-icons-common/DeleteSmall';

function GeneralInfoForm(props: any) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [colorId, setColorId] = useState('-1');
  const colorOptions = [
    { id: '0', value: 'Red' },
    { id: '1', value: 'Blue' },
    { id: '2', value: 'Green' },
    { id: '3', value: 'Yellow' },
    { id: '4', value: 'Pink' },
  ];

  return (
    <Card>
      <Card.Header title="General Info" />
      <Card.Divider />
      <Card.Content>
        <Layout>
          <Cell span={6}>
            <FormField label="First name" required>
              <Input
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </FormField>
          </Cell>
          <Cell span={6}>
            <FormField label="Last name" required>
              <Input
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </FormField>
          </Cell>
        </Layout>
        <Box marginTop="12px" marginBottom="12px">
          <Heading appearance="H5">ADDITIONAL INFO</Heading>
        </Box>
        <Layout>
          <Cell>
            <FormField label="Favorite color">
              <Box verticalAlign="middle" gap="12px">
                <Box direction="vertical" width="100%">
                  <Dropdown
                    placeholder="Choose a color"
                    options={colorOptions}
                    onSelect={(option) => setColorId(option.id as string)}
                    selectedId={colorId}
                  />
                </Box>
                <IconButton disabled priority="secondary">
                  <DeleteSmall />
                </IconButton>
              </Box>
            </FormField>
          </Cell>
          <Cell>
            <AddItem disabled>Add New List Item</AddItem>
          </Cell>
        </Layout>
      </Card.Content>
    </Card>
  );
}
export default GeneralInfoForm;
