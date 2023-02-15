import PropTypes from 'prop-types';
import { StatisticItem } from "./statistics.styled"

export default function StatisticsListItem({ label, percentage }) {
    return (
        <StatisticItem backgroundColor={`#${Math.floor(Math.random() * 16777215).toString(16)}`}>
      <span className="label">{label}</span>
            <span className="percentage">{ percentage}%</span>
    </StatisticItem> 
    )
}


StatisticsListItem.prototype = {
    label: PropTypes.string.isRequired,
    percentage:PropTypes.string.isRequired,
}