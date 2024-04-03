import React from 'react';

const Spinner = () => {
  return (
    <div class="d-flex align-items-center justify-content-center bg-white " style={{height: '100vh'}}>
        
    <div class="spinner-border" role="status">
      <span class="sr-only">Loading...</span>
    </div>
  </div>
  );
};

export default Spinner;
