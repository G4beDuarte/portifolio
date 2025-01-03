import { AppBar, MenuItem, styled, Toolbar } from "@mui/material"


const NavBar = () => {

    const StyledToolbar = styled(Toolbar)(()=>({
        display: "flex",
        justifyContent: "space-evenly"
    }))

    return (
      <>
        <AppBar position="absolute">
            <StyledToolbar>
            <MenuItem>Sobre</MenuItem>
            <MenuItem>Skills</MenuItem>
            <MenuItem>Projetos</MenuItem>
            </StyledToolbar>
        </AppBar>
      </>
    )
  }
  
  export default NavBar