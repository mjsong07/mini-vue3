import { createApp,h } from '../'
describe('创建应用', () => {
  it('createApp', () => {
    const Comp = {
      render() {
        return h('div', null, 'hi vue3')
      },
    }
    const root = document.createElement('div')
    const vm = createApp(Comp)
    vm.mount(root)
    expect(root.innerHTML).toBe('<div>hi vue3</div>')
  })

  it('createApp with props', () => {
    const Comp = {
      render() {
        return h('div', {id:'app'}, 'hi vue3')
      },
    }
    const root = document.createElement('div')
    const vm = createApp(Comp)
    vm.mount(root)
    expect(root.innerHTML).toBe('<div id="app">hi vue3</div>')
  })
})