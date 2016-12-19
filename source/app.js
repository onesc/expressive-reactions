import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'

import counterAppReducer from './reducers'
import Counter from './components/Counter'
import AppWrapper from './components/AppWrapper'
import About from './components/About'


const store = createStore(
	combineReducers({
		global: counterAppReducer,
		routing: routerReducer
	}), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const history = syncHistoryWithStore(browserHistory, store);

render (
	<Provider store={store}>
		<Router history={history}>
			<Route path="/" component={AppWrapper}>
				<IndexRoute component={Counter}/>
				<Route path="about" component={About} />
			</Route>
		</Router>
	</Provider>,
	document.getElementById("app")1
) 