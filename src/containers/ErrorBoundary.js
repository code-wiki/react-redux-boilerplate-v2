import React, { Component } from 'react';

export default class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false,
        };
    }
    static getDerivedStateFromError() {
        return {
            hasError: true,
        };
    }
    componentDidCatch(error, errorInfo) {
        console.error('Caught an error', error, errorInfo);
    }
    render() {
        if (this.state.hasError) {
            return <h2> Something went wrong </h2>;
        }
        return this.props.children;
    }
}
