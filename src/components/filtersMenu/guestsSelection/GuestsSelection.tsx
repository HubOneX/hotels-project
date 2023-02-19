import { IconButton, Typography } from "@mui/material";
import React, { FC, useEffect } from "react";
import { GuestType } from "../../../enums/enums";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import { DispatchSetState } from "../../../types/GenericTypes";
import { FlexCenterAlignedBox } from "../../utilityComponents/styledComponents";

type Props = {
  guestType: GuestType;
  currentCount: number;
  setCurrentCount: DispatchSetState<number>;
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
    <FlexCenterAlignedBox
      sx={{
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
    </FlexCenterAlignedBox>
  );
};

export default GuestsSelection;
