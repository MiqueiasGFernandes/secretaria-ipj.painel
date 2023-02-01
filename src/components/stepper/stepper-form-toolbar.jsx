import React from 'react';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigatePreviousIcon from '@mui/icons-material/NavigateBefore';
import SaveIcon from '@mui/icons-material/Save';

import { Button, SaveButton, Toolbar } from 'react-admin';

function StepperFormToolbar({
  isLastStep, isFirstStep, handleReturnStep, currentStep,
}) {
  return (
    <Toolbar>
      <Button
        startIcon={<NavigatePreviousIcon />}
        disabled={isFirstStep}
        label="Anterior"
        onClick={() => handleReturnStep(currentStep)}
        style={{
          marginRight: '10px',
        }}
      />
      <SaveButton
        icon={(isLastStep) ? <SaveIcon /> : <NavigateNextIcon />}
        label={(isLastStep) ? 'Salvar' : 'Próximo'}
      />
    </Toolbar>
  );
}

export default StepperFormToolbar;
