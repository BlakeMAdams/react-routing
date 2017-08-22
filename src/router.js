import React from 'react';
import {Switch, Route } from 'react-router-dom';
import Details from './components/Details/Details';
import Store from './components/Store/Store.js';
import Checkout from './components/Checkout/Checkout.js';

export default (
	<Switch>
		<Route exact path='/' component={Store} />
		<Route path='/details/:id' component={Details} />
		<Route path='/checkout' component={Checkout} />
	</Switch>

)