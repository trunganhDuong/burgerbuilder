import React from 'react';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Spinner from '../../UI/Spinner/Spinner';

const withLoader = (WrappedComponent, axios) => {
    return class withLoader extends React.Component {
        state = {
            show: false
        };

        componentDidMount() {
            axios.interceptors.request.use(config => {
                this.setState({
                    show: true
                });

                return config;
            });

            axios.interceptors.response.use(response => {
                this.setState({
                    show: false
                });

                return response;
            }, error => Promise.reject(error));
        }
        render() {
            return (
                <React.Fragment>
                    <Backdrop show={this.state.show} />
                    <Spinner show={this.state.show} />
                    <WrappedComponent {...this.props} />
                </React.Fragment>
            );
        }
    }
}

export default withLoader;