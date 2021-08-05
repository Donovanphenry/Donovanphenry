import './Styles/glowStyle.css'

import React from 'react';

import {useHistory} from 'react-router-dom';

import AppContext from './AppContext';

import emailjs from 'emailjs-com';

import JoshuaSunset from './images/JoshuaSunset.jpg';
import Dijkstras from './images/Dijkstras.png';
import CompSciNoRules from './images/CompSciNoRules.png';
import SantaCruz from './images/SantaCruz.jpg';

import Paper from '@material-ui/core/Paper';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Typography from '@material-ui/core/Typography';
import DescriptionIcon from '@material-ui/icons/Description';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import AppBar from '@material-ui/core/AppBar';
import Hidden from '@material-ui/core/Hidden';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import Toolbar from '@material-ui/core/Toolbar';
import Link from '@material-ui/core/Link';

import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {FiSun} from 'react-icons/fi';
import {BiMoon} from 'react-icons/bi';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import WorkIcon from '@material-ui/icons/Work';
import {GiAchievement, GiStairsGoal, GiBurningPassion, GiMailbox} from 'react-icons/gi';
import {FaHiking} from 'react-icons/fa';

import AppColors from './Styles/AppColors';

const buttonWidth = 150;
const btnWidth = 150;

const useStyles = makeStyles((theme) => ({
  homeAppBar: {
    width: '100%',
    backgroundColor: props => props.homeAppBarColor,
  },

  homeToolbar: {
    paddingLeft: '0px',
    paddingRight: '0px',

    [theme.breakpoints.up('sm')]: {
    },
  },

  appBarBtnContainer: {
    color: '#252627',
    display: 'flex',
    width: '100%',
  },

  travBtnContainer: {
    color: props => props == AppColors.lightTheme ?
      props.homeBackground : props.homeSecondary,
    flexGrow: '3',
    flexBasis: '3',
  },

  themeBtnContainer: {
    flexGrow: '1',
    flexBasis: '1',
    display: 'flex',
    justifyContent: 'flex-end',
    paddingRight: theme.spacing(6),
  },

  themeBtn: {
    color: props => props.grey,
  },

  homeMenuBtn: {
    color: props => props.grey,
    marginLeft: theme.spacing(6),
  },

  homeTraverseBtn: {
    margin: theme.spacing(1),
    marginLeft: theme.spacing(5),
    width: btnWidth,
  },

  homeTraversalDrawer: {
    fill: '#252627',
  },

  homeButtonList: {
    // background: '#252627',
    background: props => props.homeBackground,
    width: '100%',
    height: '100%',
  },

  homeDrawerTravBtn: {
    // backgroundColor: '#6b6b6b',
    color: props => props.homePrimary,
    width: btnWidth,
    justifyContent: 'flex-start',
  },

  homeDrawerTravDocBtn: {
    color: props => props.homePrimary,
    width: btnWidth,
    justifyContent: 'flex-start',
  },

  homeBtnDivider: {
    background: '#3b3c3d',
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },

  homeContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: props => props.homeBackground,
  },

  homePaper: {
    backgroundColor: props => props.homeBackground,
    color: props => props.homePrimary,
    display: 'flex',
    flexDirection: 'column',
    paddingLeft: theme.spacing(6),
    paddingRight: theme.spacing(6),
  },

  li: {
    width: '100%',
  },

  liButton: {
    width: buttonWidth,
    justifyContent: 'flex-start',
  },


  homePersonalInfo: {
    display: 'flex',
    justifyContent: 'center',
  },

  homePersonalInfoTypog: {
    fontSize: '20px',
    textAlign: 'center',
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(5),

    [theme.breakpoints.up('sm')]: {
      width: '50%',
    },
    [theme.breakpoints.down('xs')]: {
      width: '100%',
    },
  },

  siteAuthorInfo: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },

  siteTitleBox: {
    display: 'flex',
    width: '100%',
    justifyContent: 'center',
  },

  siteTitleTypog: {
    textAlign: 'center',
    marginTop: theme.spacing(2),
    color: props => props.homeSecondary,
    width: '100%',
    borderBottom: props => `2px solid ${props.homeSecondary}`,

    [theme.breakpoints.up('sm')]: {
      fontSize: '50px',
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '40px',
    },
  },

  homeAboutMeTypog: {
    color: props => props.homePrimary,
    fontSize: '18px',
    textAlign: 'center',
    marginBottom: theme.spacing(4),
    paddingTop: theme.spacing(4),

    [theme.breakpoints.up('md')]: {
      width: '60%',
    },
  },

  homeAspirTypog: {
    color: props => props.homePrimary,
    fontSize: '18px',
    textAlign: 'center',
    marginBottom: theme.spacing(5),

    [theme.breakpoints.up('md')]: {
      width: '60%',
    },
  },

  listAvenues: {
    marginBottom: theme.spacing(10),
  },

  homeAboutMeTitleTypog: {
    textAlign: 'center',
    marginTop: theme.spacing(2),
    color: props => props.homeSecondary,

    [theme.breakpoints.up('sm')]: {
      fontSize: '50px',
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '40px',
    },
  },

  homeInfoBox: {
    display: 'flex',

    [theme.breakpoints.up('lg')]: {
      flexDirection: 'row',
    },
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
    },

    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(2),
  },

  homeInfoSubBox: {
    display: 'flex',
    color: props => props.homePrimary,

    [theme.breakpoints.up('lg')]: {
      flexGrow: 1,
      flexBasis: 1,
    },
    [theme.breakpoints.up('sm')]: {
      flexDirection: 'row',
    },
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
    },
  },

  homeInfoPaper: {
    display: 'flex',
    flexDirection: 'column',
    // background_v0: '#10151c',
    background: props => props.homeBackgroundGradient,
    color: props => props.homePrimary,

    [theme.breakpoints.up('sm')]: {
      flexGrow: 1,
      flexBasis: 1,
      margin: theme.spacing(1),
    },
    [theme.breakpoints.down('xs')]: {
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2),
    },
  },

  homeInfoPaperPic: {
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      height: theme.spacing(60),
    },
    [theme.breakpoints.down('xs')]: {
      height: theme.spacing(40),
    },
  },

  homeInfoTextFlex: {
    display: 'flex',
    flexDirection: 'column',
    padding: theme.spacing(3),
  },

  homeInfoSectionTitle: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    borderBottom: props => `1px solid ${props.homeSecondary}`,
  },
  
  homeInfoHeader: {
    color: props => props.homeSecondary,
    fontSize: '20px',
    marginRight: theme.spacing(1),
  },

  homeInfoIcon: {
    fontSize: '25px',
    color: props => props.homeSecondary,
  },

  homeInfoTypog: {
    marginTop: theme.spacing(1),
    color: props => props.homePrimary,
  },

  buttonFlexBox: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },

  externalLinks: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    color: props => props.homePrimary,
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },

  middleOfTextLink: {
    color: '#5e7af7',
    textDecoration: 'underline',
  },

  ucscLink: {
    border: props => `1px solid ${props.primary}`,
    color: props => props.homePrimary,
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
    textDecoration: 'none',
  },

  contactMeSectionTitle: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: theme.spacing(1),
  },

  contactMeTypog: {
    fontSize: '30px',
    textAlign: 'center',
    alignContent: 'center',
    fontWeight: 'bold',
    color: props => props.contactSecondary,
    marginRight: theme.spacing(1),
  },

  contactMeIcon: {
    color: props => props.contactSecondary,
    fontSize: '30px',
  },

  contactMeForm: {
    margin: '1rem auto 3rem',
    maxWidth: '800px',
    width: '40%',
    minWidth: '250px',
    border: props => `2px solid ${props.contactSecondary}`,
    padding: '2rem',

    [theme.breakpoints.down('xs')]: {
      width: ''
    },
  },

  contactMeLabel: {
    display: 'block',
    color: props => props.contactPrimary,
    width: '100%',
    fontSize: '20px',
    textAlign: 'center',
  },

  contactMeInput: {
    width: '15em',
    display: 'block',
    width: '100%',
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(2),
    border: props => `1px solid ${props.contactSecondary}`,
    padding: '.5rem',
    fontSize: '17px',
    borderRadius: '5px',
  },

  contactSubmitContainer: {
    display: 'flex',
  },

  contactMeSubmit: {
    margin: '1rem auto 0',
    width: '40%',
    border: '0',
    padding: '.5rem',
    height: '50px',
    background: props => props.contactPrimary,
    color: props => props.contactTirtiary,
    cursor: 'pointer',
    textTransform: 'uppercase',
    fontSize: '17px',
    opacity: '1',
    webkitAppearance: 'none',
    mozAppearance: 'none',
    appearance: 'none',

    '&:hover': {
      background: props => props.contactSecondary,
    },
  },
}));

