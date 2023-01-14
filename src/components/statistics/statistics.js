import StatisticsList from "./statisticsList"
import data from '../../data.json'

export default function Statistics() {
  return (
<section className="statistics">
      <h2 className="title">Upload stats</h2>
      <StatisticsList stats= {data} />
</section>

  )
}
