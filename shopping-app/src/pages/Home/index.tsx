import { Box } from "@mui/system";
import { Location, useLocation } from "react-router-dom";
import { StyledLink } from "shared";
import imgSrc from "assets/images/host-remote-apps.png";
import { Button } from "@mui/material";
const Home = ({ onNavigate }: { onNavigate?: (path: string) => void }) => {
  const { pathname } = useLocation();
  return (
    <Box m={2}>
      <Box sx={{ "a>span": { color: "#00b" } }}>
        <div>Navigate from Remote App</div>
        <StyledLink
          to={"collection"}
          isactive={pathname === "/collection" ? "active" : "inActive"}
          data-testid="AppLayout-link-signout"
        >
          Go to Collection page
        </StyledLink>
        <br />

        <Button onClick={() => onNavigate?.("/auth")}>Go to Auth page</Button>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center", mt: "30px" }}>
        <img
          src={imgSrc}
          alt="Host and Remote App"
          style={{ width: "70%", boxShadow: "1px 1px 2px 2px #ccc" }}
        />
      </Box>
    </Box>
  );
};

export default Home;
