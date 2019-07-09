const INITIAL_STATE = {
  user: {},
};

/* reducers for auth module */
const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'TRACK_SCREEN': {
      return {
        ...state,
        route: { ...action.payload },
      };
    }

    default:
      return state;
  }
};
/* end of reducers for auth modules */

/* action creators for auth module */
/* end of action creators for auth module */

export default authReducer;
