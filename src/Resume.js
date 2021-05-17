import React from 'react';
import {useHistory} from 'react-router-dom';

import AoJ from './images/AoJ.png';
import FindingNemo from './images/FindingNemo.png';
import SlugMail from './images/SlugMail.png';

/* eslint-disable */

import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Link from '@material-ui/core/Link';
import Hidden from '@material-ui/core/Hidden';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';

import IconButton from '@material-ui/core/IconButton';
import WorkIcon from '@material-ui/icons/Work';
import MailIcon from '@material-ui/icons/Mail';
import CardTravelIcon from '@material-ui/icons/CardTravel';
import SchoolIcon from '@material-ui/icons/School';
import SportsHockeyIcon from '@material-ui/icons/SportsHockey';
import ComputerIcon from '@material-ui/icons/Computer';
import MenuIcon from '@material-ui/icons/Menu';
import PhoneIcon from '@material-ui/icons/Phone';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import HomeIcon from '@material-ui/icons/Home';
import {makeStyles} from '@material-ui/core/styles';
import AppColors from './Styles/AppColors';

const btnWidth = 140;

const useStyles = makeStyles((theme) => ({
  title: {
    margin: theme.spacing(1),
  },

  appBar: {
    width: '100%',
    background: '#303030',
  },

  toolBar: {
    paddingLeft: '0px',
    paddingRight: '0px',
  },

  menuBtn: {
    color: AppColors.grey,
    marginLeft: theme.spacing(6),

    [theme.breakpoints.down('xs')]: {
      marginLeft: theme.spacing(2),
    },
  },

  traverseBtn: {
    margin: theme.spacing(1),
    marginLeft: theme.spacing(8),
    width: btnWidth,
    background: AppColors.grey,
  },

  traversalDrawer: {
    fill: '#252627',
  },

  buttonList: {
    background: '#252627',
    width: '100%',
    height: '100%',
  },

  innerDocTraversals: {
    color: '#5e9bf7',
  },

  drawerTravBtn: {
    width: btnWidth,
    color: '#5e9bf7',
    justifyContent: 'flex-start',
  },

  drawerTravDocBtn: {
    width: btnWidth,
    justifyContent: 'flex-start',
    color: AppColors.resumePrimary,
  },

  travBtnDivider: {
    background: '#3b3c3d',
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },

  resumeContainer: {
    width: '100%',
    backgroundColor: '#252627',
  },

  resumeContentContainer: {
    display: 'flex',
    flexDirection: 'column',
    margin: theme.spacing(8),
    marginBottom: theme.spacing(5),
    borderTop: `6px solid ${AppColors.resumePrimary}`,
    borderBottom: `6px solid ${AppColors.resumePrimary}`,
    paddingBottom: theme.spacing(4),
    color: AppColors.resumePrimary,
    overflow: 'hidden',

    [theme.breakpoints.up('sm')]: {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
    },
    [theme.breakpoints.down('xs')]: {
      margin: theme.spacing(4),
    },
  },

  myInfo: {
    display: 'flex',
    alignItems: 'center',
  },

  myNameTypog: {
    fontWeight: 'bold',

    [theme.breakpoints.up('md')]: {
      fontSize: '64px',
    },
    [theme.breakpoints.up('sm')]: {
      fontSize: '50px',
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '36px',
      paddingTop: theme.spacing(4),
    },
  },

  contactInfoBox: {
    flexGrow: 1,
    overflow: 'hidden',
  },

  contactInfo: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(2),
    fontWeight: 'bold',
    [theme.breakpoints.up('sm')]: {
      fontSize: '24px',
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '18px',
    },
  },

  selfDescriptionAndAchievements: {
    [theme.breakpoints.up('sm')]: {
      marginTop: theme.spacing(3),
      marginBottom: theme.spacing(2),
    },
  },

  personalInformationFlexbox: {
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    display: 'flex',
    alignItems: 'center',
    overflowX: 'auto',
    overflowY: 'auto',
  },

  addressTypog: {
    marginLeft: theme.spacing(1),
    color: AppColors.grey,
  },

  phoneEmailTypog: {
    padding: theme.spacing(1),
    color: AppColors.grey,
  },

  githubTypog: {
    padding: theme.spacing(1),
  },

  myContactLink: {
    border: '1px solid #6b6b6b',
    color: AppColors.grey,
    marginLeft: theme.spacing(1),
    padding: theme.spacing(1),
  },

  personalInfoBox: {
    display: 'flex',
    alignItems: 'center',
  },

  sectionType: {
    fontWeight: 'bold',
    [theme.breakpoints.up('sm')]: {
      fontSize: '20px',
    },

    [theme.breakpoints.down('xs')]: {
      fontSize: '16px',
      paddingTop: theme.spacing(2),
    },
  },

  sectionTypeCloser: {
    fontWeight: 'bold',
    [theme.breakpoints.up('sm')]: {
      fontSize: '20px',
      marginTop: theme.spacing(2),
    },

    [theme.breakpoints.down('xs')]: {
      fontSize: '16px',
      paddingTop: theme.spacing(2),
    },
  },

  descriptionList: {
    color: AppColors.grey,
    paddingTop: theme.spacing(1),
  },

  employmentOp: {
    paddingLeft: '0px',
  },

  employmentInfo: {
    [theme.breakpoints.up('sm')]: {
      fontSize: '18px',
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '15px',
    },
  },

  compName: {
    fontWeight: 'bold',
  },

  employmentDates: {
    fontStyle: 'italic',
    [theme.breakpoints.down('sm')]: {
      fontSize: '14px',
    },
  },

  employmentDescription: {
    [theme.breakpoints.down('sm')]: {
      fontSize: '14px',
    },
  },

  schoolList: {
    color: AppColors.grey,
  },

  school: {
    paddingLeft: '0px',
  },

  schoolNameDates: {
    paddingLeft: '0px',
  },

  schoolName: {
    fontWeight: 'bold',
  },

  schoolDates: {
    [theme.breakpoints.up('sm')]: {
      fontSize: '16px',
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '15px',
    },
  },

  schoolMajor: {
    paddingTop: theme.spacing(1),
    [theme.breakpoints.up('sm')]: {
      fontSize: '16px',
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '14px',
    },
  },

  schoolAwards: {
    paddingTop: theme.spacing(1),
    [theme.breakpoints.up('sm')]: {
      fontSize: '16px',
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '14px',
    },
  },

  schoolSTEMProg: {
    paddingTop: theme.spacing(1),
    [theme.breakpoints.up('sm')]: {
      fontSize: '16px',
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '14px',
    },
  },

  schoolCompSciClub: {
    paddingTop: theme.spacing(1),
    [theme.breakpoints.up('sm')]: {
      fontSize: '16px',
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '14px',
    },
  },

  schoolTutor: {
    paddingTop: theme.spacing(1),
    [theme.breakpoints.up('sm')]: {
      fontSize: '16px',
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '14px',
    },
  },

  schoolGPA: {
    paddingTop: theme.spacing(1),
    [theme.breakpoints.up('sm')]: {
      fontSize: '16px',
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '14px',
    },
  },

  interestsDescript: {
    color: AppColors.grey,
    paddingTop: theme.spacing(1),

    [theme.breakpoints.up('sm')]: {
      fontSize: '16px'
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '14px',
    },
  },

  projectInfo: {
    fontSize: '18px',
  },

  project: {
    marginBottom: theme.spacing(1),

    [theme.breakpoints.up('sm')]: {
      marginTop: theme.spacing(1),
    },
  },

  projectTemplateContainer: {
    [theme.breakpoints.down('sm')]: {
      display: 'flex',
      justifyContent: 'flex-end',
    },
  },

  projectTemplate: {
    fontWeight: 'bold',
    [theme.breakpoints.up('sm')]: {
      fontSize: '20px',
    },

    [theme.breakpoints.down('xs')]: {
      fontSize: '16px',
      overflow: 'auto',
      color: AppColors.resumePrimary,
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(1),
    },
  },

  projectDesc: {
    color: AppColors.grey,
    paddingTop: theme.spacing(1),
  },

  projectDescTypog: {
    [theme.breakpoints.down('sm')]: {
      fontSize: '14px',
    },
  },

  projectName: {
    overflow: 'auto',
  },

  projectNameTypog: {
    paddingTop: theme.spacing(1),
    color: AppColors.grey,
    fontWeight: 'bold',

    [theme.breakpoints.down('sm')]: {
      fontSize: '14px',
    },

    [theme.breakpoints.down('xs')]: {
      marginBottom: theme.spacing(2),
    },
  },

  projectPicture: {
    height: theme.spacing(9),
    width: theme.spacing(9),
  },
  
  resumeFooter: {
    borderTop: `2px solid ${AppColors.grey}`,
    marginBottom: theme.spacing(1),
    marginLeft: theme.spacing(8),
    marginRight: theme.spacing(8),
    padding: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',

    [theme.breakpoints.down('sm')]: {
      fontSize: '14px',
    },
    [theme.breakpoints.down('xs')]: {
      marginLeft: theme.spacing(4),
      marginRight: theme.spacing(4),
    },
  },

  resumeFooterTypog: {
    textAlign: 'center',
  },
}));

