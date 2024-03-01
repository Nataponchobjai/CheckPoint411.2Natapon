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



export const deleteMake = (id) => {
  return {
      type: 'DELETE_MAKE',
      value: id
  };
};