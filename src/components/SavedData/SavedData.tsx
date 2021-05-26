import React from 'react'
import {Heading, Layout, Cell, Text, Card} from "wix-style-react";

function SavedData(props: any) {
  return(
    <Card>
      <Card.Header title="Saved Data"/>
      <Card.Divider />
      <Card.Content>
        <Layout>
          <Cell>
            <Heading appearance='H5'>FIRST NAME</Heading>
            <Text>{props.firstName}</Text>
          </Cell>
          <Cell>
            <Heading appearance='H5'>LAST NAME</Heading>
            <Text>{props.lastName}</Text>
          </Cell>
          <Cell>
            <Heading appearance='H5'>FAVORITE COLOR</Heading>
            <Text>{props.color}</Text>
          </Cell>
        </Layout>
      </Card.Content>
    </Card>
  );
}
export default SavedData;
