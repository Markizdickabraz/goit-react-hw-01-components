import StatisticsList from "./statisticsList"
import data from '../../data.json';
import StatisticsTitle from "./statisticsTitle";
import { Section } from "./statistics.styled";

export default function Statistics() {
  return (
<Section>
      <StatisticsTitle className="title" title="Upload stats" stats={data}>{
        // data.title && <h2>{StatisticsTitle.title }</h2>
      }</StatisticsTitle> 
      <StatisticsList stats= {data} />
</Section>
  )
}

