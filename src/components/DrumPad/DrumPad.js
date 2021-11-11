import "./DrumPad.scss";
import PadButton from "../PadButton/PadButton";

const DrumPad = ({ drumStatus, drumSet }) => {
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
					/>
				);
			})}
		</div>
	);
};

export default DrumPad;
