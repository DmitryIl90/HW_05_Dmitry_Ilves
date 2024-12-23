import { getRandomIntInclusive } from './getRandomIntInclusive'

export function indexGeneratorLVA(prefix: string = 'LVA-'): string {
  return prefix + getRandomIntInclusive(1000, 9999)
}
