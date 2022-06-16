// Container
import { FC } from 'react'
import { ChildrenTypes } from '@/types'

const Container: FC<ChildrenTypes> = ({ children }) => {
  return <div className="container">{children}</div>
}

export default Container
