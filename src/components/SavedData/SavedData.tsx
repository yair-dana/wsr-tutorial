import React from 'react';
import { Heading, Layout, Cell, Text, Card } from 'wix-style-react';
import DataHooks from '../DataHooks';

type SavedDataProps = {
  data: {
    firstname: string;
    lastname: string;
    color: string;
  };
};

function SavedData(props: SavedDataProps) {
  return (
    <Card>
      <Card.Header title="Saved Data" />
      <Card.Divider />
      <Card.Content>
        <Layout>
          <Cell>
            <Heading appearance="H5">FIRST NAME</Heading>
            <Text dataHook={DataHooks.SUBMIT_FIRST_NAME}>
              {props.data.firstname}
            </Text>
          </Cell>
          <Cell>
            <Heading appearance="H5">LAST NAME</Heading>
            <Text dataHook={DataHooks.SUBMIT_LAST_NAME}>
              {props.data.lastname}
            </Text>
          </Cell>
          {props.data.color !== '' && (
            <Cell>
              <Heading appearance="H5">FAVORITE COLOR</Heading>
              <Text dataHook={DataHooks.SUBMIT_FAVORITE_COLOR}>
                {props.data.color}
              </Text>
            </Cell>
          )}
        </Layout>
      </Card.Content>
    </Card>
  );
}
export default SavedData;
