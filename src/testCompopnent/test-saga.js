import axios from "axios"
import { call, put, takeLatest } from 'redux-saga/effects';
import {setLoading,setData} from "./test-reducer"


function* fetchMockData(){
    try {
        yield put(setLoading(true))
        const data = yield call([axios,"get"],"https://jsonplaceholder.typicode.com/users")
        yield put(setData(data.data))
        yield put(setLoading(false))
    } catch (error) {
        console.log(error)
    }
}

const fetchData=()=>({type:fetchData.type})
fetchData.type="test/fetchData"

function* watchFetchData(){
    yield takeLatest(fetchData.type,fetchMockData)
}

export { watchFetchData,fetchData } 