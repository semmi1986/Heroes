import { createAsyncThunk, createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { useHttp } from "../../hooks/http.hook";
import { createSelector } from '@reduxjs/toolkit';


// const initialState = {
// 	heroes: [],
// 	heroesLoadingStatus: 'idle',
// }

const heroesAdapter = createEntityAdapter({})

const initialState = heroesAdapter.getInitialState({heroesLoadingStatus: 'idle',});

export const heroesGet = createAsyncThunk(
	"heroes/heroesGet",
	async () =>{
		const {request} = useHttp();
			return await request('http://localhost:3001/heroes')
	}
)

const heroesSliceReduser = createSlice({
	name: 'heroes',
	initialState,
	reducers: {
	/* 	heroesFetching: state => {
			state.heroesLoadingStatus = 'loading'
		},
		heroesFetched: (state, action) => {
			state.heroes = action.payload;
			state.heroesLoadingStatus = 'idle'
		},
		heroesFetchingError: state => {
			state.heroesLoadingStatus = 'error'
		}, */
		heroCreated: (state, action) => {
			heroesAdapter.addOne(state, action.payload)
		},
		heroesDeleted: (state, action) => {
			heroesAdapter.removeOne(state, action.payload)
		}
	},
	extraReducers: ( builder ) => {
		builder
			.addCase(heroesGet.pending, state => {
				state.heroesLoadingStatus = 'loading'
			})
			.addCase(heroesGet.fulfilled, (state, action) =>{
				// state.heroes = action.payload;
				heroesAdapter.setAll(state, action.payload)
				state.heroesLoadingStatus = 'idle'
			})
			.addCase(heroesGet.rejected, state=>{
				state.heroesFetchingError = 'error'
			})
			.addDefaultCase(()=>{})
	}

	}
)

export const {selectAll} = heroesAdapter.getSelectors(state => state.heroes);

export const filtersHeroesSelctor = createSelector(
	state => state.filter.activeFilter,
	selectAll,
	(filterSelector, heroesSelector) => {
		if (filterSelector === 'all') {
			return heroesSelector
		} else {
			return heroesSelector.filter(item => item.element === filterSelector)

		}
	}
)


export default heroesSliceReduser.reducer;

export const {heroesFetching, heroesFetched, heroesFetchingError, heroCreated, heroesDeleted} = heroesSliceReduser.actions