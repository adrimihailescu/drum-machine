import "./DrumPad.scss";
import PadButton from "../PadButton/PadButton";

const DrumPad = ({ setPressedKey, drumStatus, drumSet }) => {
	return (
		<div className="pads">
			{drumSet.drumsConfig.map((button) => {
				return (
					<PadButton
						key={button.id}
						text={button.keyTrigger}
						source={button.src}
						keyCode={button.keyCode}
						drumStatus={drumStatus}
						setPressedKey={setPressedKey}
						soundName={button.id}
					/>
				);
			})}
		</div>
	);
};

export default DrumPad;
