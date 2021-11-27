import React from 'react';
import IButton from '../../interfaces/IButton';

const Button: React.FC<IButton> = ({ onClick, _className, iconName, textValue, isdisabled }) => {

	return (
		<button disabled={isdisabled} onClick={() => onClick()} className={_className}><span className="material-icons fs-16">{iconName}</span> {textValue}</button>
	)
}
export default Button;