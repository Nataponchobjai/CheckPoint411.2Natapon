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

export const deleteMake = (index) => {
  return {
      type: 'DELETE_MAKE',
      value: index
  };
};