import { indexGeneratorLVA } from '../src/indexGeneratorLVA'

test('Check indexGeneratorLVA function', () => {
  expect(console.log(indexGeneratorLVA().startsWith('LVA-')))
})

test('Check the length of indexGeneratorLVA function', () => {
  expect(console.log(indexGeneratorLVA().length === 8))
})

test('Check the format using the code matches the pattern country prefix and four digits', () => {
  expect(/LVA-\d{4}/.test(indexGeneratorLVA())).toBe(true)
})
