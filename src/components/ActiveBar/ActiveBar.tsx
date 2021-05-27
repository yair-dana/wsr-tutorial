import React from 'react';
import { Box, Button } from 'wix-style-react';
import DataHooks from '../DataHooks';

function ActiveBar(props: any) {
  const disableSubmitButton = !props.isFormValid;
  const disableClearButton = props.isFormEmpty;

  return (
    <Box>
      <Box marginRight="12px">
        <Button
          priority="secondary"
          onClick={props.onClearForm}
          disabled={disableClearButton}
          dataHook={DataHooks.CLEAR_BUTTON}
        >
          Clear
        </Button>
      </Box>
      <Box>
        <Button
          dataHook={DataHooks.SUBMIT_BUTTON}
          onClick={props.onSubmitForm}
          disabled={disableSubmitButton}
        >
          Submit
        </Button>
      </Box>
    </Box>
  );
}
export default ActiveBar;
