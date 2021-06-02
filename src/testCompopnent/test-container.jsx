import React,{useEffect} from 'react'
import {connect} from "react-redux"
import {compose} from "ramda"
import {fetchData} from "./test-saga"
import {getData, getLoadState} from "./test-reducer"
import TestComponent from "./test-component"

const mapStateToProps=state=>({
    loading:getLoadState(state),
    data:getData(state)
})

const TestContainer = compose(connect(mapStateToProps,{fetchData}))(({fetchData,data,loading})=>{
    useEffect(()=>{
       fetchData()
    },[])
    if(loading || data=== null ){
        return <h1>Loading</h1>
    }
    return <TestComponent data={data} loading={loading} />
})

export default TestContainer
