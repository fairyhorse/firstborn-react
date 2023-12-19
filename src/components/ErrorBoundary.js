import React, {Component} from 'react';

class ErrorBoundary extends Component {
    constructor (props){
        super(props);
        this.state = {
            hasError: false
        }
    }

    componentDidCatch(error, info) {
        this.setState({hasError: true});
    }

    render() {
        this.state.hasError? <h1 className="font-effect-neon f1">Oops! Error!</h1> : this.props.children;
    }
}


export default ErrorBoundary