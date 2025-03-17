import { getExchangeStats, getExchangeTrendGraph } from 'osrs-wrapper'

async function main() {
  const item = await getExchangeStats(4151)
  console.log(item)

  const graph = await getExchangeTrendGraph(4151)
  console.log(graph)
}

main()
