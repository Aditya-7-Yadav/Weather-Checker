import React from 'react'

const fetch= async () =>{
    const response = await fetch("https://api.weatherbit.io/v2.0/current?city=nagpur&key=c7d0fa15a01e4e1c99b1aec27955c811&include=minutely", { method: "GET" });
    return response.json();
}

export default fetch