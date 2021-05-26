import React from 'react';
import { Box, Button } from 'wix-style-react';

function ActiveBar(props: any) {
  return (
    <Box>
      <Box marginRight="12px">
        <Button skin="light">Clear</Button>
      </Box>
      <Box>
        <Button>Submit</Button>
      </Box>
    </Box>
  );
}
export default ActiveBar;
