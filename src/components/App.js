import React from "react";
import Nav from "./Nav";
import Filter from "./Filter"
import hogs from "../porkers_data";
import HogGrid from "./HogGrid";

function App() {
	return (
		<div className="App">
			<Nav />
			<Filter hogs={hogs}/>
			<HogGrid hogs={hogs}/>
		</div>
	);
}

export default App;
