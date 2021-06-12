import React, { FC } from 'react';
import { Box } from 'force-components';

interface Props {}

const Footer: FC<Props> = () => {
  return (
    <Box data-testid="footer" width="100%" height="100px" bg="colorGray100">
      <footer className="site-footer">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-6">
              <h6>About</h6>
            </div>
          </div>
        </div>
      </footer>
    </Box>
  );
};

export { Footer };

/* <Box display="flex" flexDirection="row" justifyContent="flex-end">
  <div
    className="fb-like"
    data-href="https://www.facebook.com/mesaSolidariaTiete"
    data-width=""
    data-layout="standard"
    data-action="like"
    data-size="small"
    data-share="true"
  ></div>
</Box>; */
