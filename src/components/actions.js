// actions.js
export const UPDATE_NAME = "UPDATE_NAME";
export const UPDATE_EMAIL = "UPDATE_EMAIL";

export const updateName = (name) => ({
  type: UPDATE_NAME,
  payload: name,
});

export const updateEmail = (email) => ({
  type: UPDATE_EMAIL,
  payload: email,
});
/*


export const updateName = (name) => {
    return {
      type: 'UPDATE_NAME',
      payload: name,
    };
  };
  
  export const updateEmail = (email) => {
    return {
      type: 'UPDATE_EMAIL',
      payload: email,
    };
  };
  */