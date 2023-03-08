import { CheckBox, ExpandMore, Favorite, FavoriteBorder, MoreVertOutlined, Share } from '@mui/icons-material'
import { Avatar, Box, Card, CardActions, CardContent, CardHeader, CardMedia, Checkbox, IconButton, Typography } from '@mui/material'


//Images
import Mama from "../../assets/images/mama.jpg"
import Williams from "../../assets/images/williams.jpg"


const PostComponent = () => {
  return (
    <Box>

<Card sx={{margin: 5}} >
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
            C
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertOutlined />
          </IconButton>
        }
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        height= {500}
        image={Williams}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum earum aspernatur odit aliquam modi pariatur id obcaecati distinctio, 
          magni eum quibusdam velit possimus, ducimus, quam sapiente laboriosam molestiae consequuntur sed nostrum! Odio nobis expedita, 
          nisi dolores fugit inventore provident, perferendis dolorem odit reprehenderit recusandae asperiores saepe distinctio earum consectetur nam?
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
        <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite color='error' />} />
        </IconButton>

        <IconButton aria-label="share">
          <Share />
        </IconButton>
      
      
        
        
      </CardActions>
     
    </Card>


    <Card sx={{margin: 5}} >
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertOutlined />
          </IconButton>
        }
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        height= {500}
        image={Mama} 
        objectFit={"fit"}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum ratione deserunt quibusdam ut sequi alias vero modi enim. Saepe, enim!
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
        <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite color='error' />} />
        </IconButton>

        <IconButton aria-label="share">
          <Share />
        </IconButton>
           
      
        
        
      </CardActions>
     
    </Card>
      
    </Box>
  )
}

export default PostComponent
