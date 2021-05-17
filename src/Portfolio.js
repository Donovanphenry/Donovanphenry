import React from 'react';
import {useHistory} from 'react-router-dom';

import AppColors from './Styles/AppColors';

import PortfolioPicture from './PortfolioPicture';
import AoJ from './images/AoJ.png';
import AoJGIF from './images/AoJGIF.gif';
import FindingNemo from './images/FindingNemo.png';
import FindingNemoGIF from './images/FindingNemoGIF.gif';
import SlugMail from './images/SlugMail.png';
import SlugMailGIF from './images/SlugMailGIF.gif';
// import PromoterPredictorPSFM from './images/PromoterPredictorPSFM.png';
import PromoterPredictorModel from './images/PromoterPredictorModel.png';
import BstAnalysis from './images/BST_Analysis.png';
import Integral from './images/Integral.png';

/* eslint-disable */

import Link from '@material-ui/core/Link';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Hidden from '@material-ui/core/Hidden';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Drawer from '@material-ui/core/Drawer';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';

import SportsHockeyIcon from '@material-ui/icons/SportsHockey';
import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';
import GitHubIcon from '@material-ui/icons/GitHub';
import DescriptionIcon from '@material-ui/icons/Description';

import {makeStyles} from '@material-ui/core/styles';

const btnWidth = 140;

const useStyles = makeStyles((theme) => ({
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
  },

  desktopTravBtnBox: {
    color: '#5e9bf7',
    display: 'flex',
  },

  outerDrawerTravBtn: {
    color: '#5e9bf7',
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

  drawerTravBtn: {
    width: btnWidth,
    justifyContent: 'flex-start',
  },

  drawerTravDocBtn: {
    color: AppColors.portfolioPrimary,
    width: btnWidth,
    justifyContent: 'flex-start',
  },

  jpBtnDivider: {
    background: '#3b3c3d',
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },

  jpContainer: {
    display: 'flex',
    flexDirection: 'column',
  },

  jpContentContainer: {
    display: 'flex',
    flexDirection: 'column',
    background: '#252627',
    color: AppColors.grey,
  },

  jpTitle: {
    color: AppColors.portfolioPrimary,
    display: 'flex',
    justifyContent: 'center',
    overflow: 'auto',
    marginTop: theme.spacing(6),
    marginLeft: theme.spacing(8),
    marginRight: theme.spacing(8),
    borderBottom: '2px solid #ED5565',
  },

  jpTitleTypog: {
    fontWeight: 'bold',
    textAlign: 'center',

    [theme.breakpoints.up('sm')]: {
      fontSize: '50px',
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '40px',
    },
  },

  jpSkills: {
    marginTop: theme.spacing(14),
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    overflow: 'auto',

    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(8),
      marginRight: theme.spacing(8),
    },
    [theme.breakpoints.down('xs')]: {
      marginLeft: theme.spacing(3),
      marginRight: theme.spacing(3),
    },
  },

  jpSkillsTitleTypog: {
    color: AppColors.portfolioPrimary,
    fontWeight: 'bold',

    [theme.breakpoints.up('sm')]: {
      fontSize: '60px',
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '40px',
    },
  },

  jpSkillsTree: {
    display: 'flex',

    [theme.breakpoints.up('md')]: {
      flexDirection: 'row',
    },
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },

  jpSkillsPaperBox: {
    display: 'flex',

    [theme.breakpoints.up('md')]: {
      flexDirection: 'row',
      flexGrow: 1,
      flexBasis: 1,
    },
    [theme.breakpoints.between('sm', 'md')]: {
      flexDirection: 'row',
    },
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
    },
  },

  jpSkillsPaper: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(7),
    color: AppColors.grey,
    display: 'flex',
    flexDirection: 'column',
    margin: theme.spacing(1),
    background: '#252627',

    [theme.breakpoints.up('sm')]: {
      flexBasis: 1,
      flexGrow: 1,
    },
    [theme.breakpoints.down('xs')]: {
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2),
    },
  },

  jpSkillsTypog: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(4),

    [theme.breakpoints.down('xs')]: {
      fontSize: '14px',
    },
    [theme.breakpoints.up('sm')]: {
      fontSize: '18px',
    },
  },

  skillType: {
    color: '#878685a4',
    fontWeight: 'bold',

    [theme.breakpoints.down('sm')]: {
      fontSize: '20px',
    },
  },

  jpProjects: {
    display: 'flex',
    flexDirection: 'column',
    overflow: 'auto',
    marginTop: theme.spacing(16),
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(8),
      marginRight: theme.spacing(8),
    },
    [theme.breakpoints.down('xs')]: {
      marginLeft: theme.spacing(3),
      marginRight: theme.spacing(3),
    },
  },

  jpProjectsTitleTypog: {
    fontWeight: 'bold',
    color: AppColors.portfolioPrimary,
    textAlign: 'center',

    [theme.breakpoints.up('sm')]: {
      fontSize: '60px',
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '40px',
    },
  },

  jpProjectsGrid: {
    display: 'grid',
    color: AppColors.grey,
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(3),

    [theme.breakpoints.up('lg')]: {
      gridTemplateColumns: '1fr 1fr 1fr 1fr',
    },
    [theme.breakpoints.down('md')]: {
      gridTemplateColumns: '1fr 1fr',
    },
    [theme.breakpoints.down('xs')]: {
      gridTemplateColumns: '1fr',
    },
  },

  jpProjectPaper: {
    background: '#252627',
    color: AppColors.grey,
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },

  portfolioPaperPic: {
    width: '100%',
  },

  jpProjectInfo: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: theme.spacing(3),
  },

  jpProjectNameTypog: {
    fontWeight: 'bold',
    color: AppColors.portfolioPrimary,
    borderTop: '2px solid #ED5565',
    paddingTop: theme.spacing(3),
    marginTop:theme.spacing(2),
    marginBottom: theme.spacing(2),
    textAlign: 'center',
    width: '100%',

    [theme.breakpoints.up('sm')]: {
      fontSize: '18px',
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '16px',
    },
  },

  jpProjectDescTypog: {
    [theme.breakpoints.up('sm')]: {
      fontSize: '18px',
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '16px',
    },
  },

  projectGitHubLink: {
    color: AppColors.grey,
  },

  jpFooter: {
    borderTop: `2px solid ${AppColors.grey}`,
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(1),
    marginLeft: theme.spacing(8),
    marginRight: theme.spacing(8),
    padding: theme.spacing(2),
    display: 'flex',
    justifyContent: 'center',
    overflow: 'auto',

    [theme.breakpoints.down('sm')]: {
      fontSize: '14px',
      marginLeft: theme.spacing(2),
      marginRight: theme.spacing(2),
    },
  },
}));

