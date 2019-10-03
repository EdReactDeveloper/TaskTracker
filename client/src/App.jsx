import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import Routes from './routes/Routes';
import store from './store';
import getUserAction from './store/actions/user';

const App =()=> {

	useEffect(() => {
		store.dispatch(getUserAction())
	}, [])

	return (
		<div>
			<Provider store={store}>
				<Routes />
			</Provider>
		</div>
	);
}

export default App;
