import React from 'react'
import { PageHeader as AntPageHeader } from 'antd'
import { PageHeaderProps } from 'antd/lib/page-header'

export const PageHeader: React.FC<PageHeaderProps> = props => {
  const { style, ...restProps } = props
  return (
    <AntPageHeader
      style={{ backgroundColor: '#fff', marginTop: 4, ...style }}
      {...restProps}
    ></AntPageHeader>
  )
}
