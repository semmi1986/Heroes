

// Задача для этого компонента:
// Реализовать создание нового героя с введенными данными. Он должен попадать
// в общее состояние и отображаться в списке + фильтроваться
// Уникальный идентификатор персонажа можно сгенерировать через uiid
// Усложненная задача:
// Персонаж создается и в файле json при помощи метода POST
// Дополнительно:
// Элементы <option></option> желательно сформировать на базе
// данных из фильтров

import { Field, Form, Formik } from "formik";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from 'uuid';
import { heroCreated } from "../heroesList/HeroesReduserSlice";
import { useHttp } from "../../hooks/http.hook";

const HeroesAddForm = () => {

	const { request } = useHttp();

	const [elemHero, setElemHero] = useState([]);
	const dispatch = useDispatch();

	useEffect(() => {
		request('http://localhost:3001/filters')
			.then(setElemHero)
			.catch(() => new Error('error'))
	}, [])


	const elemHetoItem = elemHero.map(item => (<option key={item.name} value={item.name} >{item.label}</option>))

	return (
		<Formik
			initialValues={{
				id: '',
				name: '',
				description: '',
				element: ''
			}}
			onSubmit={(values, { resetForm }) => {
				values.id = uuidv4();
				request(`http://localhost:3001/heroes`, "POST", JSON.stringify(values))
					.then(dispatch(heroCreated(values)))
					.then(() => resetForm({
						values: {
							id: '',
							name: '',
							description: '',
							element: ''
						}

					}))
					.catch(() => new Error('error'))
			}}
		>

			<Form className="border p-4 shadow-lg rounded">
				<div className="mb-3">
					<label htmlFor="name" className="form-label fs-4">Имя нового героя</label>
					<Field
						required
						type="text"
						name="name"
						className="form-control"
						id="name"
						placeholder="Как меня зовут?"
					/>
				</div>

				<div className="mb-3">
					<label htmlFor="text" className="form-label fs-4">Описание</label>
					<Field
						required
						name="description"
						className="form-control"
						id="text"
						placeholder="Что я умею?"
						style={{ "height": '130px' }}
						as="textarea"
					/>
				</div>

				<div className="mb-3">
					<label htmlFor="element" className="form-label">Выбрать элемент героя</label>
					<Field
						required
						className="form-select"
						id="element"
						name="element"
						as="select">
						<option >Я владею элементом...</option>
						{elemHetoItem}
					</Field>
				</div>

				<button type="submit" className="btn btn-primary">Создать</button>
			</Form>
		</Formik>
	)
}

export default HeroesAddForm;


