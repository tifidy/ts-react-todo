import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";


/* import * as styles from "./sass/bootstrap.scss"; */
ReactDOM.render(<App />, document.getElementById('root'))











/*

export function log(str: string) {
	console.log(str);
}

interface IMakarna {
	greeting: String;
	klas: IFood;
	setMakarna(_class: IFood): void;
}

interface IFood {
	name: String;
}

class Food implements IFood {
	name = "Bu Güzel bir yemek";
}


class A implements IMakarna {
	greeting = "test";
	klas: IFood = new Food();

	setMakarna(_class: IFood): IFood {
		this.klas = _class;
		return this.klas;
	}
}

const AcLass = new A();
const FoodObject = AcLass.setMakarna(new Food())
console.log(FoodObject.name);
 */
