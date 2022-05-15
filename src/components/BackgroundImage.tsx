import React from 'react';
import { Box } from '@mui/material';

const BackgroundImage: React.FunctionComponent = () => {
  return (
    <Box
      position="absolute"
      height="50%"
      width="100%"
      zIndex={0}
      bgcolor="yellow"
      sx={{
        // Hope you don't load this from a nested path...
        backgroundImage: `url(/corona.jpg)`,
        backgroundSize: 'cover',
      }}
    />
  );
};

export default BackgroundImage;
