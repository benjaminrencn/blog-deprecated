import config from './config'

export const PERMISSIONS = {
  ABOUT_PAGE: Symbol('ABOUT_PAGE'),
}

export const init = () => {
  config.register('permission', {
    CEO: {
      [PERMISSIONS.ABOUT_PAGE]: true,
    },
    COO: {
      [PERMISSIONS.ABOUT_PAGE]: false,
    },
  })
}

export const getPermissionByRole = (role) => config.get('permission')[role]
