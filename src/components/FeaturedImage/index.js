import React from 'react';
import Img from 'gatsby-image';

import Wrapper from './Wrapper';

function FeaturedImage({ sizes }) {
  return (
    <Wrapper className='img-wrapper'>
      <Img className='feature' sizes={sizes} alt="" />
    </Wrapper>
  );
}

export default FeaturedImage;
