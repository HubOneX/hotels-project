import { Box, IconButton } from "@mui/material";
import React, { FC, useState } from "react";
import Image from "mui-image";
import ArrowRightIcon from "@mui//icons-material/ArrowRight";
import ArrowLeftIcon from "@mui//icons-material/ArrowLeft";
import { ImageWithAlt } from "../../../../types/DataTypes";
import colors from "../../../../constants/colors";
import styled from "@emotion/styled";

const PositionedIconButton = styled(IconButton)({
  position: "absolute",
  top: "calc(50% - 25px)",
  zIndex: "100",
  color: colors.white,
});

type Props = {
  images: ImageWithAlt[];
};

const HotelImages: FC<Props> = ({ images }) => {
  const [index, setIndex] = useState<number>(0);

  const handleNextClick = () => {
    index !== images.length - 1 ? setIndex(index + 1) : setIndex(0);
  };

  const handlePreviousClick = () => {
    index !== 0 ? setIndex(index - 1) : setIndex(images.length - 1);
  };

  return (
    <Box sx={{ position: "relative" }}>
      <PositionedIconButton onClick={handlePreviousClick} sx={{ left: "5px" }}>
        <ArrowLeftIcon fontSize="large" />
      </PositionedIconButton>
      <Image
        src={images[index].url}
        alt={images[index].alt}
        duration={400}
        height="150px"
        width="250px"
        fit="cover"
      />
      <PositionedIconButton onClick={handleNextClick} sx={{ right: "5px" }}>
        <ArrowRightIcon fontSize="large" />
      </PositionedIconButton>
    </Box>
  );
};

export default HotelImages;
