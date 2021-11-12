import DrumPad from "../DrumPad/DrumPad";
import SoundType from "../SoundType/SoundType";
import PowerControl from "../PowerControl/PowerControl";
import Display from "../Display/Display";
import "./DrumMachine.scss";

const DrumMachine = ({
	drumSet,
	drumStatus,
	setDrumStatus,
	setSoundType,
	setPressedKey,
	pressedKey,
}) => {
	return (
		<div id="drum-machine" className="container">
			<DrumPad
				drumStatus={drumStatus}
				drumSet={drumSet}
				setPressedKey={setPressedKey}
			/>

			<div className="controls">
				<PowerControl drumStatus={drumStatus} setDrumStatus={setDrumStatus} />
				<SoundType
					drumSet={drumSet}
					setPressedKey={setPressedKey}
					setSoundType={setSoundType}
				/>
				<Display pressedKey={pressedKey} />
			</div>
		</div>
	);
};

export default DrumMachine;
