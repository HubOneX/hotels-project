import { Rating } from "@mui/material";
import React, { FC } from "react";

type Props = {
  starRating: number;
};

const HotelRating: FC<Props> = ({ starRating }) => {
  return <Rating value={starRating} readOnly size="large"/>;
};

export default HotelRating;
