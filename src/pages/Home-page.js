import React from "react";

const HomePage=(props)=>{
    return (
        <div className='text-center home-page'>
            <h1>Cats Store</h1>
            <p>Somthing short and leading about the collection below  its contents the creator 
                 ,etc Make it short and sweet but not too short so folks. don't simply skip over it enternly.
            </p>
            <div>
                <button className='btn btn-primary'>Main Call To Action</button>
                <button className='btn btn-secondary'>Secondary  Action</button>
            </div>
        </div>
    );
}
export default HomePage;