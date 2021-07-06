import React from "react";
import TemperatureImage from "./TemperatureImage";


export default function WeatherCard(props: { data?: APIResult }) {
    const temp = props.data?.observations.data[0]?.air_temp

    return (
        <div className="border-2 border-gray-200 rounded m-4 h-36 max-w-xs flex flex-col items-center justify-center">
            <div className="m-2">
                <TemperatureImage temp={temp}/>
            </div>
            <div className="m-2 mt-4 text-lg font-semibold">
                {temp ? `${temp}\u00b0C` : '\u00A0'}
            </div>
        </div>
    )
}