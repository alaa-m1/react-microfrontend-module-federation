import { Box } from "@mui/system";
import { useLocation } from "react-router-dom";
import { StyledLink } from "shared";
import imgSrc from "assets/images/host-remote-apps.png";
const Home = () => {
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
        <StyledLink
          to={"auth"}
          isactive={pathname === "/auth" ? "active" : "inActive"}
          data-testid="AppLayout-link-signout"
        >
          Go to Auth page
        </StyledLink>
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
