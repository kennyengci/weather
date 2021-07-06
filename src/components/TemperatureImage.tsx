import React from "react";

export default function TemperatureImage(prop: {temp: number | undefined}) {
    const temp = prop.temp
    let imgSrc = ''
    
    switch (true) {
        case temp && temp >= 15:
            imgSrc = '/img/sun.gif'
            break
        case temp && temp < 15:
            imgSrc = '/img/snowflake.gif'
            break
        default:
    }
    
    return (
        imgSrc ? <img src={imgSrc} alt="animated sun wearing sunglasses" className="h-16"/> : <></>
    )
}