export const addListing = (listing) => {
  return {
      type: 'ADD_LISTING',
      value: listing
  }
}

export const removeListing = (id) => {
  return {
      type: 'REMOVE_LISTING',
      value: id
  }
}

export const fetchMakes = () => {
  return (dispatch) => {
      fetch()
          .then((response) => response.json())
          .then((data) => {
              const action = {
                  type: "FETCH_MAKES",
                  value: data.Results,
              };
              dispatch(action);
          });
  };
};


export const deleteMake = (id) => {
  return {
      type: 'DELETE_MAKE',
      value: id
  };
};

export const login = (username) => {
  return {
      type: 'LOGIN',
      value: username
  }
}

export const logout = () => {
  return {
      type: 'LOGOUT',
      value: ""
  }
}