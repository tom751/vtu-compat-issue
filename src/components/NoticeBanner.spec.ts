import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import NoticeBanner from '@/components/NoticeBanner.vue'

describe('NoticeBanner', () => {
  it('renders properly', () => {
    const wrapper = mount(NoticeBanner, { propsData: { msg: 'Hello Vitest' } })
    expect(wrapper.text()).toContain('Hello Vitest')
  })
})
