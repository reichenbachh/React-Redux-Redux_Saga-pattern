import {combineReducers} from "@reduxjs/toolkit"
import { reducer as testReducer , slice as testSlice  } from "../testCompopnent/test-reducer"


const combinedReducer = combineReducers({
    [testSlice]:testReducer
})

const rootReducer=(state,action)=>combinedReducer(state,action)

const rootState = () => rootReducer(undefined,{})

export {rootReducer,rootState}