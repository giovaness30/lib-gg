import * as React from 'react'
import FormControlLabel from '@mui/material/FormControlLabel'
import Switch from '@mui/material/Switch'
import Divider from '@mui/material/Divider'
import './Header.css'

import {
  setRememberMenuLocalStorage,
  getRememberMenuLocalStorage
} from './HeaderUtils'

export default function MenuAppList({ open, children }) {
  const [switchDisplayMenu, setSwitchDisplayMenu] = React.useState(
    getRememberMenuLocalStorage()
  )

  return (
    <React.Fragment>
      <div
        id='basic-menu'
        className={open ? 'menu-app-list' : 'menu-app-list-none'}
      >
        <div
          id='toggle-menu-apps'
          style={{ textAlign: 'right', color: 'gray' }}
        >
          <FormControlLabel
            label={<label style={{ fontSize: '14px' }}>Fixar</label>}
            className='menu-apps'
            control={
              <Switch
                checked={switchDisplayMenu}
                className='menu-apps'
                onChange={() => {
                  setSwitchDisplayMenu(!switchDisplayMenu)
                  setRememberMenuLocalStorage(!switchDisplayMenu)
                }}
              />
            }
          />
        </div>
        <Divider variant='middle' />
        {children}
      </div>
    </React.Fragment>
  )
}
