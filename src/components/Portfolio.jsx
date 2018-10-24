import React, { Component } from 'react'
import styled from 'styled-components';
import PortfolioCard from './PortfolioCard'
const PortfolioHeader = styled.h2`
  font-family: var(--font-montserrat);
  font-size: 4.5rem;
  font-weight: 400;
  margin: 0;
  color: var(--yellow);
  align-self: flex-start;
  margin-left: 4.375rem;
  margin-top: 1rem;
  padding-top: 3rem;
  margin-bottom: 2rem;
  @media (max-width: 800px) {
    margin-left: 20px;
    font-size: 3rem;
  }
`;


const portfolioStyle1 = {

}

const portfolioStyle2 = {

}

const portfolioStyle3 = {

}



export default class Portfolio extends Component {
  render() {
    return (
      <div id = "portfolio">
        <PortfolioHeader> portfolio </PortfolioHeader>
        <PortfolioCard onClick = {window.location.replace("https://vibrant-shannon-62f32a.netlify.com/?fbclid=IwAR2ufyBykYe6A4AshT933d0CrNxxphvwHko9xFQwzCr-8TfZ3A7ISjxLNA8")}/>
        <PortfolioCard />
        <PortfolioCard />
      </div>
    )
  }
}
