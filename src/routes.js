import passport from 'passport'

import AdminCountryController from './controllers/admin/CountryController'
import AdminUserController from './controllers/admin/UserController'
import ApiCountryController from './controllers/api/CountryController'
import ApiUserController from './controllers/api/UserController'
import AuthCallbackController from './controllers/auth/CallbackController'
import AuthLogOutController from './controllers/auth/LogOutController'
import WebHomeController from './controllers/web/HomeController'

import isAdmin from './middlewares/isAdmin'

const routes = [
  /* ========================================
    Admin
  */
  {
    path: '/admin/country',
    method: 'get',
    middleware: isAdmin,
    controller: AdminCountryController,
  },
  {
    path: '/admin/user',
    method: 'get',
    middleware: isAdmin,
    controller: AdminUserController,
  },

  /* ========================================
    Api
  */
  {
    path: '/api/country',
    method: 'get',
    middleware: isAdmin,
    controller: ApiCountryController,
  },
  {
    path: '/api/country',
    method: 'post',
    middleware: isAdmin,
    controller: ApiCountryController,
  },
  {
    path: '/api/country/:countryId',
    method: 'put',
    middleware: isAdmin,
    controller: ApiCountryController,
  },
  {
    path: '/api/country/:countryId',
    method: 'delete',
    middleware: isAdmin,
    controller: ApiCountryController,
  },
  {
    path: '/api/user',
    method: 'get',
    middleware: isAdmin,
    controller: ApiUserController,
  },
  {
    path: '/api/user/:userId',
    method: 'put',
    middleware: isAdmin,
    controller: ApiUserController,
  },
  {
    path: '/api/user/:userId',
    method: 'delete',
    middleware: isAdmin,
    controller: ApiUserController,
  },

  /* ========================================
    Auth
  */
  {
    path: '/auth/callback',
    method: 'get',
    middleware: passport.authenticate('google', { failureRedirect: '/' }),
    controller: AuthCallbackController,
  },
  {
    path: '/auth/login',
    method: 'get',
    call: passport.authenticate('google', {
      scope: [
        'https://www.googleapis.com/auth/userinfo.email',
        'https://www.googleapis.com/auth/userinfo.profile',
      ],
    }),
  },
  {
    path: '/auth/logout',
    method: 'get',
    controller: AuthLogOutController,
  },

  /* ========================================
    Website
  */
  {
    path: '/',
    method: 'get',
    controller: WebHomeController,
  },
]

export default routes
