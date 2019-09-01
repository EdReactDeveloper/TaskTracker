import React, {useEffect} from 'react';
import Routes from './routes/Routes';
import { Provider } from 'react-redux';
import store from './store';
import './App.scss'; 
import {getUser} from './store/actions/user'; 
function App() {

	useEffect(()=> {
		store.dispatch(getUser())
	}, [])

	return (
		<div className='App'>
			<Provider store={store}>
				<Routes />
			</Provider>
		</div>
	);
}

export default App;
