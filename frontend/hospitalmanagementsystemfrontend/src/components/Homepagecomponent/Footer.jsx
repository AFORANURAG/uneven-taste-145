import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid, IconButton, Typography } from '@material-ui/core';
import { Instagram, YouTube, LinkedIn } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  footer: {
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
 
  height: 500,
  padding:"200px",
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  backgroundImage:" linear-gradient(to right bottom, rgb(61, 194, 218), rgb(250, 172, 64));"
  },
  socialIcons: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: theme.spacing(2),
  },
  iconButton: {
    margin: theme.spacing(0, 2),
    color: theme.palette.primary.contrastText,
    '&:hover': {
      backgroundColor: 'transparent',
      color: theme.palette.secondary.main,
    },
  },
  companyName: {
    marginTop: theme.spacing(2),
    color: theme.palette.primary.contrastText,
  },
  cityList: {
    marginTop: theme.spacing(6),
    color: theme.palette.primary.contrastText,
  },
  divider: {
    backgroundColor: theme.palette.primary.contrastText,
    height: 3,
    width: '100%',
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(2),
  },
  copyRight: {
    marginTop: theme.spacing(2),
    color: theme.palette.primary.contrastText,
    textAlign: 'center',
  },
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <Container>
        <Grid container spacing={5}>
          <Grid item xs={20}  sm={6} md={4}>
            <Typography variant="h3" fo>Follow Us</Typography>
            <div className={classes.socialIcons}>
              <IconButton
                className={classes.iconButton}
                href="https://www.instagram.com/ayuva"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram />
              </IconButton>
              <IconButton
                className={classes.iconButton}
                href="https://www.youtube.com/ayuva"
                target="_blank"
                rel="noopener noreferrer"
              >
                <YouTube />
              </IconButton>
              <IconButton
                className={classes.iconButton}
                href="https://www.linkedin.com/company/ayuva"
                target="_blank"
                rel="noopener noreferrer"
              >
              <LinkedIn />
              </IconButton>
            </div>
          </Grid> 
          
          <Grid item xs={12} sm={10} md={4} mt={20}>
            <Typography variant="h5">We are building India's most trusted online hospital appointment ecosystem</Typography>
            <Typography variant="h4" className={classes.cityList}>
              We are present  in
            </Typography>
            <Typography variant="h5"  color='textSecondary' className={classes.cityList}>
            Delhi, Mumbai, and Bangalore.
            </Typography>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h4" className={classes.companyName}>
              Ayuva
            </Typography>
          </Grid>
        </Grid>
        <div className={classes.divider}></div>
        <Typography variant="body2" className={classes.copyRight}>
          &copy; {new Date().getFullYear()} Ayuva. All rights reserved.
        </Typography>
      </Container>
    </footer>
  );
};

export default Footer;
