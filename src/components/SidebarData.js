//ファイルとして習得
import HomeIcon from '@mui/icons-material/Home';
import EmailIcon from '@mui/icons-material/Email';
import PostAddIcon from '@mui/icons-material/PostAdd';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import LoginIcon from '@mui/icons-material/Login';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
export const SidebarData=[
    {
        title:"home",
        icon:<HomeIcon />,
        link:"/home",
    },
    {
        title:"login",
        icon:<LoginIcon />,
        link:"/api/v1/auth",
    },
    {
        title:"signin",
        icon:<AssignmentIndIcon />,
        link:"/api/v1/users",
    },
    {
        title:"メール",
        icon:<EmailIcon/>,
        link:"/mail",
    },
    {
        title:"post",
        icon:<PostAddIcon  />,
        link:"/api/v1/post",
    },
    {
        title:"postList",
        icon:<FormatListBulletedIcon  />,
        link:"/api/v1/postList",
    },
]



