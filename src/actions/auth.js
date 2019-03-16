export const START_LOGIN = 'START_LOGIN';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';

// saga
export const startLogin = () => {
	return {
		type: START_LOGIN,
		payload:{}
	} 
}

export const successLogin = () => {
	return {
		type: LOGIN_SUCCESS,
		payload:{}
	}
}
