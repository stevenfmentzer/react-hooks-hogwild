import React from "react";
import HogTile from "./HogTile";

function HogGrid( {hogs} ){

    const colorArray = {
        wood : "#A1662F",
        bronze : "#CD7F32",
        silver : "#C0C0C0",
        gold : "#FFD700",
        platinum : "#E5E4E2",
        diamond : "#B9F2FF"
    }

    const hogsArray = hogs.map((hog) => {
        return(
            <HogTile className="card"
            key={hog.name}
            name={hog.name}
            specialty={hog.specialty}
            greased={hog.greased}
            weight={hog.weight}
            medalRating={hog["highest medal achieved"]}
            medalColor={colorArray[hog["highest medal achieved"]]}
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