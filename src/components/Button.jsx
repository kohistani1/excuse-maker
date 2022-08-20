import React from 'react';

function Button({ children, getData }) {
  return (
    <button className='btn ' onClick={() => getData(children)}>
      {children}
    </button>
  );
}

export default Button;
