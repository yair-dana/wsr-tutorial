import React from 'react';
import { Card, Layout, Cell, Button, Heading, Text } from 'wix-style-react';

function RoleDetails() {
  return (
    <Card>
      <Card.Header
        title="Role details"
        suffix={
          <Button priority="secondary" disabled>
            Edit
          </Button>
        }
      />
      <Card.Divider />
      <Card.Content>
        <Layout>
          <Cell>
            <Heading appearance="H6">OFFICIAL TITLE</Heading>
            <Text>Keyboard annihilator</Text>
          </Cell>
          <Cell>
            <Heading appearance="H6">EXPERIENCE</Heading>
            <Text>It’s over nine thousand</Text>
          </Cell>
        </Layout>
      </Card.Content>
    </Card>
  );
}
export default RoleDetails;
