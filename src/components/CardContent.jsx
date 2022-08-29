import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  Typography,
} from '@mui/material'
import { SocialIcon } from 'react-social-icons'
import WebIcon from '@mui/icons-material/Web'

function Cardzinho({ name, desc, siteLink, gitLink, imgSrc }) {
  return (
    <Card sx={{ minWidth: 200, maxWidth: 280, maxHeight: 400 }}>
      <CardMedia component='img' alt='site image' height='30' image={imgSrc} />
      <CardContent>
        <Typography>{name}</Typography>
        <Typography sx={{ fontSize: 12 }}>{desc}</Typography>
      </CardContent>
      <CardActions>
        <a href={siteLink} target='_blank' rel='noopener noreferrer'>
          <Button sx={{ width: 50, height: 50 }}>
            <WebIcon sx={{ fontSize: 40, color: '#191919' }} />
          </Button>
        </a>
        <a href={gitLink} target='_blank' rel='noopener noreferrer'>
          <Button size='small' sx={{ width: 50, height: 50 }}>
            <SocialIcon
              network='github'
              bgColor='#191919'
              style={{ width: 40, height: 40 }}
            />
          </Button>
        </a>
      </CardActions>
    </Card>
  )
}

export default Cardzinho
