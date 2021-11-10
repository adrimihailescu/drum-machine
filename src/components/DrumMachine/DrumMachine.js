import DrumPad from "../DrumPad/DrumPad";
import ButtonMode from "../ButtonMode/ButtonMode";
import ButtonPower from "../ButtonPower/ButtonPower";
import "./DrumMachine.scss";

const DrumMachine = () => {
	return (
		<div id="drum-machine" className="container">
			<div id="display"></div>
			<DrumPad />
			<div>
				<ButtonPower />
				<ButtonMode />
			</div>
		</div>
	);
};

export default DrumMachine;
