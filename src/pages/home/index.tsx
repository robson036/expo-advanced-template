import { StatusBar } from "expo-status-bar";
import React from "react";

import i18n from "../../lang/i18n";

import * as S from "./styles";

export default function App() {
  return (
    <S.Center>
      <S.HomeText>{i18n.t("hello_world")}</S.HomeText>
      <StatusBar style="auto" />
    </S.Center>
  );
}
