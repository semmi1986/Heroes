// import { createAction } from "@reduxjs/toolkit";
// import { heroesFetching, heroesFetched, heroesFetchingError } from '../components/heroesList/HeroesReduserSlice';
// import { filtersFetched, filtersFetching, filtersFetchingError } from "../components/heroesFilters/FilterReduserSlise";

// export const heroesGet = (request) => (dispatch) => {
// 	dispatch(heroesFetching());
// 	request("http://localhost:3001/heroes")
// 		.then(data => dispatch(heroesFetched(data)))
// 		.catch(() => dispatch(heroesFetchingError()))
// }

// export const filtersGet = (request) => (dispatch) => {
// 	dispatch(filtersFetching());
// 	request("http://localhost:3001/filters")
// 		.then(data => dispatch(filtersFetched(data)))
// 		.catch(() => dispatch(filtersFetchingError()))
// }

// без библиотеки toolkit

/* export const heroesFetching = () => {
    return {
        type: 'HEROES_FETCHING'
    }
}

export const heroesFetched = (heroes) => {
    return {
        type: 'HEROES_FETCHED',
        payload: heroes
    }
}

export const heroesFetchingError = () => {
    return {
        type: 'HEROES_FETCHING_ERROR'
    }
}
export const filtersFetching = () => {
	return {
		 type: 'FITERS_FETCHING'
	}
}

export const filtersFetched = (filters) => {
	return {
		 type: 'FITERS_FETCHED',
		 payload: filters
	}
}

export const filtersFetchingError = () => {
	return {
		 type: 'FITERS_FETCHING_ERROR'
	}
}
export const actionFilterChanged = (filter) => {
	return {
		 type: 'ACTION_FILTER_CHANGED',
		 payload: filter
	}
}

export const heroesDeleted = (id) => {
	return{
		type: 'HEROES_DELETED',
		payload: id
	}
}

export const heroCreated = (hero) => {
	return{
		type: 'HERO_CREATED',
		payload: hero
	}
} */


// с библиотекой toolkit

/* export const heroesFetching = createAction('HEROES_FETCHING');
export const heroesFetched = createAction('HEROES_FETCHED');
export const heroesFetchingError = createAction('HEROES_FETCHING_ERROR');
export const heroesDeleted = createAction('HEROES_DELETED');
export const heroCreated = createAction('HERO_CREATED');
export const filtersFetching = createAction('FITERS_FETCHING');
export const filtersFetched = createAction('FITERS_FETCHED');
export const filtersFetchingError = createAction('FITERS_FETCHING_ERROR');
export const actionFilterChanged = createAction('ACTION_FILTER_CHANGED'); */
