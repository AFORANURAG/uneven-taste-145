import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid, IconButton, Typography } from '@material-ui/core';
import { Instagram, YouTube, LinkedIn } from '@material-ui/icons';



const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    padding: theme.spacing(6, 0),
    backgroundImage:" linear-gradient(to right bottom, rgb(61, 194, 218), rgb(250, 172, 64));"
  },
  socialIcons: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: theme.spacing(4),
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
    marginTop: theme.spacing(4),
    color: theme.palette.primary.contrastText,
  },
  cityList: {
    marginTop: theme.spacing(2),
    color: theme.palette.primary.contrastText,
  },
  sectionHeader: {
    color: theme.palette.secondary.main,
    marginBottom: theme.spacing(2),
  },
  contactList: {
    listStyle: 'none',
    padding: 0,
    marginTop: theme.spacing(2),
    color: theme.palette.primary.contrastText,
  },
  listItem: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: theme.spacing(1),
  },
  icon: {
    marginRight: theme.spacing(2),
    color: theme.palette.secondary.main,
  },
  divider: {
    backgroundColor: theme.palette.primary.contrastText,
    height: 2,
    width: '100%',
    marginTop: theme.spacing(6),
    marginBottom: theme.spacing(4),
  },
  copyRight: {
    marginTop: theme.spacing(4),
    color: theme.palette.primary.contrastText,
    textAlign: 'center',
  },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6">Follow Us</Typography>
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
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6">We are building India's most trusted online hospital appointment ecosystem</Typography>
            <Typography variant="body1" className={classes.cityList}>
              We are present in Delhi, Mumbai, and Bangalore.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6">Company Name</Typography>
            <Typography variant="body1" className={classes.companyName}>
              Ayuva

              Health Care Pvt. Ltd.
              </Typography>
              <Typography variant="h6" className={classes.sectionHeader}>
                Contact Us
              </Typography>
              <ul className={classes.contactList}>
                <li className={classes.listItem}>
                  <Typography variant="body1">
                    <i className={`fas fa-map-marker-alt ${classes.icon}`} />
                    Address: 123 Main Street, New Delhi, India
                  </Typography>
                </li>
                <li className={classes.listItem}>
                  <Typography variant="body1">
                    <i className={`fas fa-envelope ${classes.icon}`} />
                    Email: info@ayuva.com
                  </Typography>
                </li>
                <li className={classes.listItem}>
                  <Typography variant="body1">
                    <i className={`fas fa-phone ${classes.icon}`} />
                    Phone: +91 1234567890
                  </Typography>
                </li>
              </ul>
            </Grid>
          </Grid>
          <div className={classes.divider} />
          <Typography variant="body2" className={classes.copyRight}>
            &copy; 2023 Ayuva Health Care Pvt. Ltd. All rights reserved.
          </Typography>
        </Container>
      </footer>
  )}
  export default Footer;