import { useHttp } from '../../hooks/http.hook';
import { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { heroesDeleted, heroesGet, filtersHeroesSelctor } from './HeroesReduserSlice';
import HeroesListItem from "../heroesListItem/HeroesListItem";
import Spinner from '../spinner/Spinner';

// Задача для этого компонента: +++
// При клике на "крестик" идет удаление персонажа из общего состояния +++
// Усложненная задача:
// Удаление идет и с json файла при помощи метода DELETE

const HeroesList = () => {

	

	const filtersHeroes = useSelector(filtersHeroesSelctor);
	const heroesLoadingStatus = useSelector(state => state.heroes.heroesLoadingStatus);
	const dispatch = useDispatch();
	const { request } = useHttp();

	useEffect(() => {
		dispatch(heroesGet())
	}, []);

	const onHeroDelete = useCallback((id) => {
		request(`http://localhost:3001/heroes/${id}`, "DELETE")
			.then(dispatch(heroesDeleted(id)))
			.catch(err => console.log(err))
	}, [request]);

	if (heroesLoadingStatus === 'loading') {
		return <Spinner />;
	} else if (heroesLoadingStatus === "error") {
		return <h5 className="text-center mt-5">Ошибка загрузки</h5>
	}

	const renderHeroesList = (arr) => {
		if (arr.length === 0) {
			return <h5 className="text-center mt-5">Героев пока нет</h5>
		}

		return arr.map(({ id, ...props }) => {
			return <HeroesListItem key={id} {...props} onHeroDelete={() => onHeroDelete(id)} />
		})
	}

	const elements = renderHeroesList(filtersHeroes);
	return (
		<ul>
			{elements}
		</ul>
	)
}

export default HeroesList;