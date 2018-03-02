// We only need to import the modules necessary for initial render
import PageLayout from '../layouts/PageLayout/PageLayout'
import Home from './Home'
import MenuRoute from './Menu'
import CheckoutRoute from './Checkout'
import Pages from './Pages';

export const createRoutes = (store) => ({
  path        : '/',
  component   : PageLayout,
  indexRoute  : Home,
  childRoutes : [
    ...MenuRoute,
    ...CheckoutRoute,
    ...Pages
  ]
})

export default createRoutes
