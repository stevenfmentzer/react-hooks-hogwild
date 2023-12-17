import React from "react";
import Svg from 'react-native-svg';
import medal from "../assets/medal-svgrepo-com.svg";
import HogGrid from "./HogGrid";


function HogTile( {name, specialty, greased, weight, image, medalRating} ){

    return(
        <div className="fluid card">
            <img className="ui image" src={image}/>
            <div className="left aligned content">
            <h3 className="header">{name}</h3>
            <Svg className="right floated content" src={medal} width={40} height={40}></Svg>
                <div className="bottom attached content">
                    <div>Specialty: {specialty} </div>
                    <div>Weight: {weight}</div>
                    <div>Greased: {greased ? "So Greasy" : "Clean Boi"}</div>
                    <div>Highest Medal: {medalRating}</div>
                </div>
            </div>
        </div>
    )
}

export default HogTile;