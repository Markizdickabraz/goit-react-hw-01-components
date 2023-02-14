import StatisticsList from "./statisticsList"
import data from '../../data.json';
import StatisticsTitle from "./statisticsTitle";
import { Section } from "./statistics.styled";

export default function Statistics() {
  return (
<Section>
      <StatisticsTitle className="title" title="Upload stats" stats={data} /> 
      <StatisticsList stats= {data} />
</Section>
  )
}

