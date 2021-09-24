import {useState} from "react";
import Nav from "./Nav";
import MainContent from "./MainContent";
import hogs from "../porkers_data";
	
	function App() {

	const [greaseOption, setGreaseOption] = useState(false)

	function showHogs() {
		if(greaseOption === true){
			setGreaseOption(greaseOption)
		}else{
			setGreaseOption(!greaseOption)
		}
	}
	
	return (
		<div className="App">
			<Nav />
			<MainContent greaseOption={greaseOption} showHogs={showHogs} hogs = {hogs} />
		</div>
	);
}

export default App;
