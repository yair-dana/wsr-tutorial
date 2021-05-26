import React from 'react';
import { Box, Button } from 'wix-style-react';

function ActiveBar(props: any) {
  const disableSubmitButton = !props.isFormValid;
  const disableClearButton = props.isFormEmpty;

  return (
    <Box>
      <Box marginRight="12px">
        <Button
          priority="secondary"
          onClick={props.onClear}
          disabled={disableClearButton}
        >
          Clear
        </Button>
      </Box>
      <Box>
        <Button onClick={props.onSubmit} disabled={disableSubmitButton}>
          Submit
        </Button>
      </Box>
    </Box>
  );
}
export default ActiveBar;
