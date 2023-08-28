import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { AppContext } from './context/AppContext';

const ExpenseItem = (props) => {
	const { dispatch } = useContext(AppContext);

	const handleDeleteExpense = () => {
		dispatch({
			type: 'DELETE_EXPENSE',
			payload: props.id,
		});
	};

	return (
		<li class='list-group-item d-flex justify-content-between align-items-center'>
			{props.name}
			<div>
				<span>${props.cost}</span>
				<TiDelete size='1.5em' onClick={handleDeleteExpense} />
			</div>
            <style jsx>{`
                .cost {
                    display: inline-block;
                    padding: 0.25em 0.5em;
                    font-size: 1rem;
                    font-weight: bold;
                    background-color: #007bff;
                    color: #fff;
                    border-radius: 0.75rem;
                }
            `}</style>
		</li>
	);
};

export default ExpenseItem;