import { Box } from '@mui/material'
import React from 'react'

const SidebarComponent = () => {
  return (
    <Box bgcolor="red" flex={1} p={2} sx={{display: {xs: "none", sm: "block"}}}>
        Sidebar Component
    </Box>
  )
}

export default SidebarComponent
