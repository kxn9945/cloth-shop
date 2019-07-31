import React from 'react'

import {ErrorImageOverlay, ErrorImageContainer, ErrorImageText} from './errorBoundaryStyle';

class ErrorBoundary extends React.Component {
  constructor(){
    super();

    this.state = {
      hasErrored: false
    };
  }

  static getDerivedStateFromError(error) {
    return {hasErrored: true};
  }

  componentDidCatch(error, info){
    console.log(error);
  }

  render() {
    if(this.state.hasErrored){
      return (
        <ErrorImageOverlay>
          <ErrorImageContainer imageUrl='https://i.imgur.com/O0DCcQy.png'>
            <ErrorImageText>Sorry the page is not working</ErrorImageText>
          </ErrorImageContainer>
        </ErrorImageOverlay>
      )
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
