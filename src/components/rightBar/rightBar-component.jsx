import { Box, Typography } from '@mui/material'
import React from 'react'

const RightBarComponent = () => {
  return (
    <Box bgcolor="yellow" flex={2} p={2} 
    sx={{display: {xs: "none", sm: "block"}}}>
      Right Bar Component

      <Typography variant="h2">
        Still in Progress
      </Typography>
    </Box>
  )
}

export default RightBarComponent
