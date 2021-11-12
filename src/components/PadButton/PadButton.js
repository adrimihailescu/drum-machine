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
			id={soundName}
			className={`drum-pad ${!drumStatus ? "disabled" : ""}`}
			onClick={buttonTrigger}
		>
			{text}
			<audio className="clip" id={text} ref={ref} src={source} />
		</button>
	);
};

export default PadButton;
