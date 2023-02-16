import Typography from "@mui/material/Typography";
import React from "react";

const NoHotelsFoundInfo = () => {
  return (
    <Typography
      variant="h4"
      sx={{
        textAlign: "center",
        marginTop: "30px",
        lineHeight: "35px",
      }}
      data-testid="NoHotelsInfo"
    >
      Unfortunatelly, we couldn't find rooms meeting your requirements.
      <br />
      Please change your filters.
    </Typography>
  );
};

export default NoHotelsFoundInfo;
