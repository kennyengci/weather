import React from 'react';

export default function CitySelector(props: { onChange?: (value: string | undefined) => void }) {
    const cityOptions = ['', 'Perth', 'Hobart', 'Adelaide' ,'Brisbane', 'Canberra', 'Darwin', 'Melbourne', 'Sydney']

    return (
        <select
            className="border-2 border-black rounded m-4 w-36"
            onChange={event => event.target.value ? props.onChange?.(event.target.value) : props.onChange?.(undefined)}
        >
            {cityOptions.map(o => <option value={o}>{o}</option>)}
        </select>
    )
}