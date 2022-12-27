import React, { useState } from 'react';
import { SimpleForm, useRedirect } from 'react-admin';
import StepperFormToolbar from './stepper-form-toolbar';
import dataProviderService from '../../services/data-provider';

function Stepper({ children, member, setMember }) {
  const [step, setStep] = useState(0);
  const redirect = useRedirect();
  const totalSteps = children.length - 1;

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
          isLastStep={totalSteps === step}
          isFirstStep={step === 0}
          handleReturnStep={previousStep}
          currentStep={step}
        />
        )}
      onSubmit={async (data) => {
        if (step + 1 <= totalSteps) {
          setMember({ ...data, ...member });
          nextStep(step);
        } else {
          setMember({ ...data, ...member });
          await dataProviderService.create('member', member);
          redirect('/');
        }
      }}
    >
      {children[step]}
    </SimpleForm>
  );
}

export default Stepper;
