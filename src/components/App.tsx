import React, { useState } from "react";
import Button from "./ui/Button";
import ToDoItem from "./ToDoItem";
import ItodoArray from "./../interfaces/ItodoArray";
/* interface FormProps<T> {
	values: T;
	children: (values: T) => JSX.Element;
};
const FormX = <T extends {}>({ values, children }: FormProps<T>) => {
	return children(values);
};




const dataObject: { firstname: String, lastname: String } = {
	firstname: "Oğuzhan",
	lastname: "Pişkin"
}; */


const App: React.FC = () => {
	const [toDoInputValue, setToDoInputValue] = useState<string>("");
	const [toDoList, updateToDo] = useState<ItodoArray[]>([]);

	const removeToDo = (id: number) => {

		console.log(toDoList, id)
		updateToDo(toDoList.filter(item => item.id !== id));
	};

	const createToDo = () => {

		let todo: ItodoArray = {
			name: toDoInputValue,
			id: new Date().getMilliseconds()
		}
		updateToDo((todos: ItodoArray[]) => [...todos, todo]);
		setToDoInputValue("");
	}

	const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {

		if (event.key === 'Enter') {
			if (toDoInputValue.length > 0) {
				createToDo()
			}
		}
	}
	return (


		<div className="todo">
			<ToDoItem toDoList={toDoList} removeToDo={removeToDo} />

			{/* <FormX values={dataObject}>{(values) => <div>Hello {values.firstname} {values.lastname}</div>}</FormX> */}
			<div className="todo-footer">
				<input type="text" onChange={e => setToDoInputValue(e.target.value)} value={toDoInputValue} onKeyPress={handleKeyPress} />
				<Button isdisabled={!(toDoInputValue.length > 0)} _className="btn btn-info" onClick={() => createToDo()} textValue="Test" />

			</div>
		</div>
	);
}
export default App;