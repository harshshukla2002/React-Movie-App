import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../Redux/store";
import {
  Box,
  Button,
  Flex,
  Heading,
  Input,
  SimpleGrid,
  Skeleton,
  Spinner,
} from "@chakra-ui/react";
import MoviesCard from "./MoviesCard";
import {
  DATA_FAILURE,
  DATA_REQUEST,
  GET_DATA,
  SEARCH_DATA_FAILURE,
} from "../Redux/MovieReducer/actiontype";
import { GetData } from "../Redux/MovieReducer/action";
import { useNavigate } from "react-router-dom";
import { MoviesDataProps } from "../interface";

const Movies = () => {
  const { Movies, Loading, Error } = useSelector((store: RootState) => store);
  const dispatch = useDispatch();
  const [SearchInput, SetSearchInput] = useState<string>("");
  const navigate = useNavigate();
  const [total, setTotal] = useState<string>("");

  const HandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    SetSearchInput(e.target.value);
  };

  const SearchMovie = async () => {
    dispatch({ type: DATA_REQUEST });
    try {
      let res = await GetData(SearchInput);
      console.log(res.Response);
      if (res.Response === "True") {
        dispatch({ type: GET_DATA, payload: res.Search });
        setTotal(res.totalResults);
      } else {
        dispatch({ type: SEARCH_DATA_FAILURE });
        navigate("/not-found");
      }

      SetSearchInput("");
    } catch (error) {
      dispatch({ type: DATA_FAILURE });
      console.log(error);
    }
  };

  return (
    <div style={{ padding: "20px", margin: "10px" }}>
      <Flex direction={["column", "row"]} w="50%" m="auto" mt="10px" mb="10px">
        <Input
          variant={"filled"}
          placeholder="Enter...."
          value={SearchInput}
          onChange={HandleChange}
        />
        <Button colorScheme="purple" onClick={SearchMovie}>
          {Loading ? <Spinner /> : "Search"}
        </Button>
      </Flex>
      <hr />
      {Loading ? (
        <SimpleGrid columns={[1, 2, 3, 4]} gap="10px">
          <Skeleton height="500px" />
          <Skeleton height="500px" />
          <Skeleton height="500px" />
          <Skeleton height="500px" />
          <Skeleton height="500px" />
          <Skeleton height="500px" />
          <Skeleton height="500px" />
          <Skeleton height="500px" />
          <Skeleton height="500px" />
          <Skeleton height="500px" />
          <Skeleton height="500px" />
          <Skeleton height="500px" />
        </SimpleGrid>
      ) : Error ? (
        <Heading color="red">Something Went Wrong....</Heading>
      ) : (
        <>
          {total !== "" && (
            <Heading size={"md"} m="10px">
              Total Search Results : {total}
            </Heading>
          )}
          {Movies.length === 0 ? (
            <Box
              border="1px solid gray"
              w="80%"
              m="auto"
              p="20px"
              textAlign={"center"}
              mt="20px"
            >
              <Heading>Enter Something To Search...</Heading>
            </Box>
          ) : (
            <SimpleGrid columns={[1, 2, 3, 4]} gap="10px" m="10px">
              {Movies?.map((movie: MoviesDataProps) => {
                return <MoviesCard key={Math.random() * 10000} {...movie} />;
              })}
            </SimpleGrid>
          )}
        </>
      )}
    </div>
  );
};

export default Movies;
