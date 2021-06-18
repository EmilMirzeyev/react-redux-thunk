import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "./redux/asyncActions/users";
import "./App.css";
import { useState } from "react";

function App() {
	const [data, setData] = useState(false);
	const dispatch = useDispatch();
	const users = useSelector((state) =>
		state.users.map((user) => <li key={user.id}>{user.name}</li>)
	);

	const dataFetch = () => {
		setData(true);
		!data && dispatch(fetchUsers());
	};

	return (
		<div className="App">
			<button onClick={dataFetch}>Click Me</button>
			<ul>{users}</ul>
		</div>
	);
}

export default App;
