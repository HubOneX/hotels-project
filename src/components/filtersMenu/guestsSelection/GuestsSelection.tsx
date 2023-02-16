import { Box, IconButton, Typography } from "@mui/material";
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

  const handleAddClick = () => setCurrentCount(currentCount + 1);
  const handleSubtractCLick = () => setCurrentCount(currentCount - 1);

  useEffect(() => {
    setCurrentCount(0);
  }, [isAdditionDisabled]);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        marginLeft: { xs: "12px", sm: 0 },
      }}
    >
      <Typography variant="body2">{guestTypeSubtitle}:</Typography>

      <IconButton onClick={handleAddClick} disabled={isAdditionDisabled}>
        <AddIcon />
      </IconButton>
      <Typography variant="body2">{currentCount}</Typography>
      <IconButton onClick={handleSubtractCLick} disabled={currentCount <= 0}>
        <RemoveIcon />
      </IconButton>
    </Box>
  );
};

export default GuestsSelection;
