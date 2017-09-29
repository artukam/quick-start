const DEFAULT_STATE = {
	//insert default state
	state: {}
}

export default (state=DEFAULT_STATE, action={type:null}) => {
	switch(action.type){
		default:
			return state;
	}
}