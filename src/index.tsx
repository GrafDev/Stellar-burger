import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/app/app';
import reportWebVitals from './reportWebVitals';

import {Provider} from "react-redux";

import stores from "./redux/store/store";
import {BrowserRouter} from "react-router-dom";

const root = ReactDOM.createRoot(	document.getElementById('root') as HTMLElement);

root.render(
	<React.StrictMode>
		<BrowserRouter>
			<Provider store={stores}>
					<App/>
			</Provider>
		</BrowserRouter>

	</React.StrictMode>
);

reportWebVitals();
