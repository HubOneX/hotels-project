import styled from "@emotion/styled";
import { Box, Container, Rating } from "@mui/material";
import React, { FC } from "react";
import breakpoints from "../../constants/breakpoints";
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

const FiltersCard = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${colors.lightGrey};
  border-radius: 8px;
  box-shadow: 0px 8px 12px -8px ${colors.midGrey};
  flex-direction: row;
  width: 600px;
  padding: 10px;
  gap: 22px;
  @media (max-width: ${breakpoints.sm}px) {
    flex-direction: column;
    width: 220px;
    padding: 20px;
    gap: 5px;
  }
`;

const FiltersMenu: FC<Props> = ({
  rating,
  setRating,
  adultsCount,
  setAdultsCount,
  childrenCount,
  setChildrenCount,
}) => {
  const handleOnChange = (
    event: React.SyntheticEvent<Element, Event>,
    newValue: number | null
  ) => {
    if (!newValue) return;
    setRating(newValue);
  };

  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        transform: { xs: "translateY(-85px)", sm: "translateY(-30px)" },
      }}
    >
      <FiltersCard>
        <Rating
          value={rating}
          onChange={handleOnChange}
          data-testid="StarRatingFilter"
          sx={{
            marginBottom: { xs: "2px", sm: 0 },
            marginRight: { xs: 0, sm: "7px" },
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
          isAdditionDisabled={adultsCount === 0}
        />
      </FiltersCard>
    </Container>
  );
};

export default FiltersMenu;
