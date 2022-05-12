import React from "react";

import {
    Apple,
    Raspberry,
    Artichoke,
    Asparagus,
    Chestnut,
    Kale,
    Pear,
    Salsify,
    Cucumber,
    LabsLettuce,
    Peas,
    Spinach,
    Blackberry,
    CurlyEndive,
    Leek,
    PointedCabbage,
    StoneFruit,
    Blueberries,
    Currants,
    Lettuce,
    Pumpkin,
    Strawberry,
    Broccoli,
    EndiveSalad,
    LolloRosso,
    Quitte,
    Tomato,
    Carrot,
    Fennel,
    Mangold,
    Raddicchio,
    WhiteCabbage,
    Cauliflower,
    Grapes,
    NapaCabbage,
    RedCabbage,
    Witloof,
    Celery,
    Hazelnut,
    Onion,
    RedRadish,
    Zucchini,
    Cherry,
    IcebergSalad,
    Paprika,
    Rucula,
  } from "./foodiconsSVG/index.js";
  
  function FoodIcons() {
    const IconList = {
      apple: Apple,
      artichoke: Artichoke,
      chestnut: Chestnut,
      kale: Kale,
      pear: Pear,
      salsify: Salsify,
      asparagus: Asparagus,
      cucumber: Cucumber,
      lambsLettuce: LabsLettuce,
      peas: Peas,
      spinach: Spinach,
      blackberry: Blackberry,
      curlyEndive: CurlyEndive,
      leek: Leek,
      pointedCabbage: PointedCabbage,
      stoneFruit: StoneFruit,
      blueBerries: Blueberries,
      currants: Currants,
      lettuce: Lettuce,
      pumpkin: Pumpkin,
      strawberry: Strawberry,
      Broccoli: Broccoli,
      endiveSalad: EndiveSalad,
      lolloRosso: LolloRosso,
      quitte: Quitte,
      tomato: Tomato,
      carrot: Carrot,
      fennel: Fennel,
      mangold: Mangold,
      raddicchio: Raddicchio,
      whiteCabbage: WhiteCabbage,
      cauliflower: Cauliflower,
      grapes: Grapes,
      nappaCabbage: NapaCabbage,
      redCabbage: RedCabbage,
      witloof: Witloof,
      celery: Celery,
      hazelnut: Hazelnut,
      onion: Onion,
      redRadish: RedRadish,
      zucchini: Zucchini,
      cherry: Cherry,
      icebergSalad: IcebergSalad,
      paprika: Paprika,
      raspberry: Raspberry,
      rucula: Rucula,
    };
    /* IconList.map((icon) => {
      console.log(icon);
    }); */
    const iconArr = [];
    for (const icon in IconList) {
      iconArr.push(icon);
    }
    return (
      <div>
        {iconArr.map((icon, i) => {
          return React.createElement(IconList[icon], { key: i }, null);
        })}
      </div>
    );
  }
  
  export default FoodIcons;