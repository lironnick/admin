import styled from 'styled-components'

// TL - TOPO LOGO
// TB - TOPO DE BUSCA
// TN - TOPO DE NOTIFICAÇÃO
// TU - TOPO USUÁRIO
// LM - LISTAGEM DE MENU
// CP - CORPO
// FT - FOOTER

// SL - Server List
// SN - Server Name
// CI - Channel Info
// CL - Channel List
// CD - Channel Data
// UI - User Info

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 240px auto 240px 240px;
  grid-template-rows: 40px auto 52px;
  grid-template-areas:
    'TL TB TN TU'
    'LM CP CP CP'
    'LM FT FT FT';
  /* grid-template-areas:
    'SL SN CI CI'
    'SL CL CD UL'
    'SL UI CD UL'; */
  height: 100vh;
`
