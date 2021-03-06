import React, { Component } from "react";
import s from "styled-components";

const Container = s.div`
  // margin-left: 200px;
  position: relative;

  display: flex;  
  @media (max-width: 1400px) {
    flex-direction: column;
  }
  @media (max-width: 700px) {
    flex-direction: column;
  }

`;

const What = s.span`
  color: black;
`;
const We = s.span`
  color: var(--pink);
  `;
const Do = s.span`
  color: var(--blue);
`;

const LilguyArm = s.img`
position: absolute;
top: 0;
right: 150px;
@media (max-width: 700px) {
  display: none;
}
`;


const WhatWeDoResp = s.div`
@media (max-width: 700px) {
  flex-direction: column;
  display: flex;
  align-items: center;
}
`;


const ServicesPanel = s.div`
  background-color: #f2f2f2;
  box-shadow: 2px 2px 6px 0 rgba( 0, 0, 0, 0.13), 0 0 25px 5px rgba(0, 0, 0, 0.1);
  flex-grow: 1;
  margin: 200px 200px 50px 100px;
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-columns: 1fr;
  padding: 40px;
  @media (max-width: 1400px) {
    margin: 0px 50px 20px;
    z-index: 10;
  }
  @media (max-width: 700px) {
    margin: auto;
    z-index: 10;
  }
`;

const Service = s.div`
  display: grid;
  grid-template-columns: 100px 1fr;
  padding: 20px;
  grid-column-gap: 50px;
`;

const ServiceImage = s.img`
  width: 100px;
  fill: blue;
`;

const Title = s.h1`
  font-family: var(--font-montserrat);
  font-size: 1.250rem;
  font-weight: 500;
  color: black;
  span {
    color: var(--blue);
  }

`;

var Description = s.p`
  font-family: var(--font-montserrat);
  font-size:  0.9375rem;
`;

class Services extends Component {
  render() {
    return (
      <Container id="services">
        <LilguyArm id="arm" src="/img/lilguyarm.svg" />
        {/* <WhatWeDoResp> */}
        <div className="whatwedo">
          <What>what</What>
          <We>we</We>
          <Do>do</Do>
        </div>
        {/* </WhatWeDoResp> */}
        <ServicesPanel>
          <Service>
            <ServiceImage src="/img/webdesign.svg" />
            <div>
              <Title>
                <span>Awesome</span> Web Design
              </Title>
              <Description>
                Fast, modern, responsive websites. From landing pages to fully
                fledged web applications
              </Description>
            </div>
          </Service>
          <Service>
            <ServiceImage src="/img/ecomm.svg" />
            <div>
              <Title>
                <span>Easy to use </span>E-commerces
              </Title>
              <Description>
                Fast, modern, responsive websites. From landing pages to fully
                fledged web applications
              </Description>
            </div>
          </Service>
          <Service>
            <ServiceImage src="/img/logodesign.svg" />
            <div>
              <Title>
                <span>Unique </span>Branding Identity
              </Title>
              <Description>
                Fast, modern, responsive websites. From landing pages to fully
                fledged web applications
              </Description>
            </div>
          </Service>
        </ServicesPanel>
      </Container>
    );
  }
}

export default Services;
