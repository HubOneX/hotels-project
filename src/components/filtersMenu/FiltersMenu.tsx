import styled from "@emotion/styled";
import { Box, Rating } from "@mui/material";
import React, { FC, SyntheticEvent } from "react";
import breakpoints from "../../constants/breakpoints";
import colors from "../../constants/colors";
import { GuestType } from "../../enums/enums";
import { DispatchSetState } from "../../types/GenericTypes";
import { FlexCenteredContainer } from "../utilityComponents/styledComponents";
import GuestsSelection from "./guestsSelection/GuestsSelection";

type Props = {
  rating: number;
  setRating: DispatchSetState<number>;
  adultsCount: number;
  setAdultsCount: DispatchSetState<number>;
  childrenCount: number;
  setChildrenCount: DispatchSetState<number>;
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
    event: SyntheticEvent<Element, Event>,
    newValue: number | null
  ) => {
    if (!newValue) return;
    setRating(newValue);
  };

  return (
    <FlexCenteredContainer
      sx={{
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
    </FlexCenteredContainer>
  );
};

export default FiltersMenu;
