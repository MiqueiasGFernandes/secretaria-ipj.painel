import React from 'react';
import { Button, SaveButton, Toolbar } from 'react-admin';

function StepperFormToolbar({
  isLastStep, isFirstStep, handleReturnStep, currentStep,
}) {
  return (
    <Toolbar>
      <Button
        disabled={isFirstStep}
        label="Anterior"
        onClick={() => handleReturnStep(currentStep - 1)}
        style={{
          marginRight: '10px',
        }}
      />
      <SaveButton
        label={(isLastStep) ? 'Salvar' : 'Próximo'}
      />
    </Toolbar>
  );
}

export default StepperFormToolbar;
