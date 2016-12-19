import React, { PropTypes } from 'react'

class AppWrapper extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<div>
				<h1> Welcome to my redux app </h1>
				{this.props.children}
			</div>
		)
	}
}

export default AppWrapper;