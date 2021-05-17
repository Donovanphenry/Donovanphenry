import React from 'react';

import {makeStyles} from '@material-ui/core/styles';
import PropTypes from 'prop-types';

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
  }),
}));

/**
 * @return {*}
 * @param {*} props
 */
function PortfolioPicture(props) {
  const [hovering, setHovering] = React.useState(false);
  const styleProps = {hovering: hovering};
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

PortfolioPicture.propTypes = {
  statPicSrc: PropTypes.img,
  dynamPicSrc: PropTypes.img,
};

export default PortfolioPicture;
