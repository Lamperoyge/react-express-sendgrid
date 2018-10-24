import React, { Component } from 'react'
import styled from 'styled-components';

const CardContainer = styled.div`
    margin-top: 20px;
    position: relative;
    left: 15%;
    width: 70%;
    height: 37vh;
`
export default class PortfolioCard extends Component {
  render() {
    return (
        <CardContainer />
    )
  }
}
