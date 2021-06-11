import React, { FC } from 'react';
import { Box } from 'force-components';

interface Props {}

const Comments: FC<Props> = () => {
  return (
    <Box width="100%" data-testid="comments">
      <div
        className="fb-comments"
        data-href="https://mesasolidaria.netlify.app/"
        data-width="100%"
        data-numposts="6"
      ></div>
    </Box>
  );
};

export { Comments };
