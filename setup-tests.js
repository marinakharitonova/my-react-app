// eslint-disable-next-line no-undef
import '@testing-library/jest-dom/extend-expect'
import 'cross-fetch/polyfill'

import { TextDecoder, TextEncoder } from 'util'

Object.assign(global, { TextDecoder, TextEncoder })
