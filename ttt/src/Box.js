import React, { useState } from "react";

export function Box({value, onSquareClick}) {

    return (
        <div 
        className="box"
        onClick={onSquareClick}
        >{value}</div>
    );
}