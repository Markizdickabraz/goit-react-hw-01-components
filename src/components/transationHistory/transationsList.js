import PropTypes from 'prop-types';
import Transaction from "./transation";

export default function TransactionsList( {items }) {
    return ( 
        <tbody>
            {items.map(item => (
        <Transaction
            key={item.id}
            type={item.type}
            amount={item.amount}
            currency={item.currency}/>
            )) }
            
    </tbody>
    )}

TransactionsList.propTypes = {
    items: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
    }