/**
 * @return {*}
 */
function Home() {
  const {userTheme, setUserTheme} = React.useContext(AppContext);
  const classes = useStyles(userTheme);
  const history = useHistory();

  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const toggleDrawerTraverse = (location) => {
    setDrawerOpen(false);
    history.push(location);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_iggvzj7', 'personal_website', e.target, 'user_hEmdXCylL98AtRfQFa8Rt')
      .then(() => {
          console.log('Email sent.');
      }, (error) => {
          console.error(error.text);
      });
    e.target.reset();
  };

  const changeTheme = () => {
    setUserTheme(userTheme == AppColors.darkTheme ? AppColors.lightTheme : AppColors.darkTheme);
  };

  return (
    <div className={classes.homeContainer}>
      <AppBar position="static" className={classes.homeAppBar}>
        <Toolbar className={classes.homeToolbar}>
          <Hidden smUp>
            <IconButton
              edge="start"
              aria-label="menu"
              onClick={() => setDrawerOpen(true)}
              className={classes.homeMenuBtn}
            >
              <MenuIcon />
            </IconButton>

            <Drawer
              variant='temporary'
              open={drawerOpen}
              onClose={() => setDrawerOpen(false)}
              className={classes.homeTraversalDrawer}
            >
              <List className={classes.homeButtonList}>
                <ListItem>
                  <Button
                    className={classes.homeDrawerTravBtn}
                    startIcon={<DescriptionIcon />}
                    onClick={() => toggleDrawerTraverse('/Resume')}
                    variant='outlined'
                    color='inherit'
                  >
                    Resume
                  </Button>
                </ListItem>

                <ListItem>
                  <Button
                    className={classes.homeDrawerTravBtn}
                    startIcon={<WorkIcon />}
                    onClick={() => toggleDrawerTraverse('/JobPortfolio')}
                    variant='outlined'
                    color='inherit'
                  >
                    Portfolio
                  </Button>
                </ListItem>

                <Divider
                  className = {classes.homeBtnDivider}
                />

                <ListItem>
                  <Button
                    className = {classes.homeDrawerTravDocBtn}
                    startIcon = {<AssignmentIndIcon />}
                    onClick = {() => {
                      setDrawerOpen(false);
                      const el = document.getElementById('homeAboutMeTitle');
                      el.scrollIntoView(true);
                    }}
                    color = 'inherit'
                    variant = 'outlined'
                  >
                    About Me
                  </Button>
                </ListItem>
              </List>
            </Drawer>
          </Hidden>
        
          <Box className = {classes.appBarBtnContainer}>
            <Hidden xsDown>
              <Box className = {classes.travBtnContainer}>
                <Button
                  className = {classes.homeTraverseBtn}
                  startIcon = {<DescriptionIcon />}
                  onClick = {() => history.push('/Resume')}
                  variant = 'outlined'
                  color = 'inherit'
                >
                  Resume
                </Button>

                <Button
                  className = {classes.homeTraverseBtn}
                  startIcon = {<WorkIcon />}
                  onClick = {() => history.push('/JobPortfolio')}
                  variant = 'outlined'
                  color = 'inherit'
                >
                  Portfolio
                </Button>
              </Box>
            </Hidden>

            <Box className = {classes.themeBtnContainer}>
                <IconButton onClick = {changeTheme}>
                  {
                    userTheme == AppColors.darkTheme ?
                      <BiMoon className = {classes.themeBtn} /> :
                      <FiSun className = {classes.themeBtn} />
                  }
                </IconButton>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>

      <Paper className={classes.homePaper}>
        <Box className = {classes.siteAuthorInfo}>
          <Box className = {classes.siteTitleBox}>
            <Typography className={classes.siteTitleTypog}>
              Donovan Henry&apos;s Website
            </Typography>
          </Box>

          <Typography className={classes.homeAboutMeTypog}>
            UC Santa Cruz student who&apos;s passionate about computer science,
            math and physics. Great experience in C-based languages
            (see &quot;Skills&quot; section of portfolio or resume)
            and web development, with a love for the underlying concepts.
            I.e. data structures, algorithms, computer architecture etc.
          </Typography>

          <Typography className={classes.homeAspirTypog}>
            Currently seeking internships & opportunities in STEM-related
            fields, but some areas of particular interest to me are theoretical
            computer science, machine learning, web development,
            deep learning, and computational physics.
          </Typography>
        </Box>

        <Typography
          className = {classes.homeAboutMeTitleTypog}
          id = 'homeAboutMeTitle'
        >
          About Me
        </Typography>

        <Box className={classes.homeInfoBox}>
          <Box className={classes.homeInfoSubBox}>
            <Paper className={classes.homeInfoPaper}>
              <img
                src={SantaCruz}
                className={classes.homeInfoPaperPic}
              >
              </img>

              <Box className={classes.homeInfoTextFlex}>
                <Box className = {classes.homeInfoSectionTitle}>
                  <Typography className={classes.homeInfoHeader}>
                    School Achievements
                  </Typography>
                  
                  <GiAchievement className = {classes.homeInfoIcon} />
                </Box>

                <Typography className={classes.homeInfoTypog}>
                  &nbsp;&nbsp;&nbsp;&nbsp;I&apos;m
                  currently a senior at UC Santa Cruz 🎓
                  majoring in computer science (B.S.), and concurrently
                  pursuing a minor in statistics.
                </Typography>
              </Box>
            </Paper>

            <Paper className={classes.homeInfoPaper}>
              <img
                src={CompSciNoRules}
                className={classes.homeInfoPaperPic}
              >
              </img>

              <Box className={classes.homeInfoTextFlex}>
                <Box className = {classes.homeInfoSectionTitle}>
                  <Typography className={classes.homeInfoHeader}>
                    Goals &amp; Aspirations
                  </Typography>
                  
                  <GiStairsGoal className = {classes.homeInfoIcon} />
                </Box>

                <Typography className={classes.homeInfoTypog}>
                  &nbsp;&nbsp;&nbsp;&nbsp;I&apos;m
                  very passionate about math
                  and computer science, which leads me to believe
                  that I will enjoy machine learning. In turn, I&apos;d
                  love an opportunity to contribute to a company whose
                  mission lies at the forefront of this technology. I
                  have enrolled in several machine learning courses
                  throughout my time at UC Santa Cruz, will continue
                  to enroll in more,
                  and I&apos;m currently a member of UCSC&apos;s <a
                    className = {classes.middleOfTextLink}
                    href = "https://scai.ucsc.edu/" >
                    SCAI
                  </a> (Santa
                  Cruz Artificial Intelligence)
                  club. I
                  also particularly enjoy analysing algorithms and their
                  order of growth and would be thrilled to be able to
                  contribute to a company who specializes in such a field.
                </Typography>
              </Box>
            </Paper>
          </Box>

          <Box className={classes.homeInfoSubBox}>
            <Paper className={classes.homeInfoPaper}>
              <img
                src={Dijkstras}
                className={classes.homeInfoPaperPic}
              >
              </img>

              <Box className={classes.homeInfoTextFlex}>
                <Box className = {classes.homeInfoSectionTitle}>
                  <Typography className = {classes.homeInfoHeader}>
                    Passions
                  </Typography>
                  
                  <GiBurningPassion className = {classes.homeInfoIcon} />
                </Box>

                <Typography className = {classes.homeInfoTypog}>
                  &nbsp;&nbsp;&nbsp;&nbsp;I&apos;m
                  dedicated to making this world a
                  better place whether that be through machine
                  learning, physics/astrophysics, quantum computing, or many
                  other interesting areas.
                </Typography>
              </Box>
            </Paper>

            <Paper className={classes.homeInfoPaper}>
              <img
                src={JoshuaSunset}
                className={classes.homeInfoPaperPic}
              >
              </img>

              <Box className={classes.homeInfoTextFlex}>
                <Box className = {classes.homeInfoSectionTitle}>
                  <Typography className={classes.homeInfoHeader}>
                    Interests
                  </Typography>
                  
                  <FaHiking className = {classes.homeInfoIcon} />
                </Box>

                <Typography className={classes.homeInfoTypog}>
                  &nbsp;&nbsp;&nbsp;&nbsp;I
                  played tier one hockey for around six years
                  and in turn, I love doing things that involve
                  teamwork. Whether that be working on projects
                  with friends, getting involved in SCAI club
                  affairs, playing/watching sports etc., I&apos;ll
                  love it if it requires that we do it as a team. I
                  also love to go for hikes with friends.
                </Typography>
              </Box>
            </Paper>
          </Box>
        </Box>

        <Box style = {{display: AppColors.lightTheme == userTheme ? 'none' : 'none', justifyContent: 'center'}}>
          <a className = "glowing-button" onClick = {changeTheme}>Change Theme</a>
        </Box>

        <Box className = {classes.contactMeSectionTitle}>
          <Typography className = {classes.contactMeTypog}>
            Contact Me
          </Typography>

          <GiMailbox className = {classes.contactMeIcon}/>
        </Box>
        <form className = {classes.contactMeForm} onSubmit={sendEmail}>
          <label className = {classes.contactMeLabel}>Subject</label>
          <input type="input" name="subject" className = {classes.contactMeInput}/>

          <label className = {classes.contactMeLabel}>Name</label>
          <input type="input" name="name_from" className = {classes.contactMeInput}/>

          <label className = {classes.contactMeLabel}>Email</label>
          <input type="email" name="email_from" className = {classes.contactMeInput}/>

          <label className = {classes.contactMeLabel}>Message</label>
          <textarea name="message" className = {classes.contactMeInput}/>
          
          <div className = {classes.contactSubmitContainer}>
            <input type="submit" value="Send" className = {classes.contactMeSubmit} />
          </div>
        </form>
      </Paper>

      <Box className = {classes.externalLinks}>
        <Link href = "https://github.com/Donovanphenry">
          <IconButton color = 'inherit'>
            <GitHubIcon />
          </IconButton>
        </Link>

        <Link href = "https://www.linkedin.com/in/donovan-henry/">
          <IconButton color = 'inherit'>
            <LinkedInIcon />
          </IconButton>
        </Link>
      </Box>
    </div>
  );
}

export default Home;
