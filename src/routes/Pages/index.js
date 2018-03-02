import Catering from './components/Catering';
import Coupons from './components/Coupons';
import Gallery from './components/Gallery';
import Events from './components/Events';
import ContactUs from './components/ContactUs';

// Sync route definition
export default [{
        path: '/catering',
        component: Catering
    },
    {
        path : '/coupons',
        component : Coupons
    },
    {
        path : '/gallery',
        component : Gallery
    },
    {
        path : '/events',
        component : Events
    },
    {
        path : '/contact-us',
        component : ContactUs
    }

]
