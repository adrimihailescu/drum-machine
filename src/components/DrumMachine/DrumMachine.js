import DrumPad from "../DrumPad/DrumPad";
import SoundType from "../SoundType/SoundType";
import PowerControl from "../PowerControl/PowerControl";
import "./DrumMachine.scss";
import Display from "../Display/Display";

const DrumMachine = ({ drumSet, drumStatus, setDrumStatus, setSoundType }) => {
	return (
		<div id="drum-machine" className="container">
			<DrumPad drumSet={drumSet} />
			<Display />
			<div className="controls">
				<PowerControl drumStatus={drumStatus} setDrumStatus={setDrumStatus} />
				<SoundType drumSet={drumSet} setSoundType={setSoundType} />
			</div>
		</div>
	);
};

export default DrumMachine;
