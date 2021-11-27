import React from 'react'
import IToDoComponent from '../interfaces/IToDoComponent';
import ItodoArray from '../interfaces/ItodoArray';
import Button from "./ui/Button";

const ToDoItem: React.FC<IToDoComponent> = ({ toDoList, removeToDo }) => {



	return (
		<div className="todo-container">
			{
				toDoList.map((item: ItodoArray) => {
					return (
						<p className="todo-item" key={item.id}>{item.name} <Button _className="btn btn-default" onClick={() => removeToDo(item.id)} iconName="delete" /></p>
					)
				}
				)
			}
		</div>
	)
}


export default ToDoItem;