import React from "react";
import HogTile from "./HogTile";

function HogGrid( {hogs} ){

    const hogsArray = hogs.map((hog) => {
        return(
            <HogTile className="card"
            key={hog.name}
            name={hog.name}
            specialty={hog.specialty}
            greased={hog.greased}
            weight={hog.weight}
            medalRating={hog["highest medal achieved"]}
            image={hog.image}
            />
        )
    })

    return(
        <div className="ui three stackable cards">
            {hogsArray}
        </div>
    )
}

export default HogGrid;