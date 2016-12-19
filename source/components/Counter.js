import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { CounterActions } from '../actions'

class App extends React.Component {
	constructor(props) {
		super(props)
	}

	click() {
		this.props.testClick()
	}

	render() {
		console.log("props", this.props)
		return (
			<div>
				<h2> Counter: {this.props.global.counter}</h2>
				<button onClick={this.click.bind(this)}> Click Me </button>
			</div>
		)
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		testClick: () => {
			dispatch(CounterActions("Add"))
		}
	}
}

const mapStateToProps = (state) => {
	return state;
}

const DefaultApp = connect(
	mapStateToProps,
	mapDispatchToProps
)(App)

export default DefaultApp;