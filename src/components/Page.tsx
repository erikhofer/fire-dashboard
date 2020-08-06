import React from 'react'
import { PageHeader } from 'antd'

export interface PageProps {
  title: React.ReactNode
  subTitle?: React.ReactNode
}

export const Page: React.FC<PageProps> = props => {
  return (
    <>
      <PageHeader
        title={props.title}
        subTitle={props.subTitle}
        style={{ backgroundColor: '#fff', marginTop: 8 }}
      ></PageHeader>
      <div style={{ margin: 16 }}>{props.children}</div>
    </>
  )
}
