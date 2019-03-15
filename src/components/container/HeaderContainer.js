import React, {Component} from 'react';
import {AppBar} from '@material-ui/core';
import {withStyles} from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import MenuIcon from "@material-ui/icons/Menu";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { login } from '../../actions/auth';

 
const styles = {
    root: {
        flexGrow: 1,
    },
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
};

class HeaderContainer extends Component {
    constructor(props) {
        super(props);
		}
		
		componentDidMount(){
			console.log("isLogin",this.props.isLogin);
			this.props.login();
		}

    render() {
				const {classes} = this.props;
        return (
            <AppBar position="static">
                <Toolbar>
                    <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" color="inherit" className={classes.grow}>
                        News
                    </Typography>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
        )
    }
}

const mapStateToProps = (state) =>{
    return {
			isLogin: state.auth.isLogin,
    }
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        login
    },dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(withStyles(styles)(HeaderContainer));