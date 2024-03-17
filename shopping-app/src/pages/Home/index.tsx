import { Box } from "@mui/system";
import { useLocation } from "react-router-dom";
import { StyledLink } from "shared";

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
    </Box>
  );
};

export default Home;
