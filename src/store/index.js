// import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
// import reducer from '../reducers';
import filtersReducer from '../components/heroesFilters/FilterReduserSlise';
import heroesReducer from '../components/heroesList/HeroesReduserSlice';
// import ReduxThunk from 'redux-thunk';
import { configureStore } from '@reduxjs/toolkit';


//Middleware
// позволяет нам прописывать action в виде (HEROES_FETCHING_ERROR ) строки в вызове dispatch

const stringMiddleware = () => (next) => (action) => {
	if (typeof action === 'string') {
		return next({
			type: action
		})
	}
	return next(action)
};

// const store = createStore(combineReducers({ heroes: heroesReducer, filter: filtersReducer }),
// 	compose(applyMiddleware(ReduxThunk, stringMiddleware), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));

// const store = createStore( reducer , window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const store = configureStore({
	reducer:{heroes: heroesReducer, filter: filtersReducer},
	middleware: getDefaultMiddleware => getDefaultMiddleware().concat(stringMiddleware),
	devTools: process.env.NODE_ENV !== 'production',
})


export default store;