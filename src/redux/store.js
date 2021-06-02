import {configureStore } from "@reduxjs/toolkit"
import createSagaMiddleware from 'redux-saga';
import {rootReducer} from "./rootReducer"
import { rootSaga } from "./rootSaga"
import thunk from "redux-thunk"
import {createLogger} from "redux-logger"



const sagaMiddleWare= createSagaMiddleware()

const logger= createLogger({})

const store = configureStore({
    reducer:rootReducer,
    middleware:[thunk,logger,sagaMiddleWare]
})

sagaMiddleWare.run(rootSaga)

export default store