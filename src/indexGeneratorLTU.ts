import { getRandomIntInclusive } from './getRandomIntInclusive'

export function indexGeneratorLTU(prefix: string = 'LTU-'): string {
  return prefix + getRandomIntInclusive(1000, 9999)
}
