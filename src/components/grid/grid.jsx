import React from 'react';

function Grid({
  direction = 'column',
  justifyContent = 'normal',
  width = '100%',
  children,
}) {
  return (
    <div style={{
      display: 'flex',
      flexDirection: direction,
      justifyContent,
      width,
    }}
    >
      {children}
    </div>
  );
}

export default Grid;
