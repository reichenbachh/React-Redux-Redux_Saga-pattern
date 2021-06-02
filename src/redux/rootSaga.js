import {watchFetchData} from "../testCompopnent/test-saga"
import {all} from "redux-saga/effects"

function* rootSaga(){
    yield all([
        watchFetchData()
    ]);
}

export {rootSaga}