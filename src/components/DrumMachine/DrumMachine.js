import DrumPad from "../DrumPad/DrumPad";
import SoundType from "../SoundType/SoundType";
import PowerControl from "../PowerControl/PowerControl";
import "./DrumMachine.scss";

const DrumMachine = ({ drumSet, drumStatus, setDrumStatus, setSoundType }) => {
	return (
		<div id="drum-machine" className="container">
			<div id="display" className="pad"></div>
			<DrumPad />
			<div className="controls">
				<PowerControl drumStatus={drumStatus} setDrumStatus={setDrumStatus} />
				<SoundType drumSet={drumSet} setSoundType={setSoundType} />
			</div>
		</div>
	);
};

export default DrumMachine;
