import { useEffect, useState } from "react";
import Rating from "@material-ui/lab/Rating";
import Box from "@material-ui/core/Box";

const QuesRating = ({ difficulty }) => {
  const [rating, setRating] = useState(1);

  useEffect(() => {
    if (difficulty === "hard") setRating(3);
    if (difficulty === "easy") setRating(1);
    if (difficulty === "medium") setRating(2);
  }, [difficulty, rating]);
  return (
    <>
      <Box component="fieldset" mb={3} style={{ borderStyle: "none" }}>
        <Rating name="read-only" value={rating} readOnly />
      </Box>
    </>
  );
};

export default QuesRating;
