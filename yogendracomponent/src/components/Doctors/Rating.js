import React from "react";
import { Box, Flex, Icon, useColorModeValue } from "@chakra-ui/react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

const StarRating = ({ rating }) => {
    console.log(rating)
  // Calculate the number of full stars
  const fullStars = Math.floor(rating);
  // Check if the rating has a half star
  const hasHalfStar = rating % 1 !== 0;

  // Create an array of stars to display
  const stars = [];
  for (let i = 0; i < fullStars; i++) {
    stars.push(<Icon as={FaStar} key={i} color="yellow.500" />);
  }
  if (hasHalfStar) {
    stars.push(<Icon as={FaStarHalfAlt} key="half" color="yellow.500" />);
  }

  // Calculate the number of empty stars to display
  const emptyStars = 5 - stars.length;

  for (let i = 0; i < emptyStars; i++) {
    stars.push(<Icon as={FaStar} key={`empty-${i}`} color="gray.300" />);
  }

  // Set the background color based on the color mode
  const bg = useColorModeValue("white", "gray.800");

  return (
    <Flex align="center">
      {stars.map((star) => (
        <Box mx={1} key={star.key}>
          {star}
        </Box>
      ))}
      <Box ml={2} bg={bg} p={1} borderRadius="md">
        <Box fontSize="sm" fontWeight="medium">{`${rating}/5`}</Box>
      </Box>
    </Flex>
  );
};

export default StarRating;
