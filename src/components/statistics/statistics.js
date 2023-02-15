// import { StatsItem } from 'components/userCard/userCard.styled';
// import PropTypes from 'prop-types';
import StatisticsList from "./statisticList";

export default function Statistics({ title }, { stats }) {
    return (
        <section>
            {title} && <h2>{title}</h2>

            <StatisticsList stats={ stats} />          
</section>
    )
}