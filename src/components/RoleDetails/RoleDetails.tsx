import React, { useState } from 'react';
import {
  Card,
  Layout,
  Cell,
  Button,
  Heading,
  Text,
  Input,
} from 'wix-style-react';
import DataHooks from '../DataHooks';

function RoleDetails() {
  const [officialTitle, setOfficialTitle] = useState('Keyboard annihilator');
  const [experience, setExperience] = useState('It’s over nine thousand');
  const [isEditMode, setIsEditMode] = useState(false);

  return (
    <Card>
      <Card.Header
        title="Role details"
        suffix={
          <Button
            dataHook={DataHooks.EDIT_DETAILS}
            priority="secondary"
            onClick={() => setIsEditMode((prev) => !prev)}
          >
            {!isEditMode ? 'Edit' : 'Save'}
          </Button>
        }
      />
      <Card.Divider />
      <Card.Content>
        <Layout>
          <Cell>
            <Heading appearance="H6">OFFICIAL TITLE</Heading>
            {isEditMode ? (
              <Input
                dataHook={DataHooks.OFFICIAL_TITLE_INPUT}
                value={officialTitle}
                onChange={(e) => setOfficialTitle(e.target.value)}
              />
            ) : (
              <Text dataHook={DataHooks.OFFICIAL_TITLE_TEXT}>
                {officialTitle}
              </Text>
            )}
          </Cell>
          <Cell>
            <Heading appearance="H6">EXPERIENCE</Heading>
            {isEditMode ? (
              <Input
                dataHook={DataHooks.EXPERIENCE_INPUT}
                value={experience}
                onChange={(e) => setExperience(e.target.value)}
              />
            ) : (
              <Text dataHook={DataHooks.EXPERIENCE_TEXT}>{experience}</Text>
            )}
          </Cell>
        </Layout>
      </Card.Content>
    </Card>
  );
}
export default RoleDetails;