/**
 * @return {*}
 */
function Resume() {
  const history = useHistory();
  const classes = useStyles();

  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const toggleDrawerTraverse = (location) => {
    setDrawerOpen(false);
    history.push(location)
  };

  return (
    <div className = {classes.resumeContainer}>
      <AppBar position="static" className = {classes.appBar}>
        <Toolbar className = {classes.toolBar}>
          <Hidden smUp>
            <IconButton
              edge="start"
              aria-label="menu"
              onClick = {() => setDrawerOpen(true)}
              className = {classes.menuBtn}
            >
              <MenuIcon />
            </IconButton>

            <Drawer
              variant = 'temporary'
              open = {drawerOpen}
              onClose = {() => setDrawerOpen(false)}
              className = {classes.traversalDrawer}
            >
              <List className = {classes.buttonList}>
                <ListItem className = {classes.innerDocTraversals}>
                  <Button
                    className = {classes.drawerTravBtn}
                    startIcon = {<HomeIcon />}
                    onClick = {() => toggleDrawerTraverse('/')}
                    variant = 'outlined'
                    color = 'inherit'
                  >
                    Home
                  </Button>
                </ListItem>

                <ListItem className = {classes.innerDocTraversals}>
                  <Button
                    className = {classes.drawerTravBtn}
                    startIcon = {<WorkIcon />}
                    onClick = {() => toggleDrawerTraverse('/JobPortfolio')}
                    variant = 'outlined'
                    color = 'inherit'
                  >
                    Portfolio
                  </Button>
                </ListItem>

                <Divider
                  className = {classes.travBtnDivider}
                />

                <ListItem>
                  <Button
                    className = {classes.drawerTravDocBtn}
                    startIcon = {<CardTravelIcon />}
                    variant = 'outlined'
                    color = 'inherit'
                    onClick = {() => {
                      setDrawerOpen(false);
                      document.getElementById('resExperience').scrollIntoView(true);
                    }}
                  >
                    Experience
                  </Button>
                </ListItem>

                <ListItem>
                  <Button
                    className = {classes.drawerTravDocBtn}
                    startIcon = {<SchoolIcon />}
                    variant = 'outlined'
                    color = 'inherit'
                    onClick = {() => {
                      setDrawerOpen(false);
                      document.getElementById('resEducation').scrollIntoView(true);
                    }}
                  >
                    Education
                  </Button>
                </ListItem>

                <ListItem>
                  <Button
                    className = {classes.drawerTravDocBtn}
                    startIcon = {<SportsHockeyIcon />}
                    variant = 'outlined'
                    color = 'inherit'
                    onClick = {() => {
                      setDrawerOpen(false);
                      document.getElementById('resSkillsAndInterests').scrollIntoView(true);
                    }}
                  >
                    Skills
                  </Button>
                </ListItem>

                <ListItem>
                  <Button
                    className = {classes.drawerTravDocBtn}
                    startIcon = {<ComputerIcon />}
                    variant = 'outlined'
                    color = 'inherit'
                    onClick = {() => {
                      setDrawerOpen(false);
                      document.getElementById('resProjects').scrollIntoView(true);
                    }}
                  >
                    Projects
                  </Button>
                </ListItem>
              </List>
            </Drawer>
          </Hidden>

          <Hidden xsDown>
            <Box style = {{color: '#252627'}}>
              <Button
                className = {classes.traverseBtn}
                startIcon = {<HomeIcon />}
                onClick = {() => history.push('/')}
                variant = 'contained'
                color = 'inherit'
              >
                Home
              </Button>

              <Button
                className = {classes.traverseBtn}
                startIcon = {<WorkIcon />}
                onClick = {() => history.push('/JobPortfolio')}
                variant = 'contained'
                color = 'inherit'
              >
                Portfolio
              </Button>
            </Box>
          </Hidden>
        </Toolbar>
      </AppBar>

      <Box className = {classes.resumeContentContainer}>
        <Grid container className = {classes.myInfo}>
          <Grid item className = {classes.myName} xs = {12} sm = {6}>
            <Typography className = {classes.myNameTypog}>
              Donovan Henry
            </Typography>
          </Grid>

          <Grid item className = {classes.contactInfoBox} xs = {12} sm = {6}>
            <Typography className = {classes.contactInfo}>
              Contact Me
            </Typography>

            <Box 
              className = {classes.personalInformationFlexbox}
            >
              <HomeIcon />
              <Typography
                className = {classes.addressTypog}
              >
                1555 8th Street, Manhattan Beach, CA
              </Typography>
            </Box>

            <Box
              className = {classes.personalInformationFlexbox}
            >
              <PhoneIcon />
              <Typography
                className = {classes.phoneEmailTypog}
              >
                (310)617-9136
              </Typography>
            </Box>

            <Box
              className = {classes.personalInformationFlexbox}
            >
              <MailIcon />
              <Typography
                className = {classes.phoneEmailTypog}
              >
                dphenry&#64;ucsc.edu
              </Typography>
            </Box>

            <Box 
              className = {classes.personalInformationFlexbox}
            >
              <GitHubIcon />
              <Link
                className = {classes.myContactLink}
                href = 'https://github.com/Donovanphenry'
              >
                github.com/Donovanphenry
              </Link>
            </Box>

            <Box 
              className = {classes.personalInformationFlexbox}
            >
              <LinkedInIcon />
              <Link
                className = {classes.myContactLink}
                href = 'https://www.linkedin.com/in/donovan-henry/'
              >
                linkedin.com/in/donovan-henry/
              </Link>
            </Box>
          </Grid>
        </Grid>

        <Grid container className = {classes.selfDescriptionAndAchievements}>
          <Grid item xs = {12} sm = {6}>
            <Typography className = {classes.sectionType} id = 'resExperience'>
              Experience
            </Typography>

            <List className = {classes.descriptionList}>
              <ListItem className = {classes.employmentOp}>
                <ListItemText>
                  <Typography className = {classes.employmentInfo}>
                    <span className = {classes.compName}>Westside</span>
                    <span className = {classes.locTitle}>, Torrance - Technician</span>
                  </Typography>

                  <Typography className = {classes.employmentDates}>
                    June, 2017 - August 2018
                  </Typography>

                  <Typography className = {classes.employmentDescription}>
                    Detailed cars, performed simple maintenance of luxury cars,
                    high security cars and of the shop. Prepared vehicles for photo shoots and commercials.
                  </Typography>
                </ListItemText>
              </ListItem>

              <ListItem className = {classes.employmentOp}>
                <ListItemText>
                  <Typography className = {classes.employmentInfo}>
                    <span className = {classes.compName}>Westside</span>
                    <span className = {classes.locTitle}>, Torrance - Technician</span>
                  </Typography>

                  <Typography className = {classes.employmentDates}>
                    June, 2018 - August 2018
                  </Typography>

                  <Typography className = {classes.employmentDescription}>
                    Shadowed the same company's software engineer and asked to learn and evaluate the code.
                  </Typography>
                </ListItemText>
              </ListItem>

              <ListItem className = {classes.employmentOp}>
                <ListItemText>
                  <Typography className = {classes.employmentInfo}>
                    <span className = {classes.compName}>Mr. B's Bricks</span>
                    <span className = {classes.locTitle}>, Manhattan Beach - Camp Instructor</span>
                  </Typography>

                  <Typography className = {classes.employmentDates}>
                    August, 2016 - June, 2017
                  </Typography>

                  <Typography className = {classes.employmentDescription}>
                    Served as a counselor for an after school program in which kids, K-5th, are provided an opportunity to build with LEGOs. I ensured that the kids were having fun and weren’t feeling overwhelmed by the instructions.
                  </Typography>
                </ListItemText>
              </ListItem>

              <ListItem className = {classes.employmentOp}>
                <ListItemText>
                  <Typography className = {classes.employmentInfo}>
                    <span className = {classes.compName}>Renova Group</span>
                    <span className = {classes.locTitle}>, El Segundo - Data Entry Clerk</span>
                  </Typography>

                  <Typography className = {classes.employmentDates}>
                    June 2013 - August, 2013
                  </Typography>

                  <Typography className = {classes.employmentDescription}>
                    Processed invoices using Microsoft Excel.
                  </Typography>
                </ListItemText>
              </ListItem>
            </List>

            <Typography className = {classes.sectionType} id = 'resExperience'>
              Technical Skills
            </Typography>

            <Typography className = {classes.interestsDescript}>
              - Languages: Java, C++, C, JavaScript, Python, PostgreSQL,
              C#, JSX, XHTML, CSS, Assembly
            </Typography>

            <Typography className = {classes.interestsDescript}>
              - Developer Tools &amp; Misc: ReactJS, Material UI, NodeJS, NPM, Docker,
              Java Util, Express, REST APIs, Jest, Puppeteer, JavaFX, PyTorch, NumPy,
              Pandas, Keras
            </Typography>
          </Grid>

          <Grid item xs = {12} sm = {6}>
            <Typography className = {classes.sectionType} id = 'resEducation'>
              Education
            </Typography>

            <List className = {classes.schoolList}>
              <ListItem className = {classes.school}>
                <ListItemText className = {classes.uniInfo}>
                  <Typography className = {classes.schoolNameDate}>
                    <span className = {classes.schoolName}>Santa Monica College </span>
                    <span className = {classes.schoolDates}> | 2017 - 2020</span>
                  </Typography>

                  <Typography className = {classes.schoolMajor}>
                    - Major: Computer Science, B.S.
                  </Typography>

                  <Typography className = {classes.schoolAwards}>
                    - SMC Dean's Honor List: Fall 2017, Spring 2018, Fall 2018, Spring 2019, Fall 2019, Spring 2020
                  </Typography>

                  <Typography className = {classes.schoolSTEMProg}>
                    - Member of the SMC STEM program
                  </Typography>

                  <Typography className = {classes.schoolCompSciClub}>
                    - Participated in SMC's Computer Science club
                  </Typography>

                  <Typography className = {classes.schoolTutor}>
                    - Tutored in SMC's Math lab
                  </Typography>

                  <Typography className = {classes.schoolGPA}>
                    - GPA: 3.7
                  </Typography>
                </ListItemText>
              </ListItem>

              <ListItem className = {classes.school}>
                <ListItemText className = {classes.uniInfo}>
                  <Typography className = {classes.schoolNameDate}>
                    <span className = {classes.schoolName}>University of California, Santa Cruz</span>
                    <span className = {classes.schoolDates}> | 2020 - 2022</span>
                  </Typography>

                  <Typography className = {classes.schoolMajor}>
                    - Major: Computer Science, B.S.
                  </Typography>

                  <Typography className = {classes.schoolMajor}>
                    - Minor: Statistics.
                  </Typography>

                  <Typography className = {classes.schoolMajor}>
                    - Clubs: Santa Cruz Artificial Intelligence Club
                  </Typography>

                  <Typography className = {classes.schoolGPA}>
                    - GPA: 4.0
                  </Typography>
                </ListItemText>
              </ListItem>
            </List>

            <Typography className = {classes.sectionType}>
              Relevant Courses &amp; Strengths &int;
            </Typography>

            <Typography className = {classes.interestsDescript}>
              - Math: Calculus (I, II &amp; III), Linear Algebra,
              Discrete Structures, Probability Theory
            </Typography>

            <Typography className = {classes.interestsDescript}>
              - Physics(Calc/Linear Algebra Based): Mechanics, E&amp;M
              &amp; Fluids, Optics and Waves
            </Typography>
            
            <Typography className = {classes.interestsDescript}>
              - Computer Science: Data Structs and Algorithms, Computer Architecture,
              Web Development, Analysis of Algorithms
            </Typography>

            <Typography className = {classes.sectionTypeCloser} id = 'resSkillsAndInterests'>
              Interests & Skills
            </Typography>

            <Typography className = {classes.interestsDescript}>
              Played tier 1, club hockey where I learned the importance of teamwork, communication, organization and discipline. Fascinated
              by theoretical computer science, math and physics. Passionate about helping mankind enhance its influence among the stars.
            </Typography>
          </Grid>
        </Grid>

        <Hidden xsDown>
          <Grid container className = {classes.projectTemplateContainer}>
            <Grid item sm = {2}>
              <Typography className = {classes.projectTemplate}>
                Project Name
              </Typography>
            </Grid>

            <Grid item sm = {4}>
              <Typography className = {classes.projectTemplate}>
                Project Picture
              </Typography>
            </Grid>

            <Grid item sm = {6}>
              <Typography className = {classes.projectTemplate}>
                Project Description
              </Typography>
            </Grid>
          </Grid>
        </Hidden>

        <Hidden smUp>
          <Typography className = {classes.sectionType}>
            Projects
          </Typography>
        </Hidden>
        

        <Grid container className = {classes.project}>
          <Grid item xs = {12} sm = {2} className = {classes.projectName}>
            <Typography className = {classes.projectNameTypog}>
              Attack On Jupiter
            </Typography>
          </Grid>

          <Grid item xs = {12} sm = {4} className = {classes.projectPictureContainer}>
            <Avatar className = {classes.projectPicture}
              src = {AoJ}
            />
          </Grid>
          <Grid item xs = {12} sm = {6} className = {classes.projectDesc}>
            <Typography className = {classes.projectDescTypog}>
              I, along with three other classmates, designed and deployed a 2-dimensional video game
              (created using Java FX’s API) in which the user has to defeat three bosses. My role in the game’s
              development was lead designer of the UML and lead/full-stack developer of the game itself.
            </Typography>
          </Grid>
        </Grid>

        <Grid container className = {classes.project}>
          <Grid item xs = {12} sm = {2} className = {classes.projectName}>
            <Typography className = {classes.projectNameTypog}>
              Finding Nemo
            </Typography>
          </Grid>

          <Grid item xs = {12} sm = {4} className = {classes.projectPictureContainer}>
            <Avatar className = {classes.projectPicture} src = {FindingNemo}>
              FN
            </Avatar>
          </Grid>
          <Grid item xs = {12} sm = {6} className = {classes.projectDesc}>
            <Typography className = {classes.projectDescTypog}>
              Designed a linked list, stack, queue and binary search tree and integrated them in a maze game
              and created an algorithm to find the exit of the maze based on a depth-first search.
            </Typography>
          </Grid>
        </Grid>

        <Grid container className = {classes.project}>
          <Grid item xs = {12} sm = {2} className = {classes.projectName}>
            <Typography className = {classes.projectNameTypog}>
              Slug Mail
            </Typography>
          </Grid>

          <Grid item xs = {12} sm = {4} className = {classes.projectPictureContainer}>
            <Avatar className = {classes.projectPicture} src = {SlugMail}
            >
              SM
            </Avatar>
          </Grid>
          <Grid item xs = {12} sm = {6} className = {classes.projectDesc}>
            <Typography className = {classes.projectDescTypog}>
              Full stack, responsive web app using Node.js, Express, ReactJS, PostgreSQL, Material UI among other development
              tools. A REST API is implemented. Supports multiple users who are able to check their mailboxes for mail,
              star certain emails, mark emails unread, and many more features. The GitHub&apos;s README
              contains a quick, 3 minute youtube video demonstration of the program.
            </Typography>
          </Grid>
        </Grid>
      </Box>

      <Box className = {classes.resumeFooter}>
        <Typography className = {classes.resumeFooterTypog}>
          Copyright &#169; 2021 Donovan Henry | All Rights Reserved.
        </Typography>

        <Typography className = {classes.resumeFooterTypog}>
          www.donovanhenry.com
        </Typography>
      </Box>
    </div>
  );
}

export default Resume;
