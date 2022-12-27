import React from 'react';

function Step({ label, children }) {
  return (
    <>
      <h3>{label}</h3>
      { children }
    </>
  );
}

export default Step;
