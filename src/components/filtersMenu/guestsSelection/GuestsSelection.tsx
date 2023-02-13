import { Box, Container, IconButton, Typography } from "@mui/material";
import React, { FC, useEffect } from "react";
import { GuestType } from "../../../enums/enums";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";

type Props = {
  guestType: GuestType;
  currentCount: number;
  setCurrentCount: React.Dispatch<React.SetStateAction<number>>;
  isAdditionDisabled?: boolean;
};

const GuestsSelection: FC<Props> = ({
  guestType,
  currentCount,
  setCurrentCount,
  isAdditionDisabled = false,
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

  useEffect(() => {
    setCurrentCount(0);
  }, [isAdditionDisabled]);

  return (
    <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
      <Typography>{guestTypeSubtitle}:</Typography>

      <IconButton
        onClick={() => setCurrentCount(currentCount + 1)}
        disabled={isAdditionDisabled}
      >
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
