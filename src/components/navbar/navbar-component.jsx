import { AppBar, Avatar, Badge, Box, InputBase, Menu, MenuItem, styled, Toolbar, Typography } from '@mui/material'
//icons
import ApiIcon from '@mui/icons-material/Api';
import { Mail, Notifications } from '@mui/icons-material';

//image
import calvin from "../../assets/images/calvin.ico"
import { useState } from 'react';

//style
const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between"
})


const SearchBar = styled("div")(({theme}) => ({
  backgroundColor: "#fff",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%"
}))

const IconsBar = styled(Box)(({theme}) => ({
  // backgroundColor: "#fff",
  display: "none",
  gap: 20,
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    display: "flex"
  }
}))

const UserBox = styled(Box)(({theme}) => ({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  [theme.breakpoints.up("sm")]: {
    display: "none"
  }
}))





const NavbarComponent = () => {

  const [open, setOpen] = useState(false)

  const handleChange = () => (
    setOpen(!open)
  )


  return (
    <AppBar position='sticky'>
      <StyledToolbar>
        <Typography variant='h6' component='h6' 
        sx={{display: {xs: "none", sm: "block"}}}>
          CALVIN DEV
        </Typography>

        <ApiIcon sx={{display: {xs: "block", sm: "none"}}} />


        <SearchBar>
          <InputBase placeholder='Search.....' />
        </SearchBar>


        <IconsBar>
          <Badge badgeContent={4} color="error">
            <Mail  />
          </Badge>

          <Badge badgeContent={4} color="error">
            <Notifications />
          </Badge>

          <Avatar style={{width: 30, height: 30}}
           src={calvin} 
           onClick={handleChange} />

        </IconsBar>

        <UserBox>
        <Avatar style={{width: 30, height: 30}} 
        src={calvin} 
        onClick={handleChange}/>
        <span>Calvin</span>
        
        </UserBox>


      </StyledToolbar>

      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        // anchorEl={anchorEl}
        open={open}
        onClose={handleChange}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem >Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem >Logout</MenuItem>
      </Menu>


    </AppBar>
  )
}

export default NavbarComponent
