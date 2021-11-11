import "./DrumPad.scss";
import PadButton from "../PadButton/PadButton";

const DrumPad = ({ drumSet }) => {
	return (
		<div className="pads">
			{drumSet.drumsConfig.map((button) => {
				return (
					<PadButton
						key={button.id}
						text={button.keyTrigger}
						source={button.src}
						keyCode={button.keyCode}
					/>
				);
			})}
		</div>
	);
};

export default DrumPad;
