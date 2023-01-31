const initialState = {
    todos: [
        {
        id: 1,
        title: 'do hw'
    },
        {
        id: 2,
        title: 'do hw again'
    }
]
}


export default (state = initialState, action) => {
    switch(action.type) {
        case 'ADD_TEXT': {
            return {
                ...state,
                title:action.payload
            }
        }

        case 'ADD': {
            return {
                ...state,
                todos: [...state.todos, {title: action.title,
                    id: state.todos.length ? state.todos[state.todos.length - 1].id + 1 : 1
                }]
            }
        }
        case 'DELETE': {
            return {
                ...state, 
                todos: state.todos.filter((item) => item.id !== action.id)
            }
        }

        case 'IMPORTANT': {
            return {
                ...state,
                todos: state.todos.map((item) => {
                    if (item.id === action.id){
                        return {...item, isImportant: !item.isImportant}
                    }
                    return item
                })

            }
        }
        
        case 'DONE': {
            return {
                ...state,
                todos: state.todos.map((item) => {
                    if (item.id === action.id){
                        return {...item, isDone: !item.isDone}
                    }
                    return item
                })
            }
        }

        default: return state
    }
}



export const addTodo = (title) => {
    return(dispatch) => {
        return dispatch({type: 'ADD', title: title})
    }
}

export const deleteTodo = (id) => {
    return(dispatch) => {
        return dispatch({type: 'DELETE', id})
    }
}

export const important = (id) => {
    return(dispatch) => {
        return dispatch({type: 'IMPORTANT', id})
    }
}

export const done = (id) => {
    return(dispatch) => {
        return dispatch({type: "DONE", id})
    }
}


