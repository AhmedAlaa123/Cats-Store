import React from 'react';

const PageNotFound=(props)=>{
    return (
        <div style={{padding:'50px'}}>
            <h1>Error: 404</h1>
            <p>page Not Found</p>
            <h5>{props.location.pathname}</h5>
        </div>
    )
}
export default PageNotFound;