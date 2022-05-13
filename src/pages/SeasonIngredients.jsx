import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Box, Button, Divider } from "@mui/material";
import IngredientCard from "../components/IngredientCard";
import { RecipeContext } from "../contexts/RecipeContext";

function SeasonIngredients() {
  const [results, setResults] = useState([]);
  const [seasonal, setSeasonal] = useState([]);
  const [currentIngredients, setCurrentIngredients] = useState([]);
  const [queryList, setQueryList] = useState([]);
  const { recipes, setRecipes } = useContext(RecipeContext);
  const [recipesLoaded, setRecipesLoaded] = useState(false);
  let navigate = useNavigate();

  const clickSeasonal = (e) => {
    const ingredientIndex = e.target.getAttribute("id");
    if (!currentIngredients.find((element) => element.id == ingredientIndex)) {
      console.log(ingredientIndex);
      const item = results.find((element) => element.id == ingredientIndex);
      console.log(item);
      setCurrentIngredients((prev) => {
        return [...prev, item];
      });
      setQueryList((prev) => {
        return [...prev, item.name];
      });
      console.log(queryList);
    } else {
      const tempArray = [...currentIngredients];
      const tempIndex = tempArray.findIndex(
        (element) => element.id == ingredientIndex
      );
      tempArray.splice(tempIndex, 1);
      setCurrentIngredients(tempArray);
      const tempArray2 = [...queryList];
      const tempIndex2 = tempArray2.findIndex(
        (element) => element.id == ingredientIndex
      );
      tempArray2.splice(tempIndex2, 1);
      setQueryList(tempArray2);
    }
  };

  const clickCurrent = (el) => {
    const ingredientIndex = el.target.getAttribute("id");
    const tempArray = [...currentIngredients];
    const tempIndex = tempArray.findIndex(
      (element) => element.id == ingredientIndex
    );
    tempArray.splice(tempIndex, 1);
    setCurrentIngredients(tempArray);
    const tempArray2 = [...queryList];
    const tempIndex2 = tempArray2.findIndex(
      (element) => element.id == ingredientIndex
    );
    tempArray2.splice(tempIndex2, 1);
    setQueryList(tempArray2);
    console.log(queryList);
    const thisDiv = document.getElementById(ingredientIndex).firstChild;
    console.log(thisDiv);
    // if (thisDiv.classList.remove)
    // thisDiv.classList
  };

  const clickSearch = () => {
    const searchTerm = queryList.toString().replace(/,/g, "%26");
    console.log(searchTerm);
    axios
      .get(
        `https://edamam-recipe-search.p.rapidapi.com/search?q=${searchTerm}`,
        {
          headers: {
            "X-RapidAPI-Host": "edamam-recipe-search.p.rapidapi.com",
            "X-RapidAPI-Key": "7bc5264ffemsh61b3494612049efp18b2c0jsnab8c5ef296f4",
          },
        }
      )
      .then((response) => {
        setRecipes(response.data.hits);
        setRecipesLoaded(true);
        navigate("./recipes", { replace: true });
      });
  };

  useEffect(() => {
    axios
      .get("http://localhost:5002/fruits")
      .then((response) => {
        //console.log(response.data);
        setResults((prev) => {
          return [...prev, ...response.data];
        });
        console.log(results);
        const d = new Date();
        const currentMonth = d.getMonth();
        console.log(currentMonth);
        response.data.forEach((item) => {
          if (item.availability.includes(currentMonth)) {
            setSeasonal((prev) => {
              return [...prev, item];
            });
          }
        });
      })
      .catch((err) => console.error(err));
    axios
      .get("http://localhost:5002/nuts")
      .then((response) => {
        //console.log(response.data);
        setResults((prev) => {
          return [...prev, ...response.data];
        });
        console.log(results);
        const d = new Date();
        const currentMonth = d.getMonth();
        console.log(currentMonth);
        response.data.forEach((item) => {
          if (item.availability.includes(currentMonth)) {
            setSeasonal((prev) => {
              return [...prev, item];
            });
          }
        });
      })
      .catch((err) => console.error(err));
    axios
      .get("http://localhost:5002/vegetables")
      .then((response) => {
        //console.log(response.data);
        setResults((prev) => {
          return [...prev, ...response.data];
        });
        console.log(results);
        const d = new Date();
        const currentMonth = d.getMonth();
        console.log(currentMonth);
        response.data.forEach((item) => {
          if (item.availability.includes(currentMonth)) {
            setSeasonal((prev) => {
              return [...prev, item];
            });
          }
        });
      })
      .catch((err) => console.error(err));
  }, []);

  const selectedIngredientsBoxStyle = {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "10px",
    height: "20vh",
    width: "90vw",
    border: "2px solid grey",
    borderRadius: "5px",
    backgroundColor: "light-grey",
    marginTop: "1rem",
    marginBottom: "1rem",
    paddingBottom: "1rem",
  };

  const allIngredientsBoxStyle = {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "10px",
    height: "auto",
    width: "90vw",
    border: "2px solid grey",
    borderRadius: "5px",
    backgroundColor: "light-grey",
    marginTop: "1rem",
    marginBottom: "1rem",
    paddingBottom: "1rem",
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: "10px",
      }}
    >
      {/* BOX FOR SELECTED INGREDIENTS */}
      <Box sx={selectedIngredientsBoxStyle}>
        {currentIngredients.map((e) => (
          <div onClick={clickCurrent} key={e.id} id={e.id}>
            <IngredientCard name={e.name} id={e.id} />
          </div>
        ))}
      </Box>
      <Button
        sx={{ width: "150px", borderRadius: "20px" }}
        variant="contained"
        onClick={clickSearch}
      >
        FIND RECIPES
      </Button>
      <Divider variant="middle" />
      {/* BOX FOR AVAILABLE INGREDIENTS OF THIS SEASON*/}
      <Box sx={allIngredientsBoxStyle}>
        {seasonal.map((e) => (
          <div onClick={clickSeasonal} key={e.id} id={e.id}>
            <IngredientCard name={e.name} id={e.id} />
          </div>
        ))}
      </Box>
    </div>
  );
}
export default SeasonIngredients;
