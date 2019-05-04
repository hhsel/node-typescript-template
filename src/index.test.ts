import { hello } from './index'

test('aaa', () => {
    expect(hello('world')).toBe('hello, world!')
})
