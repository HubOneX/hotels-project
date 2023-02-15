import { Box, IconButton } from "@mui/material";
import React, { FC, useState } from "react";
import Image from "mui-image";
import ArrowRightIcon from "@mui//icons-material/ArrowRight";
import ArrowLeftIcon from "@mui//icons-material/ArrowLeft";
import { ImageWithAlt } from "../../../../types/DataTypes";
import colors from "../../../../constants/colors";

type Props = {
  images: ImageWithAlt[];
};

const HotelImages: FC<Props> = ({ images }) => {
  const [index, setIndex] = useState<number>(0);

  return (
    <Box sx={{ position: "relative" }}>
      <IconButton
        onClick={() => {
          index !== 0 ? setIndex(index - 1) : setIndex(images.length - 1);
        }}
        sx={{
          position: "absolute",
          top: "calc(50% - 25px)",
          left: "5px",
          zIndex: "100",
          color: colors.white,
        }}
      >
        <ArrowLeftIcon fontSize="large" />
      </IconButton>
      <Image
        src={images[index].url}
        alt={images[index].alt}
        height="150px"
        width="250px"
        fit="cover"
      />
      <IconButton
        onClick={() => {
          index !== images.length - 1 ? setIndex(index + 1) : setIndex(0);
        }}
        sx={{
          position: "absolute",
          top: "calc(50% - 25px)",
          right: "5px",
          zIndex: "100",
          color: colors.white,
        }}
      >
        <ArrowRightIcon fontSize="large" />
      </IconButton>
    </Box>
  );
};

export default HotelImages;
