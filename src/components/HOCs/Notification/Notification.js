import React from 'react';
import Modal from '../../UI/Modal/Modal';
import classes from '../../UI/Button/Button.css';

const withNotification = (WrappedComponent, axios, successMessage, failedMessage) => {
    return class withNotification extends React.Component {
        state = {
            show: false,
            success: false,
            message: ''
        };

        componentDidMount() {
            axios.interceptors.response.use(response => {
                this.setState({
                    show: true,
                    success: true,
                    message: successMessage
                });
            }, err => {
                this.setState({
                    show: true,
                    success: false,
                    message: failedMessage ? failedMessage : err.message
                });
            });
        }

        closeNotification = () => {
            this.setState({ show: false });
        }

        render() {
            return (
                <React.Fragment>
                    <Modal show={this.state.show} onModalClose={this.closeNotification}>
                        <h3 className={this.state.success ? classes.Success : classes.Danger}>{this.state.success ? "Success" : "Error"}</h3>
                        <p>{this.state.message}</p>
                    </Modal>
                    <WrappedComponent {...this.props} />
                </React.Fragment>
            );
        }
    }
}

export default withNotification;