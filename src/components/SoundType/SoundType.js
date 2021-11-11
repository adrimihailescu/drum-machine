import "./SoundType.scss";

const SoundType = ({ drumSet, setSoundType }) => {
	return <button onClick={setSoundType}>{drumSet.activeDrumSet}</button>;
};

export default SoundType;
