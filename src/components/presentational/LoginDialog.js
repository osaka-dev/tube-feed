import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import {Button, DialogActions, DialogContent, DialogTitle} from "@material-ui/core";
import {bindActionCreators} from "redux";
import {startLogin} from "../../actions/auth";
import {connect} from "react-redux";

class LoginDialog extends React.Component {
  render() {
    const {open} = this.props;

    return (
      <Dialog aria-labelledby="login-dialog-title" open={open}>
        <DialogTitle id="login-dialog-title">Welcome !!</DialogTitle>
        <DialogContent>
          <div>
            <p>利用するにはGoogleアカウントが必要です。</p>
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={this.props.startLogin}>ログインする</Button>
        </DialogActions>
      </Dialog>
    );
  }
}


const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      startLogin
    },
    dispatch
  );
};

export default connect(null, mapDispatchToProps)(LoginDialog);
