// import { StatsItem } from 'components/userCard/userCard.styled';
import PropTypes from 'prop-types';
// import StatisticsList from "./statisticList";
import StatisticsListItem from "./statisticListItem";
import { StatisticListStyle ,Section} from "./statistics.styled";

export default function Statistics({title ,stats }) {
    return (
        <Section>
            {title &&  (<h2 className="title">{title}</h2>)}
            
            <StatisticListStyle className='stat-list'>
            {stats.map(statsItem => (
                <StatisticsListItem
                    key={statsItem.id}
                    label={statsItem.label}
                    percentage={statsItem.percentage}
                />
            ))}
             </StatisticListStyle>
</Section>
    )
}

StatisticListStyle.prototype = {
    stats: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
    title: PropTypes.string,
}