import { Box } from "@mui/material"
import PostComponent from "../post/post"



const FeedComponent = () => {
  return (
    <Box  flex={4} p={2}>
      <PostComponent />

      <PostComponent />

      <PostComponent />
    </Box>
  )
}

export default FeedComponent
