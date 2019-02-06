import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from "react-redux";
import { BrowserRouter, Route } from 'react-router-dom'

// import store from "./modules/store";

import 'semantic-ui-css/semantic.min.css';
import 'normalize.css';


ReactDOM.render(
		<BrowserRouter>
            <Route path={"/"} component={App} />
		</BrowserRouter>,
document.getElementById('root'));

module.hot.accept();
