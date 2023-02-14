import PropTypes from 'prop-types';
import { Tr } from "./transaction.styled"
export default function Transaction ({id, type, amount, currency}) {
    return (
    <Tr key ={id}>
      <td>{type}</td>
        <td>{ amount}</td>
      <td>{currency}</td>
    </Tr>
    )
};

Transaction.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
}


