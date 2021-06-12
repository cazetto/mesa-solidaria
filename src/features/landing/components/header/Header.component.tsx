import React, { FC } from 'react';
import { Box } from 'force-components';

interface Props {}

const Header: FC<Props> = () => {
  return (
    <Box data-testid="header" height="100px" bg="colorOrange">
      Header
    </Box>
  );
};

export { Header };
