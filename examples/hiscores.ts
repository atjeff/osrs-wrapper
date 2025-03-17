import { getHiscores } from 'osrs-wrapper'

async function main() {
  const hiscores = await getHiscores('bald')

  console.log(hiscores)
}

main()
