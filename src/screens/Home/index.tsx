import React from "react";

import { StatusBar } from "react-native";

import { RFValue } from "react-native-responsive-fontsize";

import { Car } from "../../components/Car";

import Logo from "../../assets/logo.svg";

import { Container, Header, HeaderContent, TotalCars } from "./styles";

export function Home() {
  const carData = {
    brand: "AUDI",
    name: "RS 5 Coupé",
    rent: {
      period: "AO DIA",
      price: 120,
    },
    thumbnail:
      "https://www.audi.ca/content/dam/nemo/ca/Models/rs5/rs5-coupe/MY2020/844x476_rs5coupe-min.png",
  };
  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />

      <Header>
        <HeaderContent>
          <Logo width={RFValue(108)} height={RFValue(12)} />
          <TotalCars>Total de 12 carros</TotalCars>
        </HeaderContent>
      </Header>

      <Car data={carData} />
    </Container>
  );
}
