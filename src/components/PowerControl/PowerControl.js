import "./PowerControl.scss";

const PowerControl = ({ drumStatus, setDrumStatus }) => {
	return (
		<button
			className={`power ${drumStatus ? "isActive" : ""}`}
			onClick={() => setDrumStatus(!drumStatus)}
		>
			{drumStatus ? "ON" : "OFF"}
		</button>
	);
};

export default PowerControl;
