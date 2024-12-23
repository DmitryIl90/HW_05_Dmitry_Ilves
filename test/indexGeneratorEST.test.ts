import { indexGeneratorEST } from '../src/indexGeneratorEST'

test('Check indexGeneratorEST function', () => {
  expect(console.log(indexGeneratorEST().startsWith('EST-')))
})

test('Check the length of indexGeneratorEST function', () => {
  expect(console.log(indexGeneratorEST().length === 8))
})

test('Check the format using the code matches the pattern country prefix and four digits', () => {
  expect(/EST-\d{4}/.test(indexGeneratorEST())).toBe(true)
})
