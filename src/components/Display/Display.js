import "./Display.scss";

const Display = ({ pressedKey }) => {
	return (
		<div id="display" className="display">
			{pressedKey}
		</div>
	);
};

export default Display;
