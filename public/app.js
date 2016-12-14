import React from 'react'
import { render } from 'react-dom'
import Counter from './Counter'
import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux'
import counterApp from './reducers'
import MainComponent from './MainComponent'
import AnotherComponent from './AnotherComponent'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'


const store = createStore(
	combineReducers({
		global: counterApp,
		routing: routerReducer
	}));

const history = syncHistoryWithStore(browserHistory, store);

render (
	<Provider store={store}>
		<Router history={history}>
			<Route path="/" component={MainComponent}>
				<IndexRoute component={Counter}/>
				<Route path="test" component={AnotherComponent} />
			</Route>
		</Router>
	</Provider>,
	document.getElementById("app")
) 