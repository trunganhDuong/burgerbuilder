import React from 'react';
import classes from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class Layout extends React.Component {
    state = {
        showSideDrawer: false
    }

    onCloseSideDrawer = () => {
        this.setState({
            showSideDrawer: false
        });
    }

    onShowSideDrawer = () => {
        this.setState({
            showSideDrawer: true
        });
    }

    render() {
        return (
            <React.Fragment>
                <Toolbar onShowSideDrawer={this.onShowSideDrawer}/>
                <SideDrawer
                    show={this.state.showSideDrawer}
                    open={this.onShowSideDrawer}
                    close={this.onCloseSideDrawer} />
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </React.Fragment>
        );
    }
}

export default Layout;