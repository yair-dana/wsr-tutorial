import React, { Dispatch, SetStateAction } from 'react';
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
import { colorOptions } from '../colorOptions';
import DataHooks from '../DataHooks';

type FormProps = {
  onFirstNameChange: Dispatch<SetStateAction<string>>;
  onLastNameChange: Dispatch<SetStateAction<string>>;
  onColorSelect: Dispatch<SetStateAction<string | undefined>>;
  firstName: string;
  lastName: string;
  colorId: string | undefined;
};

function GeneralInfoForm(props: FormProps) {
  return (
    <Card>
      <Card.Header title="General Info" />
      <Card.Divider />
      <Card.Content>
        <Layout>
          <Cell span={6}>
            <FormField label="First name" required>
              <Input
                dataHook={DataHooks.FIRST_NAME}
                value={props.firstName}
                onChange={(e) => props.onFirstNameChange(e.target.value)}
              />
            </FormField>
          </Cell>
          <Cell span={6}>
            <FormField label="Last name" required>
              <Input
                dataHook={DataHooks.LAST_NAME}
                value={props.lastName}
                onChange={(e) => props.onLastNameChange(e.target.value)}
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
                    dataHook={DataHooks.FAVORITE_COLOR}
                    placeholder="Choose a color"
                    options={colorOptions}
                    onSelect={(option) =>
                      props.onColorSelect(option.id as string)
                    }
                    selectedId={props.colorId}
                  />
                </Box>
                <IconButton
                  disabled={!props.colorId}
                  dataHook={DataHooks.TRASH_ICON}
                  priority="secondary"
                  onClick={() => props.onColorSelect(undefined)}
                >
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
