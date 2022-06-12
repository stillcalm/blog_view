
import { createRouter, createWebHistory } from 'vue-router'
import Archive from '../views/Archive.vue'
import Blog from '../views/Blog.vue'
import Book from '../views/Book.vue'
import About from '../views/About.vue'
import ArchiveDetail from '../views/ArchiveDetail.vue'
import Login from '../views/admin/Login.vue'
import Admin from '../views/admin/Admin.vue'
import Home from '../views/admin/Home.vue'
import Add from '../views/admin/Add.vue'
import Data from '../views//admin/Data.vue'
import MyBlog from '../views/admin/MyBlog.vue'
import Comments from '../views/admin/Comments.vue'
import FeedBack from '../views/admin/FeedBack.vue'



const routes = [  
    {                      
        path: '/',         
        name: 'Archive',      
        component: Archive
    },
    {
        path: '/book',
        name: 'Book',
        component: Book
    },
    {
        path: '/blog',
        name: 'Blog',
        component: Blog
    },
    {
        path: '/about',
        name: 'About',
        component: About
    },
    {
        path: '/archiveDetail/:id',
        name: 'ArchiveDetail',
        component: ArchiveDetail
    },
    {
        path: '/admin/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/admin',
        name: 'Admin',
        component: Admin,
        children: [{
                path: 'home',
                name: 'Home',
                component: Home
            },{
                path: 'add',
                name: 'Add',
                component: Add
            },{
                path: 'data',
                name: 'Data',
                component: Data
            },{
                path: 'myblog',
                name: 'Myblog',
                component: MyBlog
            },{
                path: 'comments',
                name: 'Comments',
                component: Comments
            },{
                path: 'feedback',
                name: 'FeedBack',
                component: FeedBack
            }
        ]
    },

] 

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})
export default router
