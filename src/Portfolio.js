import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';

import AppColors from './Styles/AppColors';
import AppContext from './AppContext';
import './Styles/Portfolio.css'

import PortfolioPicture from './PortfolioPicture';
import AoJ from './images/AoJ.png';
import AoJGIF from './images/AoJGIF.gif';
import SlugMail from './images/SlugMail.png';
import SlugMailGIF from './images/SlugMailGIF.gif';
import PromoterPredictorModel from './images/PromoterPredictorModel.png';
import BstAnalysis from './images/BST_Analysis.png';
import Mancala_AI from './images/Mancala-AI.png';
import Model_See_Model_Do from './images/Model-See-Model-Do.png';
import Snake_Pic from './images/Snake-Pic.png';
import Snake from './images/Snake.gif';
import DefDec from './images/DefDec.png';
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

import {FiSun} from 'react-icons/fi';
import {BiMoon} from 'react-icons/bi';
import {GiBrainFreeze} from 'react-icons/gi';
import {MdWeb} from 'react-icons/md';
import {VscCircuitBoard} from 'react-icons/vsc';
import {SiPython, SiMathworks, SiDocker, SiMaterialUi} from 'react-icons/si';

import SportsHockeyIcon from '@material-ui/icons/SportsHockey';
import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';
import GitHubIcon from '@material-ui/icons/GitHub';
import DescriptionIcon from '@material-ui/icons/Description';
import AllInclusiveIcon from '@material-ui/icons/AllInclusive';

import {makeStyles} from '@material-ui/core/styles';

const btnWidth = 140;

const useStyles = makeStyles((theme) => ({
  appBar: {
    background: props => props == AppColors.lightTheme ?
      props.portfolioPrimary : props.portfolioBackground2,
  },

  toolBar: {
    paddingLeft: '0px',
    paddingRight: '0px',
  },

  appBarBtnContainer: {
    width: '100%',
    display: 'flex',
    color: props => props.portfolioBackground,
  },

  traversalBtnContainer: {
    display: 'flex',
    flexGrow: '1',
    flexBasis: '1',
    color: props => props == AppColors.lightTheme ?
      props.portfolioBackground : props.portfolioPrimary,
  },

  appBarThemeBtnContainer: {
    paddingRight: theme.spacing(6),
    flexGrow: '1',
    display: 'flex',
    justifyContent: 'flex-end',
    color: props => props.portfolioBackground,
  },

  themeBtn: {
    color: '#BEBEBE',
  },

  menuBtn: {
    color: props => props.grey,
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
  },

  traversalDrawer: {
    fill: props => props.portfolioBackground,
  },

  buttonList: {
    background: props => props.portfolioBackground,
    width: '100%',
    height: '100%',
  },

  drawerTravBtn: {
    width: btnWidth,
    color: props => props.homePrimary,
    justifyContent: 'flex-start',
  },

  drawerTravDocBtn: {
    color: props => props.portfolioPrimary,
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
    background: props => props.portfolioBackground,
  },

  jpContentContainer: {
    display: 'flex',
    flexDirection: 'column',
    background: props => props.portfolioBackground,
    color: props => props.grey,
  },

  jpTitle: {
    color: props => props.portfolioPrimary,
    display: 'flex',
    justifyContent: 'center',
    overflow: 'auto',
    marginTop: theme.spacing(6),
    marginLeft: theme.spacing(8),
    marginRight: theme.spacing(8),
    borderBottom: props => `2px solid ${props.portfolioPrimary}`,
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
    color: props => props.portfolioPrimary,
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
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3),
    color: props => props.grey,
    display: 'flex',
    flexDirection: 'column',
    margin: theme.spacing(1),
    background: props => props.portfolioBackground2,
    maxWidth: '700px',

    [theme.breakpoints.up('sm')]: {
      flexBasis: 1,
      flexGrow: 1,
    },
    [theme.breakpoints.down('xs')]: {
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2),
    },
  },

  jpSkillsSectionTitle: {
    borderBottom: props => `2px solid ${props.grey}`,
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(4),
    paddingBottom: theme.spacing(1),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  jpSkillsTypog: {
    color: props => props.portfolioPrimary,
    fontWeight: 'bold',
    fontSize: '20px',
    justify: 'center',
    textAlign: 'center',
    marginRight: theme.spacing(1),
  },

  jpSkillsIcon: {
    fontSize: '20px',
    color: props => props.portfolioPrimary,
  },

  jpSkill: {
    color: props => props.portfolioSecondary,
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
    color: props => props.portfolioPrimary,
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
    color: props => props.grey,
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
    background: props => props.portfolioBackground2,
    color: props => props.grey,
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    maxWidth: '700px',
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
    color: props => props.portfolioPrimary,
    borderTop: props => `2px solid ${props.portfolioPrimary}`,
    paddingTop: theme.spacing(3),
    marginTop:theme.spacing(2),
    marginBottom: theme.spacing(1),
    textAlign: 'center',
    width: '100%',

    [theme.breakpoints.up('sm')]: {
      fontSize: '22px',
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '20px',
    },
  },

  jpProjectTechStack: {
    color: props => props.portfolioPrimary,
    fontStyle: 'italic',
    marginBottom: theme.spacing(1),
    textAlign: 'center',
    fontWeight: 'bold',
  },

  jpProjectDescTypog: {
    color: props => props.portfolioSecondary,

    [theme.breakpoints.up('sm')]: {
      fontSize: '18px',
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '16px',
    },
  },

  projectGitHubLink: {
    color: props => props.portfolioSecondary,
  },

  jpFooterContainer: {
    borderTop: props => `2px solid ${props.grey}`,
    display: 'flex',
    flexDirection: 'column',
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(1),
    marginLeft: theme.spacing(8),
    marginRight: theme.spacing(8),
    padding: theme.spacing(2),
    justifyContent: 'center',

    [theme.breakpoints.down('sm')]: {
      fontSize: '14px',
      marginLeft: theme.spacing(2),
      marginRight: theme.spacing(2),
    },
  },

  jpFooterTypogs: {
    color: props => props.portfolioSecondary,
    textAlign: 'center',
  },
}));

