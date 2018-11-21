let actionIndex = 0

export const addToDO = text => ({
    type : 'ADD_TO_DO' ,
    id : actionIndex + 1 ,
    text 
})

export const toggleToDo = id => ({
    type : 'TOGGLE_TO_DO' ,
    id
})

export const setVisibilityFilter = filter => ({
    type : 'SET_VISIBILITY_FILTER' ,
    filter
})

export const VisibilityFilters =  {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
  }