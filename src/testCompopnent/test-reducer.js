import {createSlice} from "@reduxjs/toolkit"
import { createSetter } from "../createSetter"
import { pipe , prop } from "ramda"

const slice = "testData"

const initialState={
    data:null,
    loading:false,
}

export const { reducer,actions:{ setData,setLoading } } 
= createSlice(
    {
    initialState,
    name:slice,
    reducers:{
    setData:createSetter("data"),
    setLoading:createSetter("loading")
}})

const getAppState= prop(slice)
const getLoadState= pipe(getAppState,prop("loading"))
const getData= pipe(getAppState,prop("data"))

export {slice,getAppState,getLoadState,getData}