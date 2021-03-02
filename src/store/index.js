import { faAudioDescription } from '@fortawesome/free-solid-svg-icons'
import React, {createContext, useReducer} from 'react'

const initialState = {
    popular: [],
    related: [],
    selected: {}
}

const reducer = (state, action)=>{
    switch(action.type){
        case 'SET_POPULAR':
            return {...state, popular: action.payload.popular}
        case 'SET_RELATED':
            return {...state, related: action.payload.related}
        case 'SET_SELECTED':
            return {...state, selected: action.payload.selected}
        default:
            return state
    }
}

export const Store = createContext({
    globalState: initialState,
    setGlobalStateDispatch: () => null
})

export const StoreProvider = ({children}) => {
    const [globalState, setGlobalStateDispatch] = useReducer(reducer, initialState)
    return (
        <div>
            <Store.Provider value={{globalState, setGlobalStateDispatch}}>{children}</Store.Provider>
        </div>
    )
}

export default StoreProvider
