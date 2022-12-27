import React, { useState } from 'react';
import { SimpleForm } from 'react-admin';
import StepperFormToolbar from './stepper-form-toolbar';

function Stepper({ children, member, setMember }) {
  const [step, setStep] = useState(0);
  const totalSteps = children.length;

  const nextStep = (currentStep) => {
    setStep(currentStep + 1);
  };

  const previousStep = (currentStep) => {
    setStep(currentStep - 1);
  };

  return (
    <SimpleForm
      width="100%"
      toolbar={(
        <StepperFormToolbar
          isLastStep={(totalSteps - 1) === step}
          isFirstStep={step === 0}
          handleReturnStep={previousStep}
          currentStep={step}
        />
        )}
      onSubmit={(data) => {
        if (step + 1 <= totalSteps) {
          nextStep(step);
        }
        setMember({ ...data, ...member });
      }}
    >
      {children[step]}
    </SimpleForm>
  );
}

export default Stepper;
