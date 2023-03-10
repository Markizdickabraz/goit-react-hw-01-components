import PropTypes from 'prop-types';
import { StatisticItem } from "./statistics.styled"

export default function StatisticsListItem({ id, label, percentage }) {
    return (
        <StatisticItem className='item' key={ id} backgroundColor={`#${Math.floor(Math.random() * 16777215).toString(16)}`}>
      <span className="label">{label}</span>
            <span className="percentage">{ percentage}%</span>
    </StatisticItem> 
    )
}


StatisticsListItem.prototype = {
    id:PropTypes.number.isRequired,
    label: PropTypes.string.isRequired,
    percentage:PropTypes.string.isRequired,
}