/**
 * @return {*}
 */
function Portfolio() {
  const history = useHistory();
  const classes = useStyles();

  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const toggleDrawerTraverse = (location) => {
    setDrawerOpen(false);
    history.push(location);
  };

  return (
    <Box className = {classes.jpContainer} elevation = {24}>
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
                <ListItem className = {classes.outerDrawerTravBtn}>
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

                <ListItem className = {classes.outerDrawerTravBtn}>
                  <Button
                    className = {classes.drawerTravBtn}
                    startIcon = {<DescriptionIcon />}
                    onClick = {() => toggleDrawerTraverse('/Resume')}
                    variant = 'outlined'
                    color = 'inherit'
                  >
                    Resume
                  </Button>
                </ListItem>

                <Divider
                  className = {classes.jpBtnDivider}
                />

                <ListItem>
                  <Button
                    className = {classes.drawerTravDocBtn}
                    startIcon = {<SportsHockeyIcon />}
                    onClick = {() => {
                      let element = document.getElementById('jpSkills');
                      element.scrollIntoView(true);
                      setDrawerOpen(false);
                    }}
                    color = 'inherit'
                    variant = 'outlined'
                  >
                    Skills
                  </Button>
                </ListItem>

                <ListItem>
                  <Button
                    className = {classes.drawerTravDocBtn}
                    startIcon = {<DescriptionIcon />}
                    onClick = {() => {
                      setDrawerOpen(false);
                      document.getElementById('jpProjects').scrollIntoView(true);
                    }}
                    color = 'inherit'
                    variant = 'outlined'
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
                startIcon = {<DescriptionIcon />}
                onClick = {() => history.push('/Resume')}
                variant = 'contained'
                color = 'inherit'
              >
                Resume
              </Button>
            </Box>
          </Hidden>
        </Toolbar>
      </AppBar>

      <Paper
        className = {classes.jpContentContainer}
        // column
        elevation = {20}
      >
        <Box className = {classes.jpTitle}>
          <Typography className = {classes.jpTitleTypog}>
            Donovan Henry&apos;s Job Portfolio
          </Typography>
        </Box>

        <Box
          className = {classes.jpSkills}
          // column
          id = 'jpSkills'
        >

          <Typography className = {classes.jpSkillsTitleTypog}>
            Skills
          </Typography>

          <Box
            className = {classes.jpSkillsTree}
            // row when strictly greater than sm
            // columns when less than or equal to sm
          >
            <Box
              className = {classes.jpSkillsPaperBox}
              // row when strictly greater than xs
              // column when less than or equal to xs
            >
              <Paper
                className = {classes.jpSkillsPaper}
                elevation = {12}
                // always column
                // flex basis and grow set when strictly greater than xs
              >
                <Typography className = {classes.jpSkillsTypog}>
                  <span className = {classes.skillType}>Languages</span>
                </Typography>

                <Typography>Java</Typography>
                <Typography>C++</Typography>
                <Typography>JavaScript</Typography>
                <Typography>Python</Typography>
                <Typography>C</Typography>
                <Typography>C#</Typography>
                <Typography>XHTML</Typography>
                <Typography>CSS</Typography>
                <Typography>Assembly</Typography>
                <Typography>PostgreSQL</Typography>
                <Typography>Scheme, OCaml &amp; Smalltalk</Typography>
              </Paper>

              <Paper className = {classes.jpSkillsPaper} elevation = {12}>
                <Typography className = {classes.jpSkillsTypog}>
                  <span className = {classes.skillType}>Frameworks/Libraries</span>
                </Typography>

                <Typography>ReactJS</Typography>
                <Typography>Material UI</Typography>
                <Typography>NumPy</Typography>
                <Typography>Pandas</Typography>
                <Typography>Keras</Typography>
                <Typography>PyTorch</Typography>
                <Typography>Java Util</Typography>
                <Typography>JavaFX</Typography>
              </Paper>
            </Box>

            <Box className = {classes.jpSkillsPaperBox}>
              <Paper className = {classes.jpSkillsPaper} elevation = {12}>
                <Typography className = {classes.jpSkillsTypog}>
                  <span className = {classes.skillType}>Server Tier</span>
                </Typography>

                <Typography>NodeJS</Typography>
                <Typography>Express</Typography>
                <Typography>OpenAPI</Typography>
              </Paper>

              <Paper className = {classes.jpSkillsPaper} elevation = {12}>
                <Typography className = {classes.jpSkillsTypog}>
                  <span className = {classes.skillType}>Other</span>
                </Typography>

                <Typography>Git</Typography>
                <Typography>GitHub</Typography>
                <Typography>Docker</Typography>
                <Typography>Jest & Puppeteer</Typography>
                <Typography>Calculus I, II, III</Typography>
                <Typography>Computer Architecture</Typography>
                <Typography>Web Development</Typography>
                <Typography>Linear Algebra</Typography>
                <Typography>Discrete Structures</Typography>
                <Typography>Probability Theory</Typography>
                <Typography>Calc. Based Mechanics</Typography>
                <Typography>Calc. Based Electromagnetism</Typography>
                <Typography>Calc. Based Fluids, Optics & Waves</Typography>
              </Paper>
            </Box>
          </Box>
        </Box>

        <Box
          className = {classes.jpProjects}
          id = 'jpProjects'
        >
          <Typography className = {classes.jpProjectsTitleTypog}>
            My Projects
          </Typography>

          <Box className = {classes.jpProjectsGrid}>
            <Paper className = {classes.jpProjectPaper} elevation = {12}>
              <Link
                href = "https://github.com/Donovanphenry/Attack-on-Jupiter"
              >
                <PortfolioPicture
                  className = {classes.portfolioPaperPic}
                  statPicSrc = {AoJ}
                  dynamPicSrc = {AoJGIF}
                />
              </Link>

              <Box className = {classes.jpProjectInfo}>
                <Link
                  href = "https://github.com/Donovanphenry/Attack-on-Jupiter"
                  className = {classes.projectGitHubLink}
                >
                  <IconButton color = 'inherit'>
                    <GitHubIcon />
                  </IconButton>
                </Link>

                <Typography className = {classes.jpProjectNameTypog}>
                  Attack On Jupiter
                </Typography>

                <Typography className = {classes.jpProjectDescTypog}>
                  &nbsp;&nbsp;&nbsp;&nbsp;I,
                  along with three other classmates, designed and
                  deployed a 2-dimensional
                  video game (created using Java FX’s API) in which
                  the user has to defeat three
                  bosses. My role in the game’s development was lead
                  designer of the UML and
                  lead/full-stack developer of the game itself.
                </Typography>
              </Box>
            </Paper>

            <Paper className = {classes.jpProjectPaper} elevation = {12}>
              <Link
                href = "https://github.com/Donovanphenry/FInding-Nemo"
              >
                <PortfolioPicture
                  className = {classes.portfolioPaperPic}
                  statPicSrc = {FindingNemo}
                  dynamPicSrc = {FindingNemoGIF}
                />
              </Link>

              <Box className = {classes.jpProjectInfo}>
                <Link
                  href = "https://github.com/Donovanphenry/FInding-Nemo"
                  className = {classes.projectGitHubLink}
                >
                  <IconButton color = 'inherit'>
                    <GitHubIcon />
                  </IconButton>
                </Link>

                <Typography className = {classes.jpProjectNameTypog}>
                  Finding Nemo
                </Typography>

                <Typography className = {classes.jpProjectDescTypog}>
                  &nbsp;&nbsp;&nbsp;&nbsp;I created a maze game in
                  which a program must find the exit of a maze. To
                  find the exit, I built stack and queue modules,
                  and used them to implement depth first search
                  and breadth first search.
                </Typography>
              </Box>
            </Paper>

            <Paper className = {classes.jpProjectPaper} elevation = {12}>
              <Link
                href = "https://github.com/Donovanphenry/Slug-Mail"
              >
                <PortfolioPicture
                  className = {classes.portfolioPaperPic}
                  statPicSrc = {SlugMail}
                  dynamPicSrc = {SlugMailGIF}
                />
              </Link>

              <Box className = {classes.jpProjectInfo}>
                <Link
                  href = "https://github.com/Donovanphenry/Slug-Mail"
                  className = {classes.projectGitHubLink}
                >
                  <IconButton color = 'inherit'>
                    <GitHubIcon />
                  </IconButton>
                </Link>

                <Typography className = {classes.jpProjectNameTypog}>
                  Slug Mail
                </Typography>

                <Typography className = {classes.jpProjectDescTypog}>
                  &nbsp;&nbsp;&nbsp;&nbsp;Full
                  stack, responsive web app using NodeJS,
                  Express, ReactJS, PostgreSQL, Material UI
                  among other development
                  tools. A REST API is implemented. Supports multiple
                  users who are able to check their mailboxes for mail,
                  star certain emails, mark emails unread, and many more
                  features. The GitHub&apos;s README
                  contains a quick, 3 minute youtube video demonstration
                  of the program.
                </Typography>
              </Box>
            </Paper>

            <Paper className = {classes.jpProjectPaper} elevation = {12}>
              <Link
                href = "https://github.com/Donovanphenry/Hide_And_Seq"
              >
                <PortfolioPicture
                  className = {classes.portfolioPaperPic}
                  statPicSrc = {PromoterPredictorModel}
                  dynamPicSrc = {PromoterPredictorModel}
                />
              </Link>

              <Box className = {classes.jpProjectInfo}>
                <Link
                  href = "https://github.com/Donovanphenry/Hide_And_Seq"
                  className = {classes.projectGitHubLink}
                >
                  <IconButton color = 'inherit'>
                    <GitHubIcon />
                  </IconButton>
                </Link>

                <Typography className = {classes.jpProjectNameTypog}>
                  Hide &amp; Seq
                </Typography>

                <Typography className = {classes.jpProjectDescTypog}>
                  &nbsp;&nbsp;&nbsp;&nbsp;Machine learning
                  project with the goal of detecting the position
                  of a promoter in a given DNA sequence.
                  My partner and I have collected, cleansed,
                  and analyzed data that was collected from EPDNew.
                  We are currently constructing the model, which will
                  be a convolutional neural network (CNN) combined
                  with a BILSTM. If interested, see the Jupiter
                  Notebook on the GitHub repository.
                </Typography>
              </Box>
            </Paper>

            <Hidden mdDown>
              <Box />
            </Hidden>

            <Paper className = {classes.jpProjectPaper} elevation = {12}>
              <Link
                href = "https://github.com/Donovanphenry/ADT-Library"
              >
                <PortfolioPicture
                  className = {classes.portfolioPaperPic}
                  statPicSrc = {BstAnalysis}
                  dynamPicSrc = {BstAnalysis}
                />
              </Link>

              <Box className = {classes.jpProjectInfo}>
                <Link
                  href = "https://github.com/Donovanphenry/ADT-Library"
                  className = {classes.projectGitHubLink}
                >
                  <IconButton color = 'inherit'>
                    <GitHubIcon />
                  </IconButton>
                </Link>

                <Typography className = {classes.jpProjectNameTypog}>
                  ADT Library
                </Typography>

                <Typography className = {classes.jpProjectDescTypog}>
                  &nbsp;&nbsp;&nbsp;&nbsp;Library with different
                  ADTs implemented by me throughout the years. Each
                  implementation contains a client module that uses
                  the data structure and a blackbox module that unit tests
                  it. The languages used are C, C++ and Java, distinguished
                  by different subdirectories in the repo. The different
                  ADTs implemented thus far are a linked list, stack, queue,
                  binary search tree, red-black tree, dictionary, and a
                  graph, which is capable of breadth-first and
                  depth-first search. I've also implemented a BigInteger
                  ADT which can perform operations on arbitrarily large
                  integers, so long as the computer has space for it.
                </Typography>
              </Box>
            </Paper>

            <Paper className = {classes.jpProjectPaper} elevation = {12}>
              <Link
                href = "https://github.com/Donovanphenry/Symbolic-Calculator"
              >
                <PortfolioPicture
                  className = {classes.portfolioPaperPic}
                  statPicSrc = {Integral}
                  dynamPicSrc = {Integral}
                />
              </Link>

              <Box className = {classes.jpProjectInfo}>
                <Link
                  href = "https://github.com/Donovanphenry/Symbolic-Calculator"
                  className = {classes.projectGitHubLink}
                >
                  <IconButton color = 'inherit'>
                    <GitHubIcon />
                  </IconButton>
                </Link>

                <Typography className = {classes.jpProjectNameTypog}>
                  Symbolic Calculator
                </Typography>

                <Typography className = {classes.jpProjectDescTypog}>
                  &nbsp;&nbsp;&nbsp;&nbsp;Hub for mathematical
                  operations covered in calculus and linear algebra
                  such as integration, derivatives, matrix multiplication,
                  vector operations, eigen decompositions etc. Currently
                  under construction, but as of right now, many derivatives
                  can be calculated and most basic matrix operations can
                  be performed.
                </Typography>
              </Box>
            </Paper>
          </Box>
        </Box>
      </Paper>

      <Typography className = {classes.jpFooter}>
        Copyright &#169; 2021 Donovan Henry | All Rights Reserved.
      </Typography>
    </Box>
  );
}

export default Portfolio;