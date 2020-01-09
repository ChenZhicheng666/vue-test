import Vue from 'vue'
import Router from 'vue-router'

import Login from '@/views/login'
import Layout from '@/layout/layout'

Vue.use(Router)

/**
 * alwaysShow: true           if set true, will always show the root menu, whatever its child routes length
 *                            if not set alwaysShow, only more than ont route under the children
 *                            it will becomes nested mode, otherwise not show the root menu
 * alwaysShow: true           如果设置为true,它将总是现在在根目录。如果不设置的话，当它只有1个子路由的时候，会把
 *                            它的唯一子路由放到跟目录上来，而不显示它自己本身。
 */

export const constantRouterMap = [
  /**
   * title名字与tabs-view上的名字保持一致
   */
  //
  {
    path: '/',
    name: 'login',
    // hidden: true,
    component: Login,
    // redirect: '/login',
    meta: {
      title: '登录'
    }
  },
  {
    path: '/home',
    hidden: true,
    component: Layout,
    //redirect: '/home',
    children: [
      {
        path: 'home',
        name: 'home',
        component: () => import('@/views/main-item/blank'),
        meta: {title: '首页'}
      }
    ]
  },
  {
    path: '/person',
    component: Layout,
    meta: {
      icon: 's-home',
      title: '人员管理'
    },
    children: [
      {
        path: 'userList',
        name: 'userList',
        component: () => import('@/views/person/userList'),
        meta: {icon: 'user', title: '帐户列表'}

      },
      {
        path: 'roleManage',
        name: 'roleManage',
        component: () => import('@/views/person/roleManage'),
        meta: {icon: 's-check', title: '角色分配'}
      }
    ]
  },
  {
    path: '/organ',
    component: Layout,
    meta: {
      icon: 'office-building',
      title: '机构管理'
    },
    children: [
      {
        path: 'organization',
        name: 'organization',
        component: () => import('@/views/organ/organization'),
        meta: {icon: 'coordinate', title: '组织管理'}

      },
      {
        path: 'service',
        name: 'service',
        component: () => import('@/views/organ/service'),
        meta: {icon: 's-promotion', title: '服务分配'}
      }
    ]
  },
  {
    path: '/data',
    component: Layout,
    meta: {
      icon: 'document-copy',
      title: '数据管理'
    },
    children: [
      {
        path: 'search',
        name: 'search',
        component: () => import('@/views/data/search'),
        meta: {icon: 'search', title: '数据查询'}
      },
      {
        path: 'watch',
        name: 'watch',
        component: () => import('@/views/data/watch'),
        meta: {icon: 'monitor', title: '数据可视化'}
      },
      {
        path: 'normal',
        name: 'normal',
        component: () => import('@/views/data/normal'),
        meta: {icon: 'document-checked', title: '数据规范化'}
      }
    ]
  },
  {
    path: '/serve',
    component: Layout,
    meta: {
      icon: 's-tools',
      title: '服务管理'
    },
    children: [
      {
        path: 'tabs1',
        name: 'menu2',
        component: () => import('@/views/serve/interfaceList'),
        meta: {icon: 's-help', title: '服务管理'}
      }
    ]
  }
]

export default new Router({
  // mode: 'history',  require service support
  // scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})

export const asyncRouterMap = []
