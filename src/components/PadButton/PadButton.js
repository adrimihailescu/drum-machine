import "./PadButton.scss";
import { useRef } from "react";

const PadButton = ({ text, source, keyCode }) => {
	const ref = useRef();

	const buttonTrigger = () => {
		ref.current.play();
	};

	return (
		<button className="drum-pad" onClick={buttonTrigger}>
			{text}
			<audio ref={ref} src={source} />
		</button>
	);
};

export default PadButton;
