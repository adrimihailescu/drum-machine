import { useState, useEffect } from "react";
import DrumMachine from "./components/DrumMachine/DrumMachine";
import Layout from "./components/Layout/Layout";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Drums from "./DrumModes";

function App() {
	const [pressedKey, setPressedKey] = useState("");
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

	// eslint-disable-next-line react-hooks/exhaustive-deps
	const handleKeyDown = (event) => {
		event.preventDefault();

		const activeKey = drumSet.drumsConfig.find(
			(button) => button.keyCode === event.keyCode
		);

		if (!drumStatus) return;

		if (activeKey) {
			setPressedKey(activeKey.id);
			new Audio(activeKey.src).play();
		}
	};

	useEffect(() => {
		window.addEventListener("keydown", handleKeyDown);

		return () => {
			window.removeEventListener("keydown", handleKeyDown);
		};
	}, [drumStatus, handleKeyDown]);

	return (
		<Layout className="App">
			<Header content="Drum Machine" />
			<DrumMachine
				drumSet={drumSet}
				drumStatus={drumStatus}
				setDrumStatus={setDrumStatus}
				setSoundType={setSoundType}
				setPressedKey={setPressedKey}
				pressedKey={pressedKey}
			/>
			<Footer />
		</Layout>
	);
}

export default App;
