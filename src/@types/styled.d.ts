import 'styled-components'
import { defaultTheme } from '../styles/themes/default'

type Themetype = typeof defaultTheme

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  export interface DefaultTheme extends Themetype { }
}
