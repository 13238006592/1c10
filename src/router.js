import{
	HashRouter as Router,
	Route,
	Redirect,
	Switch,
	Link
} from 'react-router-dom';

import React from 'react';

import App from './components/App';
import Detail from './components/Detail';
import List from './components/List';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';


const router = (
	<Router>
		<App>
			<Switch>
			<Route path="/home" component={Home} />
			<Route path="/detail" component={Detail} />
			<Route path="/list" component={List} />
			<Route path="/login" component={Login} />
			<Route path="/register" component={Register} />
			
			
			<Redirect from='/' to='home'/>
			</Switch>
		</App>
	</Router>
	)

export default router;