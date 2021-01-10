import React from "react";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import CodeIcon from "@material-ui/icons/Code";
import FavoriteBorderSharpIcon from "@material-ui/icons/FavoriteBorderSharp";

function Footer() {
  return (
    <Box p={3} style={{ color: "white", background: "black" }}>
      <Box display="flex" justifyContent="center">
        <Typography style={{ display: "flex" }} variant="subtitle1">
          <span style={{marginRight: "5px"}}>
            <CodeIcon />
          </span>
          with
          <span style={{margin: "auto 5px"}}>
            <FavoriteBorderSharpIcon />
          </span>
          by Amaan Iqbal
        </Typography>
      </Box>
    </Box>
  );
}

export default Footer;
