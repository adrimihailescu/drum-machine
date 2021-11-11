import { useState } from "react";
import DrumMachine from "./components/DrumMachine/DrumMachine";
import Layout from "./components/Layout/Layout";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Drums from "./DrumModes";

function App() {
	const [drumStatus, setDrumStatus] = useState(true);
	const [drumSet, setDrumSet] = useState({
		activeDrumSet: "Set 1",
		drumsConfig: Drums.drumSet1,
	});

	const setSoundType = () => {
		let newActiveDrumSet, newActiveConfig;
		if (drumSet.activeDrumSet === "Set 1") {
			newActiveDrumSet = "Set 2";
			newActiveConfig = Drums.drumSet2;
		} else {
			newActiveDrumSet = "Set 1";
			newActiveConfig = Drums.drumSet1;
		}

		setDrumSet({
			activeDrumSet: newActiveDrumSet,
			drumsConfig: newActiveConfig,
		});
	};

	return (
		<Layout className="App">
			<Header content="Drum Machine" />
			<DrumMachine
				drumSet={drumSet}
				drumStatus={drumStatus}
				setDrumStatus={setDrumStatus}
				setSoundType={setSoundType}
			/>
			<Footer />
		</Layout>
	);
}

export default App;
