'use strict'

import { storiesOf } from '@kadira/storybook'
import React from 'react'
import Repos from './index'

storiesOf('Repos', module)
  .add('with title prop', () => (
    <Repos title='Favoritos'></Repos>
  ))
  .add('with repos', () =>(
    <Repos title='Favoritos'
    repos={[{
      link: 'http://github.com/saulocn',
      name: 'Github'
    }]}
    ></Repos>
  ))