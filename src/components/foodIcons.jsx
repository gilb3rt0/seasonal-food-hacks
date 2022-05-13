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
    apples: Apple,
    artichokes: Artichoke,
    chestnuts: Chestnut,
    kale: Kale,
    pears: Pear,
    salsify: Salsify,
    asparagus: Asparagus,
    cucumbers: Cucumber,
    lambsLettuce: LabsLettuce,
    peas: Peas,
    spinach: Spinach,
    blackberries: Blackberry,
    curlyEndive: CurlyEndive,
    leek: Leek,
    pointedCabbage: PointedCabbage,
    apricots: StoneFruit,
    peaches: StoneFruit,
    mirabellePlums: StoneFruit,
    nectarines: StoneFruit,
    plums: StoneFruit,
    cranberries: Currants,
    redCurrants: Currants,
    blackCurrants: Currants,
    blueBerries: Blueberries,
    currants: Currants,
    lettuce: Lettuce,
    pumpkins: Pumpkin,
    strawberries: Strawberry,
    broccoli: Broccoli,
    endiveSalad: EndiveSalad,
    lolloRosso: LolloRosso,
    quitten: Quitte,
    tomatos: Tomato,
    carrots: Carrot,
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
    hazelnuts: Hazelnut,
    onions: Onion,
    redRadish: RedRadish,
    zucchinis: Zucchini,
    cherries: Cherry,
    icebergSalad: IcebergSalad,
    paprikas: Paprika,
    raspberries: Raspberry,
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
