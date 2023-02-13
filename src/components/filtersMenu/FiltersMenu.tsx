import styled from "@emotion/styled";
import { Box, Container, Rating } from "@mui/material";
import React, { FC } from "react";
import colors from "../../constants/colors";
import { GuestType } from "../../enums/enums";
import GuestsSelection from "./guestsSelection/GuestsSelection";

type Props = {
  rating: number;
  setRating: React.Dispatch<React.SetStateAction<number>>;
  adultsCount: number;
  setAdultsCount: React.Dispatch<React.SetStateAction<number>>;
  childrenCount: number;
  setChildrenCount: React.Dispatch<React.SetStateAction<number>>;
};

const FiltersCard = styled(Box)({
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  gap: "22px",
  padding: "10px",
  backgroundColor: colors.lightGrey,
  width: "600px",
  borderRadius: "8px",
  boxShadow: `0px 8px 12px -8px ${colors.midGrey}`,
});

const FiltersMenu: FC<Props> = ({
  rating,
  setRating,
  adultsCount,
  setAdultsCount,
  childrenCount,
  setChildrenCount,
}) => {
  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        transform: "translateY(-30px)",
      }}
    >
      <FiltersCard>
        <Rating
          value={rating}
          onChange={(_, newValue) => {
            if (!newValue) return;
            setRating(newValue);
          }}
        />
        <GuestsSelection
          guestType={GuestType.Adult}
          currentCount={adultsCount}
          setCurrentCount={setAdultsCount}
        />
        <GuestsSelection
          guestType={GuestType.Child}
          currentCount={childrenCount}
          setCurrentCount={setChildrenCount}
        />
      </FiltersCard>
    </Container>
  );
};

export default FiltersMenu;
