import "./Header.scss";

const Header = (props) => {
	return (
		<header className="App-header">
			<h1>{props.content}</h1>
		</header>
	);
};

export default Header;
