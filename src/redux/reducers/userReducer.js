const ADD_USER = "ADD_USER";

export const userReducer = (state = [], action) => {
	switch (action.type) {
		case ADD_USER:
			return [ ...state, ...action.payload ];
		default:
			return state;
	}
};

export const addUserAction = (payload) => ({type: ADD_USER, payload})