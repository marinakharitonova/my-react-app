import React from 'react'
import AboutIcon from 'shared/assets/icons/about.svg?react'
import MainIcon from 'shared/assets/icons/main.svg?react'
import ProfileIcon from 'shared/assets/icons/main.svg?react'
import ArticleIcon from 'shared/assets/icons/article.svg?react'
import { AppRoutes } from 'shared/consts/interface.ts'

export interface SidebarItemType {
  path: string
  text: string
  Icon: React.VFC<React.SVGProps<SVGSVGElement>>
  withAuth?: boolean
}

export const sidebarItemsList: SidebarItemType[] = [
  {
    path: AppRoutes.MAIN,
    Icon: MainIcon,
    text: 'main',
  },
  {
    path: AppRoutes.ABOUT,
    Icon: AboutIcon,
    text: 'about',
  },
  {
    path: AppRoutes.PROFILE,
    Icon: ProfileIcon,
    text: 'profile',
    withAuth: true,
  },
  {
    path: AppRoutes.ARTICLES,
    Icon: ArticleIcon,
    text: 'articles',
    withAuth: true,
  },
]
