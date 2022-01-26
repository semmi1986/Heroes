
// Задача для этого компонента:
// Фильтры должны формироваться на основании загруженных данных
// Фильтры должны отображать только нужных героев при выборе
// Активный фильтр имеет класс active
// Изменять json-файл для удобства МОЖНО!
// Представьте, что вы попросили бэкенд-разработчика об этом

import classNames from "classnames";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { actionFilterChanged, filtersGet } from "./FilterReduserSlise";
// import { useHttp } from "../../hooks/http.hook";
import Spinner from '../spinner/Spinner';
import { selectAll } from "./FilterReduserSlise";





const HeroesFilters = () => {

	// const { request } = useHttp();
	const dispatch = useDispatch();
	const {filtersLoadingStatus, activeFilter } = useSelector(state => state.filter);
	const filterAll = useSelector(selectAll)

	useEffect(() => {
		dispatch(filtersGet())
	}, [])



	if (filtersLoadingStatus === "loading") {
		return <Spinner />;
	} else if (filtersLoadingStatus === "error") {
		return <h5 className="text-center mt-5">Ошибка загрузки</h5>
	}


	const renderFiltersItem = (arr) => {
		if (arr.length === 0) {
			return <h5 className="text-center mt-5">Героев пока нет</h5>
		}

		return arr.map((item) => {
			const btnClass = classNames('btn', item.className, {
				'active': item.name === activeFilter
			})
			return <button
				key={item.name}
				onClick={() => dispatch(actionFilterChanged(item.name))}
				className={btnClass} >
				{item.label}
			</button>
		})
	}


	const elemFilters = renderFiltersItem(filterAll)


	return (
		<div className="card shadow-lg mt-4">
			<div className="card-body">
				<p className="card-text">Отфильтруйте героев по элементам</p>
				<div className="btn-group">
					{elemFilters}
				</div>
			</div>
		</div>
	)
}

export default HeroesFilters;