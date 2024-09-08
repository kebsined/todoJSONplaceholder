import styles from './App.module.css';
import { useEffect, useState } from 'react';

export const App = () => {
	const [todos, setTodos] = useState([]);
	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/todos')
			.then(loadedData => loadedData.json())
			.then(loadedTodos => {
				setTodos(loadedTodos);
			});
	});
	return (
		<div className={styles.App}>
			<h1 className={styles.title}>TODOS</h1>
			<ul className={styles.todoList}>
				{todos.map(({ title, id }) => (
					<li className={styles.todo} key={id}>
						{`${title}`}
					</li>
				))}
			</ul>
		</div>
	);
};
