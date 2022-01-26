const initialState = {
	heroes: [],
	heroesLoadingStatus: 'idle',
	filters: [],
	filtersLoadingStatus: 'idle',
	filtersHeroes: [],
	activeFilter: 'all'
}

const reducer = (state = initialState, action) => {
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
				filtersHeroes: state.activeFilter === 'all' ?
					action.payload :
					action.payload.filter(item => item.element === state.activeFilter),
				heroesLoadingStatus: 'idle'
			}
		case 'HEROES_FETCHING_ERROR':
			return {
				...state,
				heroesLoadingStatus: 'error'
			}
		case 'FITERS_FETCHING':
			return {
				...state,
				filtersLoadingStatus: 'loading'
			}
		case 'FITERS_FETCHED':
			return {
				...state,
				filters: action.payload,
				filtersLoadingStatus: 'idle',
			}
		case 'FITERS_FETCHING_ERROR':
			return {
				...state,
				filtersLoadingStatus: 'error'
			}
		case 'ACTION_FILTER_CHANGED':
			return {
				...state,
				activeFilter: action.payload,
				filtersHeroes: action.payload === 'all' ?
					state.heroes :
					state.heroes.filter(item => item.element === action.payload)

			}
		case 'HEROES_DELETED':
			const newHeroList = state.heroes.filter(item => item.id !== action.payload)
			return {
				...state,
				heroes: newHeroList,
				filtersHeroes: state.activeFilter === 'all' ?
					newHeroList :
					newHeroList.filter(item => item.element === state.activeFilter)
			}

		case 'HERO_CREATED':
			const newHeroCreated = [...state.heroes, action.payload]
			return {
				...state,
				heroes: newHeroCreated,
				filtersHeroes: state.activeFilter === 'all' ?
					newHeroCreated :
					newHeroCreated.filter(item => item.element === state.activeFilter)
			}
		default: return state
	}
}

export default reducer;