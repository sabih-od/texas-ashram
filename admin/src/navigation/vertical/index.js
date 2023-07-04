import BookIcon from '@mui/icons-material/AutoStoriesOutlined';
import ContactIcon from '@mui/icons-material/ContactPhoneOutlined';
import DonationIcon from '@mui/icons-material/VolunteerActivismOutlined';
import EventIcon from '@mui/icons-material/EventOutlined';
import PostIcon from '@mui/icons-material/DynamicFeedOutlined';
import {BullhornOutline} from 'mdi-material-ui';
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined';


const navigation = () => {
    return [
        // {
        //   title: 'Dashboard',
        //   icon: HomeOutline,
        //   path: '/'
        // },
        {
            title: 'Books',
            icon: BookIcon,
            path: '/books'
        },
        {
            title: 'Announcements',
            icon: BullhornOutline,
            path: '/announcements'
        },
        {
            title: 'Contacts',
            icon: ContactIcon,
            path: '/contacts'
        },

        {
            title: 'Donations',
            icon: DonationIcon,
            path: '/donations'
        },

        {
            title: 'Events',
            icon: EventIcon,
            path: '/events'
        },

        {
            title: 'Posts',
            icon: PostIcon,
            path: '/posts',
        },

        {
            title: 'Users',
            icon: PeopleOutlinedIcon,
            path: '/users',
        },

        // {
        //   title: 'Account Settings',
        //   icon: AccountCogOutline,
        //   path: '/account-settings'
        // },
        // {
        //   sectionTitle: 'Pages'
        // },
        // {
        //   title: 'Login',
        //   icon: Login,
        //   path: '/pages/login',
        //   openInNewTab: true
        // },
        // {
        //   title: 'Register',
        //   icon: AccountPlusOutline,
        //   path: '/pages/register',
        //   openInNewTab: true
        // },
        // {
        //   title: 'Error',
        //   icon: AlertCircleOutline,
        //   path: '/pages/error',
        //   openInNewTab: true
        // },
        // {
        //   sectionTitle: 'User Interface'
        // },
        // {
        //   title: 'Typography',
        //   icon: FormatLetterCase,
        //   path: '/typography'
        // },
        // {
        //   title: 'Icons',
        //   path: '/icons',
        //   icon: GoogleCirclesExtended
        // },
        // {
        //   title: 'Cards',
        //   icon: CreditCardOutline,
        //   path: '/cards'
        // },
        // {
        //   title: 'Tables',
        //   icon: Table,
        //   path: '/tables'
        // },
        // {
        //   icon: CubeOutline,
        //   title: 'Form Layouts',
        //   path: '/form-layouts'
        // }
    ]
}

export default navigation
