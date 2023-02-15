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
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: colors.lightGrey,
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
        transform: { xs: "translateY(-85px)", sm: "translateY(-30px)" },
      }}
    >
      <FiltersCard
        sx={{
          flexDirection: { xs: "column", sm: "row" },
          width: { xs: "220px", sm: "600px" },
          padding: { xs: "20px", sm: "10px" },
          gap: { xs: "5px", sm: "22px" },
        }}
      >
        <Rating
          value={rating}
          onChange={(_, newValue) => {
            if (!newValue) return;
            setRating(newValue);
          }}
          data-testid="StarRatingFilter"
          sx={{ order: 2, marginTop: { xs: "5px", sm: 0 } }}
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
          isAdditionDisabled={adultsCount === 0}
        />
      </FiltersCard>
    </Container>
  );
};

export default FiltersMenu;
