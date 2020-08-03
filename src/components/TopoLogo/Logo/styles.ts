import styled from 'styled-components'
import { Menu } from '../../../styles/Icons'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 6px 16px;
  z-index: 2;
`

export const Logotipo = styled.h1`
  font-size: 16px;
  font-weight: bold;
  color: var(--white);
`

export const MenuIcon = styled(Menu)`
  width: 25px;
  height: 26px;
  color: var(--white);
  cursor: pointer;
  opacity: 80%;

  &:hover {
    background-color: #fff;
  }
`
