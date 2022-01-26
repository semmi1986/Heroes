// const initialState = {
// 	filters: [],
// 	filtersLoadingStatus: 'idle',
// 	activeFilter: 'all'
// }

// const filtersReducer = (state = initialState, action) => {
// 	switch (action.type) {
	
// 		case 'FITERS_FETCHING':
// 			return {
// 				...state,
// 				filtersLoadingStatus: 'loading'
// 			}
// 		case 'FITERS_FETCHED':
// 			return {
// 				...state,
// 				filters: action.payload,
// 				filtersLoadingStatus: 'idle',
// 			}
// 		case 'FITERS_FETCHING_ERROR':
// 			return {
// 				...state,
// 				filtersLoadingStatus: 'error'
// 			}
// 		case 'ACTION_FILTER_CHANGED':
// 			return {
// 				...state,
// 				activeFilter: action.payload

// 			}
		
// 		default: return state
// 	}
// }

// export default filtersReducer;