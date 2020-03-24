import React, { Component } from 'react';
import ErrorIndicator from '../ErrorIndicator/ErrorIndicator';

class ErrorBoundary extends Component {
	state = {
		isError: false
	}

	componentDidCatch() {
		this.setState({ isError: true });
	}

	render() {
		return (
			<>
				{!this.state.isError ? (
					<>
						{this.props.children}
					</>
				) : (
						<ErrorIndicator />
					)}
			</>
		);
	}
};

export default ErrorBoundary;
