import { Stack } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import FeedComponent from './components/feed/feed-component'
import NavbarComponent from './components/navbar/navbar-component'
import RightBarComponent from './components/rightBar/rightBar-component'
import SidebarComponent from './components/sidebar/sidebar-component'

const App = () => {
  return (
    <Box>

      <NavbarComponent />

      <Stack direction="row" spacing={2} 
      justifyContent="space-between">

      
      <SidebarComponent />
      <FeedComponent />
      <RightBarComponent />

      </Stack>
    </Box>
  )
}

export default App
