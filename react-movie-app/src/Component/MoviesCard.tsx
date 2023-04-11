import React from "react";
import { MoviesDataProps } from "../interface";
import { Card, CardBody, Heading, Image, Stack, Text } from "@chakra-ui/react";

const MoviesCard = (movie: MoviesDataProps) => {
  console.log(movie);
  return (
    <Card maxW="sm">
      <CardBody>
        <Image src={movie.Poster} alt={movie.Title} borderRadius="lg" />
        <Stack mt="6" spacing="3">
          <Heading size="md">Living room Sofa</Heading>
          <Text>Type : {movie.Type}</Text>
          <Text color="blue.600" fontSize="2xl">
            Release Year : {movie.Year}
          </Text>
        </Stack>
      </CardBody>
    </Card>
  );
};

export default MoviesCard;
