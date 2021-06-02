import React from 'react'

const TestComponent = ({data,loading}) => {
    console.log(loading);
    return (
        <div>
            <h1>Data</h1>
            <ul>
            { data.map((dataItem)=> <li key={dataItem.id} >{dataItem.name}</li> ) }
            </ul>
        </div>
    )
}

export default TestComponent
