
import StatisticsListItem from "./statisticsListItem";

export default function StatisticsList({stats}) {
    return (
        <ul>
            {stats.map(statsItem => (
                <StatisticsListItem
                    key={statsItem.id}
                    label={statsItem.label}
                    percentage={statsItem.percentage}
                />
            ))}
        </ul>
    )
}