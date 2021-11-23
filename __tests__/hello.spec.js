import { mount } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'

test('displays message', () => {
  const wrapper = mount(HelloWorld, {
    props: {
      msg: 'Hello world'
    }
  })

  // Assert the rendered text of the component
  expect(wrapper.text()).toContain('Hello')
})
