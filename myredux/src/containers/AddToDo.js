import React from 'react'
import {connect} from 'react-redux'
import {addToDO} from '../actions/Actions'

export const AddToDo = ({dispatch}) => {
    let input

    return(
        <div>
            <form onSubmit = {e => {
                e.preventDefault()
                if (!input.value.trim()) {
                    return
                  }
                  dispatch(addToDO(input.value))
                  input.value = ''

            }} >
            <input ref={ node=> input=node}/>
            <button type="submit" >Add To Do List</button>            
            </form>


        </div>



    )



}
export default connect()(AddToDo) 
