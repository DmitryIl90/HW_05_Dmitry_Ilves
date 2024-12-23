import { getRandomIntInclusive } from './getRandomIntInclusive'

export function indexGeneratorEST(prefix: string = 'EST-'): string {
  return prefix + getRandomIntInclusive(1000, 9999)
}
