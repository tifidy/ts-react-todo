export default interface IButton {
	onClick: Function,
	iconName?: string | undefined,
	textValue?: string,
	_className?: string,
	isdisabled?: boolean | undefined,
}