import React, { Component } from "react";

import {
  ErrorImageOverlay,
  ErrorImageContainer,
  ErrorImageText
} from "./ErrorBoundaryStyles";

const ErrorComponent = () => (
  <ErrorImageOverlay>
    <ErrorImageContainer imageUrl="https://i.imgur.com/yW2W9SC.png" />
    <ErrorImageText>Sorry this page is broken</ErrorImageText>
  </ErrorImageOverlay>
);

export class ErrorBoundary extends Component {
  constructor() {
    super();
    this.state = {
      hasError: false
    };
  }

  static getDerivedStateFromError(error) {
    // process the error
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    // process the error
    console.error(error);
  }

  render() {
    return this.state.hasError ? <ErrorComponent /> : this.props.children;
  }
}

export default ErrorBoundary;
