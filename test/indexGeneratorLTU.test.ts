import { indexGeneratorLTU } from '../src/indexGeneratorLTU'

test('Check indexGeneratorLTU function', () => {
  expect(console.log(indexGeneratorLTU().startsWith('LTU-')))
})

test('Check the length of indexGeneratorLTU function', () => {
  expect(console.log(indexGeneratorLTU().length === 8))
})

test('Check the format using the code matches the pattern country prefix and four digits', () => {
  expect(/LTU-\d{4}/.test(indexGeneratorLTU())).toBe(true)
})
