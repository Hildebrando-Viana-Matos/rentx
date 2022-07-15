import React from "react";

import { BackButton } from "../../components/BackButton";
import { ImageSlider } from "../../components/ImageSlider";

import {
  Container,
  Header,
  CarImages,
  Content,
  Details,
  Description,
  Brand,
  Name,
  Rent,
  Period,
  Price,
  About,
} from "./styles";

export function CarDetails() {
  return (
    <Container>
      <Header>
        <BackButton onPress={() => {}} />
      </Header>

      <CarImages>
        <ImageSlider
          imagesUrl={[
            "https://www.audi.ca/content/dam/nemo/ca/Models/rs5/rs5-coupe/MY2020/844x476_rs5coupe-min.png",
          ]}
        />
      </CarImages>

      <Content>
        <Details>
          <Description>
            <Brand>Lamborghini</Brand>
            <Name>Huracan</Name>
          </Description>

          <Rent>
            <Period>Ao dia</Period>
            <Price>R$ 580</Price>
          </Rent>
        </Details>

        <About>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam
          corporis, dicta, nulla minima harum non, nihil odit quis deserunt
          laudantium quae exercitationem inventore illum doloribus itaque
          aperiam quasi temporibus qui.
        </About>
      </Content>
    </Container>
  );
}
