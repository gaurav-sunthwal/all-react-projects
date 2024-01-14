import { Box, HStack, Heading } from "@chakra-ui/react";
import NavBar from "./NavBar";
import { useEffect, useState } from "react";
import RecipeCard from "./RecipeCard";

function RecipesApp() {
  const [data, setData] = useState("");
  const [fav, setFav] = useState([1,2,34,4]);
  async function allRecipe() {
    let recipe = await fetch(
      `https://forkify-api.herokuapp.com/api/v2/recipes?search=pizza`
    );
    let result = await recipe.json();
    console.log(result);
    setData(result);
  }

  useEffect(() => {
    allRecipe();
  }, []);
  function handalFav(item ,index){
    // alert(item.title)
    console.log(index);
  }
  return (
    <>
      <Box zIndex={10} w={"100%"}>
        <NavBar data={fav.map((item)=>{
            return(
                <h1>{item}</h1>
            )
        })} />
      </Box>
      <Box>
        {data &&
          (data.status === "success" ? (
            <>
            <HStack p={2} justifyContent={"space-evenly"} flexWrap={"wrap"}>
                
            
                {
                    data.data.recipes.map((item,index)=>{
                        return(
                            <Box m={2} key={item.publisher}>
                                <RecipeCard img={item.image_url} title={item.title} handalClick={()=>   handalFav()}/>
                            </Box>
                        )
                    })
                }

                </HStack>
            </>
          ) : (
            <>
              <Heading>Not Found!!</Heading>
            </>
          ))}
      </Box>
    </>
  );
}

export default RecipesApp;
