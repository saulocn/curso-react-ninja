'use strict'

import React from 'react'
import { storiesOf } from '@kadira/storybook'
import SaveMessage from './index'

const stories = storiesOf('SaveMessage', module)

stories.add('Save Message with isSaving===null', () => (
  <div style={{ background: '#ccc' }}>
        Message: '<SaveMessage isSaving={null} />'
  </div>
))

stories.add('Save Message with isSaving===false', () => (
  <div style={{ background: '#ccc' }}>
        Message: '<SaveMessage isSaving={false} />'
  </div>
))

stories.add('Save Message with isSaving===true', () => (
  <div style={{ background: '#ccc' }}>
        Message: '<SaveMessage isSaving />'
  </div>
))
