import styled from 'styled-components'
import { ExpandMore } from '../../styles/Icons'

export const Container = styled.div`
  grid-area: TL;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  background-color: var(--tertiary);
  /* padding: 11px 0; */
  /* padding: 0 11px 0 16px; */
  max-height: 100vh;
  justify-content: space-between;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 0px 0px;
  z-index: 2;
`
