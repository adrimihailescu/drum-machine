import "./SoundType.scss";

const SoundType = ({ drumSet, setSoundType }) => {
	return (
		<button className="sounds" onClick={setSoundType}>
			{drumSet.activeDrumSet}
		</button>
	);
};

export default SoundType;
