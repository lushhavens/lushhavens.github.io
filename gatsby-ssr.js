import React from 'react';

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <link
      key='font-awesome'
      rel='stylesheet'
      href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css'
      integrity='sha512-9uGPDUqjJcHBYTuN7iXUpi5+mA9UM72+jSxHnVnT4Q1A3ZcDJz1oV7/c9whd5mf6TYL5YvwYDxqELZ0aGh1eJQ=='
      crossOrigin='anonymous'
      referrerPolicy='no-referrer'
    />,
  ]);
};
