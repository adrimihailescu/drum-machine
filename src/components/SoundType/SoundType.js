import "./SoundType.scss";

const SoundType = ({ setPressedKey, drumSet, setSoundType }) => {
	const changeDisplay = () => {
		setSoundType();
		setPressedKey("");
	};
	return (
		<button className="sounds" onClick={changeDisplay}>
			{drumSet.activeDrumSet}
		</button>
	);
};

export default SoundType;
