import { createAsyncThunk, createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { useHttp } from "../../hooks/http.hook";

// const initialState = {
// 	filters: [],
// 	filtersLoadingStatus: 'idle',
// 	activeFilter: 'all'
// }

const filtersAdapter = createEntityAdapter({});

const initialState = filtersAdapter.getInitialState({
	filtersLoadingStatus: 'idle',
	activeFilter: 'all'
})

export const filtersGet = createAsyncThunk(
	"filters/filtersGet",
	async () => {
		const { request } = useHttp();
		return await request("http://localhost:3001/filters")
	}
)

const filterReducerSlise = createSlice({
	name: 'filters',
	initialState,
	reducers: {
	/* 	filtersFetching: state => {
			state.filtersLoadingStatus = 'loading'
		},
		filtersFetched: (state, action) => {
			state.filters = action.payload;
			state.filtersLoadingStatus = 'idle'
		},
		filtersFetchingError: state => {
			state.filtersLoadingStatus = 'error'
		}, */
		actionFilterChanged: (state, action) => {
			state.activeFilter = action.payload
		}
	},
	extraReducers: (builder) => {
		builder
			.addCase(filtersGet.pending, state => {
				state.filtersLoadingStatus = 'loading'
			})
			.addCase(filtersGet.fulfilled, (state, action) => {
				filtersAdapter.setAll(state, action.payload)
				state.filtersLoadingStatus = 'idle'
			})
			.addCase(filtersGet.rejected, state => {
				state.filtersLoadingStatus = 'error'
			})
			.addDefaultCase(()=>{})
	}
})


export const {selectAll} = filtersAdapter.getSelectors(state => state.filter)

export default filterReducerSlise.reducer;

export const { filtersFetching, filtersFetched, filtersFetchingError, actionFilterChanged } = filterReducerSlise.actions