import React from 'react';
import {CustomButtonContainer} from './custom-button.jsx';

const CustomButton = ({children, ...props}) => (
<CustomButtonContainer {...props}>
    {children}
  </CustomButtonContainer>
)

export default CustomButton;
