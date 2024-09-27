"use client";

import { useEffect, useState } from 'react';

export default function Destinations() {
    useEffect(() => {
        document.body.style.backgroundColor = 'transparent';
    }, []);

    return (
        <>
     
            
 
                <div id="book-destination-0">
                    <select className="ui dropdown select-flight-way ">
                        <option value="One-way" data-id="one-way-0">One-way</option>
                        <option value="Round-Trip" data-id="round-trip-0">Round-Trip</option>
                        <option value="Multi-city">Multi-city</option>
                    </select>
                    <div id="one-way-0" className="book-destination">
                        <div className="destination-inputs">
                            {/*Destination Inputs*/}
                            <div className="ui search big actv">
                                <div className="ui icon input">
                                    <input className="prompt dest-input-from" type="text" placeholder="From?" />
                                    <i className="plane icon"></i>
                                </div>
                                <div className="results"></div>
                            </div>
                            <div className="ui search big actv">
                                <div className="ui icon input">
                                    <input className="prompt dest-input-to" type="text" placeholder="To?" />
                                    <i className="plane icon"></i>
                                </div>
                                <div className="results"></div>
                            </div>
                            {/*Destination Inputs*/}
                            {/*Destination-dates*/}
                            <div className="two fields destination-dates">
                                <div className="ui calendar start-calendar-destination" id="rangestart">
                                    <div className="ui input left icon">
                                        <i className="calendar icon"></i>
                                        <input type="text" placeholder="Start" />
                                    </div>
                                </div>
                                <div className="ui calendar end-calendar-destination" id="rangeend">
                                    <div className="ui input left icon">
                                        <i className="calendar icon"></i>
                                        <input type="text" placeholder="End" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button className="ui primary large button">Search</button>
                    </div>
                    <div id="round-trip-0" className="book-destination" style={{ display: "none" }}>
                        <div className="ui search big">
                            <div className="ui icon input">
                                <input className="prompt dest-input-from" type="text" placeholder="From?" />
                                <i className="search icon"></i>
                            </div>
                            <div className="results"></div>
                        </div>
                    </div>
                </div>
        
            
               
        </>
    );
}