import jsonAPI from '../api/jsonPlaceHolder';
// import _ from "lodash";

export const fetchPosts = () => async dispatch => {
  const response = await jsonAPI.get('/posts');
  dispatch({ type: 'FETCH_POSTS', payload: response.data });
};

export const fetchUsers = () => {
  return async dispatch => {
    const reponse = await jsonAPI.get('/users');
    dispatch({ type: 'FETCH_USERS', payload: reponse.data });
  };
};

export const fetchUser = id => {
  return async dispatch => {
    const reponse = await jsonAPI.get(`/users/${id}`);
    dispatch({ type: 'FETCH_USER', payload: reponse.data });
  };
};

export const fetchPostsPlusUsers = () => async (dispatch, getState) => {
  await dispatch(fetchPosts());

  // Filter Unique UserId
  const uniqueUid = [...new Set(getState().posts.map(post => post.userId))];
  // console.log(uniqueUid);

  uniqueUid.forEach(id => dispatch(fetchUser(id)));
};
