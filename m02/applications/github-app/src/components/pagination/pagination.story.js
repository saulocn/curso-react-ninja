'use strict'

import React from 'react'
import { storiesOf, module } from '@kadira/storybook'
import Pagination from './index'

const stories = storiesOf('<Pagination />', module)
stories.add('without props', () => (
  <div>
    <Pagination />
  </div>
))

stories.add('with total and activePage', () => (
  <Pagination total={10} activePage={5} />
))

stories.add('with page link', () => (
  <Pagination total={3} activePage={1} pageLink='http://google.com/page/%page%' />
))

stories.add('with callback', () => (
  <Pagination total={15} activePage={8} pageLink='http://google.com/page/%page%'
    onClick={
      (page) => {
        window.alert(page)
      }
    }
  />
))