/**
 * @return {*}
 */
function Portfolio() {
  const {userTheme, setUserTheme} = React.useContext(AppContext);
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const defaultFilter = {
    All: true,
    AI: false,
    SWE: false,
    Web: false,
  };
  const [projectFilters, setProjectFilters] = useState(defaultFilter);
  const history = useHistory();
  const classes = useStyles(userTheme);


  const toggleDrawerTraverse = (location) => {
    setDrawerOpen(false);
    history.push(location);
  };

  const changeTheme = () => {
    const newTheme = userTheme === AppColors.darkTheme ?
      AppColors.lightTheme : AppColors.darkTheme;
    setUserTheme(newTheme);
  };

  const projects = [
    {
      name: 'Deforestation Detector',
      main_link: 'https://deforestationdetector.com',
      github_link: 'https://github.com/Deforestation-Detector',
      static_src: DefDec,
      dynamic_src: DefDec,
      description: 'Machine learning and web gl project in which deep learning team collected data of satellite images ' +
        'and trained a neural network on said images. After this, a 3x3 grid of images were stitched together and the ' +
        'model made predictions on those images. The web team then created a rendering of those predictions using blender and web gl. ' +
        'The motivation of this project was to promote awareness about the devastating effects and extent of deforestation.',
      project_type: {
        All: true,
        AI: true,
        Web: true,
      },
      stack: 'Web-gl, Python, PyData, Tensorflow'
    },
    {
      name: 'Snek',
      main_link: 'https://github.com/Donovanphenry/Snake-AI',
      github_link: 'https://github.com/Donovanphenry/Snake-AI',
      static_src: Snake_Pic,
      dynamic_src: Snake,
      description: 'I, along with three other classmates, designed and deployed a 2-dimensional video game (created using Java FX’s API) in ' +
        'which the user has to defeat three bosses. My role in the game’s development was lead designer of the UML and lead/full-stack ' +
        'developer of the game itself.',
      project_type: {
        All: true,
        AI: true,
      },
      stack: 'Python, PyGame, NumPy'
    },
    {
      name: 'Attack on Jupiter',
      main_link: 'https://github.com/Donovanphenry/Attack-on-Jupiter',
      github_link: 'https://github.com/Donovanphenry/Attack-on-Jupiter',
      static_src: AoJ,
      dynamic_src: AoJGIF,
      description: 'I, along with three other classmates, designed and deployed a 2-dimensional video game (created using Java FX’s API) in which ' +
        'the user has to defeat three bosses. My role in the game’s development was lead designer of the UML and lead/full-stack developer of the game itself.',
      project_type: {
        All: true,
        SWE: true,
      },
      stack: 'Java, Java.util, JavaFX'
    },
    {
      name: 'Slug Mail',
      main_link: 'https://github.com/Donovanphenry/Slug-Mail',
      github_link: 'https://github.com/Donovanphenry/Slug-Mail',
      static_src: SlugMail,
      dynamic_src: SlugMailGIF,
      description: "Full stack, responsive web app using NodeJS, Express, ReactJS, PostgreSQL, Material UI among other development tools. " +
        "A REST API is implemented. Supports multiple users who are able to check their mailboxes for mail, star certain emails, mark emails " +
        "unread, and many more features. The GitHub's README contains a quick, 3 minute youtube video demonstration of the program.",
      project_type: {
        All: true,
        Web: true,
      },
      stack: 'Node.js, Express.js, React.js, PostgreSQL'
    },
    {
      name: 'Hide and Seq',
      main_link: 'https://github.com/Donovanphenry/Hide_And_Seq',
      github_link: 'https://github.com/Donovanphenry/Hide_And_Seq',
      static_src: PromoterPredictorModel,
      dynamic_src: PromoterPredictorModel,
      description: 'Machine learning project with the goal of detecting the position of a promoter in a given DNA sequence. My partner and ' +
        'I have collected, cleansed, and analyzed data that was collected from EPDNew. We are currently constructing the model, which will be ' +
        'a convolutional neural network (CNN) combined with a BiLSTM. If interested, more information on it can be found on my GitHub repository.',
      project_type: {
        All: true,
        AI: true,
      },
      stack: 'Python, PyData, Tensorflow, SeqIO'
    },
    {
      name: 'Mancala',
      main_link: 'https://github.com/Donovanphenry/Mancala-AI',
      github_link: 'https://github.com/Donovanphenry/Mancala-AI',
      static_src: Mancala_AI,
      dynamic_src: Mancala_AI,
      description: "Game A.I. built to play mancala using mini-max, and mini-max with α-β pruning. Interact with the game through the command-line. " +
        "One can choose to play against it, or have two A.I.'s play against one another by providing which player the human would like to be as the " +
        "second argument to the command-line. Choosing a player number other than 1 or 2 will pit two A.I. against each other. The first argument is " +
        "the player that will move first. As is, the AI will be able to see 4 moves ahead. One can change this depth, but may run into RAM issues if the " +
        "depth gets too high.",
      project_type: {
        All: true,
        AI: true,
      },
      stack: 'Python',
    },
    {
      name: 'ADT Library',
      main_link: 'https://github.com/Donovanphenry/ADT-Library',
      github_link: 'https://github.com/Donovanphenry/ADT-Library',
      static_src: BstAnalysis,
      dynamic_src: BstAnalysis,
      description: "Library with different ADTs implemented by me throughout the years. Each implementation contains a client module that uses the " +
        "data structure and a blackbox module that unit tests it. The languages used are C and C++, distinguished by different subdirectories in the " +
        "repo. The different ADTs implemented thus far are a linked list, stack, queue, binary search tree, red-black tree, dictionary, and a graph, " +
        "which is capable of breadth-first and depth-first search. I've also implemented a BigInteger ADT which can perform operations on arbitrarily " +
        "large integers, so long as the computer has space for it.",
      project_type: {
        All: true,
        SWE: true,
      },
      stack: 'C, C++'
    },
    {
      name: 'Model See Model Do',
      main_link: 'https://github.com/Donovanphenry/Model-See-Model-Do',
      github_link: 'https://github.com/Donovanphenry/Model-See-Model-Do',
      static_src: Model_See_Model_Do,
      dynamic_src: Model_See_Model_Do,
      description: "Image recognition model built with TensorFlow, utilizing transfer learning. The goal of the model is to label the species of an " +
        "animal, given a photograph of it. An Xception base model is passed into a feed-forward network. Each dense layer has an HE initializer, is " +
        "batch normalized, and is ReLU activated, except a softmax for the output layer. See the Google Colab if interested in more details. A testing " +
        "accuracy of 99.9% is achieved, with a validation accuracy of 97%.",
      project_type: {
        All: true,
        AI: true,
      },
      stack: 'Python, NumPy, Tensorflow'
    },
  ];

  const filters = [
    {
      type: 'Web',
      icon: <MdWeb/>
    },
    {
      type: 'AI',
      icon: <GiBrainFreeze/>
    },
    {
      type: 'SWE',
      icon: <VscCircuitBoard/>
    }
  ];

  const handleFilterClicked = (filter_type) => {
    const changeFilters = () => {
      const new_filters = {
        ...projectFilters,
      };
      new_filters[filter_type] = !projectFilters[filter_type];

      setProjectFilters(new_filters);
    };

    return changeFilters;
  };

  const skills = [
    {
      name: 'Languages',
      icon: <SiPython className = {classes.jpSkillsIcon} />,
      skill_list: [
        'Java',
        'C++',
        'JavaScript',
        'Python',
        'C',
        'C#',
        'HTML',
        'CSS',
        'Assembly',
        'PostgreSQL',
        'Lisp'
      ],
    },
    {
      name: 'Frameworks / Libraries',
      icon: <SiMaterialUi className = {classes.jpSkillsIcon} />,
      skill_list: [
        'React',
        'Material UI',
        'NumPy',
        'Pandas',
        'TensorFlow',
        'PyTorch',
        'Java Util',
        'JavaFX'
      ],
    },
    {
      name: 'Relevant Coursework',
      icon: <SiMathworks className = {classes.jpSkillsIcon} />,
      skill_list: [
        'Calculus I, II, III',
        'Differential Equations',
        'Linear Algebra',
        'Discrete Structures',
        'Probability Theory',
        'Computer Architecture',
        'Web Development',
        'Data Structures and Algorithms',
        'Applied Machine Learning',
        'Artificial Intelligence',
        'Calc. Based Mechanics',
        'Calc. Based Electromagnetism',
        'Calc. Based Fluids, Optics and Waves'
      ],
    },
    {
      name: 'Other',
      icon: <SiDocker className = {classes.jpSkillsIcon} />,
      skill_list: [
        'Git',
        'GitHub',
        'Docker',
        'Jest and Puppeteer',
        'Node.js',
        'Express',
        'OpenAPI',
      ],
    }
  ];

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

          <Box className = {classes.appBarBtnContainer}>
            <Hidden xsDown>
              <Box className = {classes.traversalBtnContainer}>
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
                  startIcon = {<DescriptionIcon />}
                  onClick = {() => history.push('/Resume')}
                  variant = 'outlined'
                  color = 'inherit'
                >
                  Resume
                </Button>
              </Box>
            </Hidden>

            <Box className = {classes.appBarThemeBtnContainer}>
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

      <Paper
        className = {classes.jpContentContainer}
        // column
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

          <div className = 'my-skills'>
            {
              skills.map(skill => (
                <Paper
                  className = {classes.jpSkillsPaper}
                >
                  <Box className = {classes.jpSkillsSectionTitle}>
                    <Typography className = {classes.jpSkillsTypog}>
                      {skill.name}
                    </Typography>
                    
                    {skill.icon}
                  </Box>


                  {
                    skill.skill_list.map(skill_element => (
                      <Typography key = {`${skill.name} ${skill_element}`} className = {classes.jpSkill}>{skill_element}</Typography>
                    ))
                  }

                </Paper>
              ))
            }
          </div>
        </Box>

        <Box
          className = {classes.jpProjects}
          id = 'jpProjects'
        >
          <Typography className = {classes.jpProjectsTitleTypog}>
            My Projects
          </Typography>

          <div className = 'project-filter'>
            {
              filters.map(filter => (
                <Button
                  className = {classes.homeDrawerTravDocBtn}
                  startIcon = {filter.icon}
                  onClick = {handleFilterClicked(filter.type)}
                  key = {filter.type}
                  style = {{color: projectFilters[filter.type] ? userTheme.portfolioPrimary : userTheme.portfolioSecondary}}
                  variant = 'text'
                >
                  {filter.type}
                </Button>
              ))
            }
          </div>

          <div className = 'project-container'>
            {
              projects.filter(project => {
                for (const filter in projectFilters)
                {
                  if (projectFilters[filter] && (filter in project.project_type) === false)
                    return false;
                }

                return true;
              }).map(project => (
                <Paper
                  className = {classes.jpProjectPaper}
                  key = {`${project.name} paper`}
                >
                  <Link
                    href = {project.main_link}
                  >
                    <PortfolioPicture
                      className = {classes.portfolioPaperPic}
                      statPicSrc = {project.static_src}
                      dynamPicSrc = {project.dynamic_src}
                    />
                  </Link>

                  <Box 
                    className = {classes.jpProjectInfo}
                  >
                    <div
                      className = 'project-links-container'
                    >
                      <Link
                        href = {project.github_link}
                        className = {classes.projectGitHubLink}
                      >
                        <IconButton color = 'inherit'>
                          <GitHubIcon />
                        </IconButton>
                      </Link>
                    </div>

                    <Typography className = {classes.jpProjectNameTypog}>
                      {project.name}
                    </Typography>

                    <Typography className = {classes.jpProjectTechStack}>
                      {project.stack}
                    </Typography>

                    <Typography className = {classes.jpProjectDescTypog}>
                      {project.description}
                    </Typography>
                  </Box>
                </Paper>
              ))
            }
          </div>
        </Box>
      </Paper>

      <Box className = {classes.jpFooterContainer}>
        <Typography className = {classes.jpFooterTypogs}>
          Copyright &#169; 2021 Donovan Henry | All Rights Reserved.
        </Typography>

        <Typography className = {classes.jpFooterTypogs}>
          www.donovanhenry.com
        </Typography>
      </Box>
    </Box>
  );
}

export default Portfolio;