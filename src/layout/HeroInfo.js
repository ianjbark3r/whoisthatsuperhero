import React, { Component } from 'react';
import HeroImgDisplay from '../components/HeroImgDisplay';
import HeroDetailsDisplay from '../components/HeroDetailsDisplay';

export default class HeroInfo extends Component {
  render() {
    return (
      <>
        <HeroImgDisplay />
        <HeroDetailsDisplay />
      </>
    )
  }
}
