import "./PadButton.scss";
import { useRef } from "react";

const PadButton = ({ drumStatus, text, source, keyCode }) => {
	const ref = useRef();

	const buttonTrigger = () => {
		if (!drumStatus) return;
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
