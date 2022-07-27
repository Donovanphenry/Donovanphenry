import React from 'react';
import {useHistory} from 'react-router-dom';

import AppContext from './AppContext';

import './Styles/Resume.css';

import AoJ from './images/AoJ.png';
import PromoterPredictorModel from './images/PromoterPredictorModel.png';
import BstAnalysis from './images/BST_Analysis.png';
import DefDec from './images/DefDec.png';

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
import {FiSun, FiGlobe} from 'react-icons/fi';
import {BiMoon} from 'react-icons/bi';
import {AiFillPhone, AiOutlineMail, AiFillLinkedin, AiFillGithub} from 'react-icons/ai';
import {GiSpiderWeb} from 'react-icons/gi';

import {makeStyles} from '@material-ui/core/styles';

import AppColors from './Styles/AppColors';
import { red } from '@material-ui/core/colors';

const btnWidth = 140;

const useStyles = makeStyles((theme) => ({
  title: {
    margin: theme.spacing(1),
  },

  appBar: {
    width: '100%',
    background: props => props.resumeAppBarColor,
  },

  toolBar: {
    paddingLeft: '0px',
    paddingRight: '0px',
  },

  menuBtn: {
    color: props => props.grey,
    marginLeft: theme.spacing(6),

    [theme.breakpoints.down('xs')]: {
      marginLeft: theme.spacing(2),
    },
  },

  traverseBtn: {
    margin: theme.spacing(1),
    marginLeft: theme.spacing(8),
    width: btnWidth,
  },

  traversalDrawer: {
    fill: '#252627',
  },

  buttonList: {
    background: props => props.resumeBackground,
    width: '100%',
    height: '100%',
  },

  innerDocTraversals: {
    color: props => props.resumePrimary,
  },

  drawerTravBtn: {
    width: btnWidth,
    color: props => props.homePrimary,
    justifyContent: 'flex-start',
  },

  drawerTravDocBtn: {
    width: btnWidth,
    justifyContent: 'flex-start',
    color: props => props.resumePrimary,
  },

  travBtnDivider: {
    background: '#3b3c3d',
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },

  appBarBtnContainer: {
    color: '#252627',
    display: 'flex',
    width: '100%',
  },

  travBtnContainer: {
    color: props => props == AppColors.lightTheme ?
      props.resumeBackground : props.resumePrimary,
    flexGrow: 1,
    flexBasis: 1,
  },

  themeBtnContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
    [theme.breakpoints.down('xs')]: {
      flexGrow: 1,
    },
    paddingRight: theme.spacing(6),
  },

  themeBtn: {
    color: props => props.grey,
  },

  resumeContainer: {
    width: '100%',
    backgroundColor: props => props.resumeBackground,
  },

  resumeContentContainer: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: theme.spacing(2),
    marginLeft: theme.spacing(8),
    marginRight: theme.spacing(8),
    color: props => props.resumePrimary,
    overflow: 'hidden',
    paddingBottom: theme.spacing(2),

    [theme.breakpoints.up('sm')]: {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
    },
    [theme.breakpoints.down('xs')]: {
      marginLeft: theme.spacing(4),
      marginRight: theme.spacing(4),
      marginTop: theme.spacing(4)
    },
  },

  occupation:
  {
    color: props => props.resumePrimary,
  },

  section_title:
  {
    display: 'flex',
    alignItems: 'end',
    fontWeight: 'bold',
    fontSize: '25px',
    marginBottom: '0px',
    marginTop: '0px',

    '&::after': {
      content: '',
      flex: '1',
      height: '2px',
      backgroundColor: '#3f51b5',
    },
  },
  
  resumeFooter: {
    borderTop: props => `2px solid ${props.grey}`,
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
    color: props => props.resumeSecondary,
  },
}));

/**
 * @return {*}
 */
