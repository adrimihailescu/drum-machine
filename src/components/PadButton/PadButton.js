import "./PadButton.scss";
import { useRef } from "react";

const PadButton = ({
	soundName,
	setPressedKey,
	drumStatus,
	text,
	source,
	keyCode,
}) => {
	const ref = useRef();

	const buttonTrigger = () => {
		if (!drumStatus) return;
		setPressedKey(soundName);
		ref.current.play();
	};

	return (
		<button
			className={`drum-pad ${!drumStatus ? "disabled" : ""}`}
			onClick={buttonTrigger}
		>
			{text}
			<audio ref={ref} src={source} />
		</button>
	);
};

export default PadButton;
