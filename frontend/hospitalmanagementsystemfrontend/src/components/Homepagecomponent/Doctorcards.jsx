import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function MediaCard({img,specialisation,experience,name}) {
    return (
      <Card sx={{ maxWidth: 345,ml:10 }}>
        <CardMedia
          sx={{ height: 170,width:130,ml:10}}
          image={img}

        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
          {specialisation}
          </Typography>
          <Typography variant="body2" color="text.secondary">
          {experience}
          </Typography>
        </CardContent>
      </Card>
    );
  }