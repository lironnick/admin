import React from 'react'

import { Grid } from './styles'

import TopoLogo from '../TopoLogo'
import TopoBusca from '../TopoBusca'
import TopoNotificacao from '../TopoNotificacao'
import TopoUsuario from '../TopoUsuario'
import ListagemMenu from '../ListagemMenu'

const Layout: React.FC = () => {
  return (
    <Grid>
      <TopoLogo />
      <TopoBusca />
      <TopoNotificacao />
      <TopoUsuario />
      <ListagemMenu />
    </Grid>
  )
}

export default Layout
