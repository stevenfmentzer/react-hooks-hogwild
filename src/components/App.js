import React from "react";
import Nav from "./Nav";

import hogs from "../porkers_data";
import HogGrid from "./HogGrid";

function App() {
	return (
		<div className="App">
			<Nav />
			<HogGrid hogs={hogs}/>
		</div>
	);
}

export default App;
