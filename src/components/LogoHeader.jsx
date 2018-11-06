import React, { Component } from "react";
import { findDOMNode } from "react-dom";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Logo = styled(Link)`
  position: fixed;
  height: 74px;
  transition: all 0.3s ease-out;
  background-color: var(--darkBlue);
  &.fixed {
    z-index: 1000;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.12);
    div {
      @media (max-width: 800px) {
        padding: 20px;
      }
    }
  }
`;

const Wrapper = styled.div`
  transition: all 0.3s ease-out;
  padding: 20px 0 20px 2.225rem;
  z-index: 2;
  width: 100vw;
  margin-top: auto;
`;

const Gradient = styled.span`
  // font-family: var(--font-montserrat);
  font-weight: lighter;
  font-size: 1.5rem;
  color: var(--blue);
  font-family: 'Quicksand', sans-serif;
  color: #FEA700;
  -webkit-background-clip: text;
  margin-left: 30px;
  position: absolute;
  left: 10%;
  top: 55%;
  @media (max-width: 1000px) {
    font-size: 1rem;
    left: 11%;
    top: 70%;
  }
`;

const LogoSVG = styled.img`
  height: 34px;
  @media (max-width: 800px) {
    padding-left: 0px;
    height: 22px;
  }
`;

const Align = styled.span`
  display: flex;
  align-items: center;
  @media (max-width: 700px) {
  }
`;

class LogoHeader extends Component {
  render() {
    return (
      <Logo to="/" className={this.props.navBarFixed ? "fixed" : ""}>
        <Wrapper
          style={{
            backgroundColor: `rgb(${Math.floor(
              245 + this.props.scrollTop / 5
            )}, ${Math.floor(245 + this.props.scrollTop / 5)}, ${Math.floor(
              245 + this.props.scrollTop / 5
            )})`
          }}
        >
          <Align>
            <LogoSVG src="/img/logoViral.png" alt=" Logo" />
            {/* <Gradient>::we will make you <span>viral</span></Gradient> */}
          </Align>
        </Wrapper>
      </Logo>
    );
  }
}

export default LogoHeader;
