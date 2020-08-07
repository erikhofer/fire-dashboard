import React from 'react'
import { Route } from 'antd/lib/breadcrumb/Breadcrumb'
import { Link } from 'react-router-dom'

export const breadcrumbItemRender = (route: Route, _: any, routes: Route[]) => {
  const last = routes.indexOf(route) === routes.length - 1
  return last ? (
    <span>{route.breadcrumbName}</span>
  ) : (
    <Link to={route.path}>{route.breadcrumbName}</Link>
  )
}

export const createBreadcrumb = (routes: Route[]) => ({
  routes,
  itemRender: breadcrumbItemRender
})
