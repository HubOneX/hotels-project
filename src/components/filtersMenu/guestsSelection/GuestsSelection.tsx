import { Box, Container, IconButton, Typography } from "@mui/material";
import React, { FC } from "react";
import { GuestType } from "../../../enums/enums";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";

type Props = {
  guestType: GuestType;
  currentCount: number;
  setCurrentCount: React.Dispatch<React.SetStateAction<number>>;
};

const GuestsSelection: FC<Props> = ({
  guestType,
  currentCount,
  setCurrentCount,
}) => {
  const getGuestTypeSubtitle = (guestType: GuestType) => {
    switch (guestType) {
      case 0:
        return "Adults";
      case 1:
        return "Children";
    }
  };

  const guestTypeSubtitle = getGuestTypeSubtitle(guestType);

  return (
    <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
      <Typography>{guestTypeSubtitle}:</Typography>

      <IconButton onClick={() => setCurrentCount(currentCount + 1)}>
        <AddIcon />
      </IconButton>
      <Typography>{currentCount}</Typography>
      <IconButton
        disabled={currentCount <= 0}
        onClick={() => setCurrentCount(currentCount - 1)}
      >
        <RemoveIcon />
      </IconButton>
    </Box>
  );
};

export default GuestsSelection;