function Resume() {
  const {userTheme, setUserTheme} = React.useContext(AppContext);
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const history = useHistory();
  const classes = useStyles(userTheme);

  const toggleDrawerTraverse = (location) => {
    setDrawerOpen(false);
    history.push(location)
  };

  const experiences = [
    {
      company: 'NASA - GISS',
      location: 'Remote',
      title: 'Intern',
      tech_stack: 'React, WebGL, MapboxGL, Material UI, JSFive',
      dates: 'Jan, 2022 - May, 2022',
      description: [
        'Developed an interactive flight map for the Research Scanning Polarimeter',
        'Modularized data pipeline',
        'Decreased initial render time',
        'Increased frame rate, and enhanced user experience',
        'Wrote, maintained, and distributed a fully functional app as lead programmer of the project'
      ]
    },
    {
      company: 'Infinite Options',
      location: 'Remote',
      title: 'Intern',
      tech_stack: 'React, Material UI, MySQL',
      dates: 'Mar, 2021 - Sep, 2021',
      description: [
        'Created various histograms, and tables based off of the expected value of products, and price differentials between competitors',
        'Contributed in various ways as a front-end React developer',
        'Often brought onto new projects to bring about efficiency increases/refactor code'
      ]
    },
  ];

  const projects = [
    {
      name: 'Deforestation Detector',
      github_link: 'https://github.com/Deforestation-Detector',
      live_link: 'https://deforestationdetector.com',
      tech_stack: 'Python, JavaScript, TensorFlow, NumPy, WebGL, HTML, CSS',
      description: [
        'Web app designed to promote awareness about the devastating effects of deforestation, and detect deforestation in satellite images',
        'Neural network trained on image dataset, made predictions on test dataset',
        'Render of these predictions was created using blender, and an interactive model was created using WebGL'
      ]
    },
    {
      name: 'HTTP Server, and Reverse Proxy',
      github_link: 'https://github.com/Donovanphenry/Server',
      tech_stack: 'C, PThreads',
      description: [
        'Implements multi-threaded server',
        'Reverse Proxy acts as a client to several servers',
        'Log file is maintained to evenly distribute load among available servers',
        'Supports LRU caching with custom cache size',
        'Includes shell scripts for unit testing'
      ]
    },
    {
      name: 'Attack on Jupiter',
      github_link: 'https://github.com/Donovanphenry/Attack-on-Jupiter',
      tech_stack: 'Java, Java Util, JavaFX',
      description: [
        'Designed, and deployed a 2D video-game where user has to defeat 3 bosses in 1-on-1 combat',
        'Created physics engine, health system, user-input system, and combat mechanics',
        'Created user-interface',
      ]
    },
    {
      name: 'ADT Library',
      github_link: 'https://github.com/Donovanphenry/ADT-Library',
      tech_stack: 'C, C++, Java, Python',
      description: [
        "Library with various ADTs, such as linked list, stack, queue, red-black tree, dictionary, graph etc",
        "Designed unit tests for each ADT",
      ]
    },
  ];

  const education = [
    {
      name: 'University of California, Santa Cruz',
      degree: 'B.S. in Computer Science, Minor in Statistics',
      location: 'Santa Cruz, California',
      dates: 'Graduated June 2022',
      accomplishments: [
        "Dean's Honor List in Winter 2021, Spring 2021, Summer 2021, Fall 2021, Winter 2022, Spring 2022",
        'High Honors: Phi Beta Kappa, Cum Laude',
        'Club member of UC Santa Cruz Artificial Intelligence',
        'GPA of 3.84'
      ]
    }
  ]

  const skills = [
    {
      name: 'Frameworks/Libraries',
      list: ['React', 'Material UI', 'NumPy', 'Pandas', 'TensorFlow', 'PyTorch', 'Express']
    },
    {
      name: 'Languages',
      list: ['Java', 'C++', 'C', 'Rust', 'JavaScript', 'Python', 'C#', 'HTML', 'CSS']
    },
    {
      name: 'Utilities',
      list: ['Git', 'Docker', 'Jest', 'Puppeteer', 'Node']
    },
    {
      name: 'Interests',
      list: ['Fascinated by computer science, math, and physics. Passionate about using these to make the world better']
    },
    {
      name: 'Other',
      list: ['Played tier 1 hockey where I learned the importance of teamwork, communication, organization, and discipline']
    },
  ]

  const changeTheme = () => {
    setUserTheme(userTheme == AppColors.darkTheme ? AppColors.lightTheme : AppColors.darkTheme);
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
                      document.getElementById('experience').scrollIntoView(true);
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
                      document.getElementById('education').scrollIntoView(true);
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
                      document.getElementById('skills').scrollIntoView(true);
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
                      document.getElementById('projects').scrollIntoView(true);
                    }}
                  >
                    Projects
                  </Button>
                </ListItem>
              </List>
            </Drawer>
          </Hidden>

          <Box className = {classes.appBarBtnContainer}>
            <Hidden xsDown>
              <Box className = {classes.travBtnContainer}>
                <Button
                  className = {classes.traverseBtn}
                  startIcon = {<HomeIcon />}
                  onClick = {() => history.push('/')}
                  variant = 'outlined'
                  color = 'inherit'
                >
                  Home
                </Button>

                <Button
                  className = {classes.traverseBtn}
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

      <Box className = {classes.resumeContentContainer}>
        <Box className = {'personal-info'} style = {{color: userTheme.resumeSecondary}}>
          <p className = 'name'>
            <span id = 'first-name'>Donovan</span> <span id = 'last-name'>Henry</span>
          </p>

          <p className = {classes.occupation}>
            Software Engineer
          </p>

          <p id = 'location'>
            304 Cliff Street, Santa Cruz, California, 95060
          </p>

          <div>
            <AiFillPhone/> 310-617-9136 |&nbsp;
            <AiOutlineMail/> donovanphenry@gmail.com |&nbsp;
            <FiGlobe/> <a href = 'www.donovanhenry.com' className = 'personal-link' style = {{color: userTheme.resumeSecondary}}> www.donovanhenry.com </a> |&nbsp;
            <AiFillGithub/> <a href = 'https://github.com/Donovanphenry' className = 'personal-link' style = {{color: userTheme.resumeSecondary}}> donovanphenry </a> |&nbsp;
            <AiFillLinkedin /> <a href = 'https://www.linkedin.com/in/donovan-henry/' className = 'personal-link' style = {{color: userTheme.resumeSecondary}}> donovan-henry </a> 
          </div>
        </Box>

        <Box className = {'section'} mt = {1}>
          <p className = 'section-title' id = 'experience'>
            Work Experience
          </p>

          {
            experiences.map(exp => (
              <Box className = {'section-instance'} style = {{color: userTheme.resumeSecondary}}>
                <div className = 'row-one'>
                  <p className = 'section-company'>
                    {exp.company} | <span id = 'instance-title'>{exp.title}</span>
                  </p>

                  <p className = 'instance-location' style = {{color: userTheme.resumePrimary}}>
                    {exp.location}
                  </p>
                </div>

                <div className = 'row-two'>
                  <p className = 'section-stack'>
                    {exp.tech_stack}
                  </p>
                  
                  <p className = 'instance-duration'>
                    {exp.dates}
                  </p>
                </div>

                <ul className = 'section-info'>
                  {
                    exp.description.map(ack => (
                      <li className = 'section-description'>
                        {ack}
                      </li>
                    ))
                  }
                </ul>
              </Box>
            ))
          }
        </Box>

        <Box className = 'section'>
          <p className = 'section-title'>
            Education
          </p>

          {
            education.map(educ => (
              <Box className = {'section-instance'} style = {{color: userTheme.resumeSecondary}}>
                <div className = 'row-one'>
                  <p className = 'section-company'>
                    {educ.name}
                  </p>

                  <p className = 'instance-location' style = {{color: userTheme.resumePrimary}}>
                    {educ.location}
                  </p>
                </div>

                <div className = 'row-two'>
                  <p className = 'section-stack'>
                    {educ.degree}
                  </p>
                  
                  <p className = 'instance-duration'>
                    {educ.dates}
                  </p>
                </div>

                <ul className = 'section-info'>
                  {
                    educ.accomplishments.map(ack => (
                      <li className = 'section-description'>
                        {ack}
                      </li>
                    ))
                  }
                </ul>
              </Box>
            ))
          }
        </Box>

        <Box className = 'section'>
          <p className = 'section-title' id = 'projects'>
            Projects
          </p>

          {
            projects.map(proj => (
              <Box className = {'section-instance'} style = {{color: userTheme.resumeSecondary}}>
                <div className = 'row-one'>
                  <p className = 'section-company'>
                    {proj.name}
                  </p>

                  <div className = 'project-links'>
                    <a href = {proj.github_link} className = 'project-link'>
                      <AiFillGithub />
                      <p className = 'link-name'>Repo</p>
                    </a>

                    {
                      proj.live_link && (
                        <a href = {proj.live_link} className = 'project-link'>
                          <GiSpiderWeb />
                          <p className = {'link-name'}>Live</p>
                        </a>
                      )
                    }
                  </div>
                </div>

                <p className = 'section-stack'>
                  {proj.tech_stack}
                </p>

                <ul className = 'section-info'>
                  {
                    proj.description.map(ack => (
                      <li className = 'section-description'>
                        {ack}
                      </li>
                    ))
                  }
                </ul>
              </Box>
            ))
          }
        </Box>
    
        <Box className = 'section'>
          <p className = 'section-title' id = 'skills'>
            Skills/Interests
          </p>

          {
            skills.map(skill => (
              <Box className = {'skill-instance'} style = {{color: userTheme.resumeSecondary}}>
                <div>
                  <span className = 'skill-type'>
                    {skill.name}
                  </span>

                  <span className = {'skill-list'}>
                    {': ' + skill.list.join(', ')}
                  </span>
                </div>

              </Box>
            ))
          }
        </Box>
      </Box>
    </div>
  );
}

export default Resume;
