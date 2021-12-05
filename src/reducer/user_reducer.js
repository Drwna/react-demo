const userReducer = {
  setUser: (state, action) => {
    return { ...state, user: action.user };
  },
  removeUser: () => {},
};

export default userReducer;
