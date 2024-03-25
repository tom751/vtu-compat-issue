import { describe, it, expect } from 'vitest'

import { shallowMount } from '@vue/test-utils'
import HomeView from '@/views/HomeView.vue'
import NoticeBanner from '@/components/NoticeBanner.vue'

describe('HomeView', () => {
  it('renders properly', () => {
    const wrapper = shallowMount(HomeView)
    expect(wrapper.findComponent(NoticeBanner).exists()).toBe(true)
  })
})
