/* import { createReducer } from "@reduxjs/toolkit";
import { heroCreated, heroesDeleted, heroesFetched, heroesFetching, heroesFetchingError } from "../actions";

const initialState = {
	heroes: [],
	heroesLoadingStatus: 'idle',
}
 */

//до createReducer

/* const heroesReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'HEROES_FETCHING':
			return {
				...state,
				heroesLoadingStatus: 'loading'
			}
		case 'HEROES_FETCHED':
			return {
				...state,
				heroes: action.payload,
				heroesLoadingStatus: 'idle'
			}
		case 'HEROES_FETCHING_ERROR':
			return {
				...state,
				heroesLoadingStatus: 'error'
			}
		case 'HEROES_DELETED':
			const newHeroList = state.heroes.filter(item => item.id !== action.payload)
			return {
				...state,
				heroes: newHeroList
			}

		case 'HERO_CREATED':
			const newHeroCreated = [...state.heroes, action.payload]
			return {
				...state,
				heroes: newHeroCreated
			}
		default: return state
	}
} */


// 1-й способ использования (поддерживает TypeScript)

/* const heroesReducer = createReducer(initialState, bilder =>{
	bilder
		.addCase(heroesFetching, state => {
			state.heroesLoadingStatus = 'loading'
		})
		.addCase(heroesFetched, (state, action) => {
			state.heroes = action.payload;
			state.heroesLoadingStatus = 'idle'
		})
		.addCase(heroesFetchingError, state =>{
			state.heroesLoadingStatus = 'error'
		})
		.addCase(heroCreated, (state, action) => {
			state.heroes.push(action.payload)
		})
		.addCase(heroesDeleted, (state, action) => {
			state.heroes = state.heroes.filter(item => item.id !== action.payload)
		})
		.addDefaultCase(()=>{})
}) */

//2 - й способ использования (не поддерживает TypeScript)

/* const heroesReducer = createReducer(initialState, {
	[heroesFetching]: state => {
		state.heroesLoadingStatus = 'loading'
	},
	[heroesFetched]: (state, action) => {
		state.heroes = action.payload;
		state.heroesLoadingStatus = 'idle'
	},
	[heroesFetchingError]: state => {
		state.heroesLoadingStatus = 'error'
	},
	[heroCreated]: (state, action) => {
		state.heroes.push(action.payload)
	},
	[heroesDeleted]: (state, action) => {
		state.heroes = state.heroes.filter(item => item.id !== action.payload)
	}
}, [], state => state
)

export default heroesReducer; */