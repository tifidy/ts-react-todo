import ItodoArray from "./ItodoArray";
export default interface IToDoComponent {
	toDoList: ItodoArray[],
	removeToDo: Function,
}