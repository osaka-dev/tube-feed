import React, {Component} from "react";
import {withStyles} from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {fetchLists} from "../../actions/youtubeActions";

const styles = theme => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
});

class DashboardContainer extends Component {
  componentDidUpdate(prevProps, prevState, snapshot) {
    this.props.fetchLists();
  }

  render() {
    const {classes} = this.props;
    return (
      <div className={classes.root}>
        <ExpansionPanel defaultExpanded={true}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon/>}>
            <Typography className={classes.heading}>Expansion Panel 1</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
              sit amet blandit leo lobortis eget.
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isLogin: state.auth.isLogin,
    channels: state.channels
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {fetchLists},
    dispatch
  )
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(DashboardContainer));