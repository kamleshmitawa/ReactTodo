import React from 'react'
import {combineReducers} from 'redux'
import Todos from './Todos'
import VisibilityFilter from './VisiblityFilter'

export default combineReducers({
    rajat:Todos,VisibilityFilter
})