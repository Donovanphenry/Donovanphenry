import React from 'react';

import {makeStyles} from '@material-ui/core/styles';
import AppContext from './AppContext';
import AppColors from './Styles/AppColors';

const useStyles = makeStyles((theme) => ({
  jpProjectPaperPic: (props) => ({
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      height: theme.spacing(60),
    },
    [theme.breakpoints.down('xs')]: {
      height: theme.spacing(40),
    },
    opacity: props.hovering ? '.5' : '1.0',

    borderBottom: props.currTheme == 'light' ? `2px solid black` : '',
  }),
}));

/**
 * @return {*}
 * @param {*} props
 */
function PortfolioPicture(props) {
  const [hovering, setHovering] = React.useState(false);
  const {userTheme} = React.useContext(AppContext);
  const styleProps = {hovering: hovering, currTheme: userTheme == AppColors.darkTheme ? 'dark' : 'light'};
  const classes = useStyles(styleProps);

  return (
    <img
      src = {hovering ? props.dynamPicSrc : props.statPicSrc}
      className = {classes.jpProjectPaperPic}
      onMouseOver = {() => setHovering(true)}
      onMouseOut = {() => setHovering(false)}
    />
  );
}

export default PortfolioPicture;
