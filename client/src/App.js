import React, {useEffect} from 'react';
import Routes from './routes/Routes';
import { Provider } from 'react-redux';
import store from './store';
import style from './App.module.scss'; 
import {getUser} from './store/actions/user'; 
function App() {

	useEffect(()=> {
		store.dispatch(getUser())
	}, [])

	return (
		<div className={style.app}>
			<Provider store={store}>
				<Routes />
			</Provider>
		</div>
	);
}

export default App;
