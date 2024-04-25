import AddNewTaskComponent from '@/components/AddNewTaskComponent'
import MonthlyStatisticsComponent from '@/components/MonthlyStatisticsComponent'
import WorkspacePopupComponent from '@/components/WorkspacePopupComponent'
import React from 'react'

export default function page() {
  return (
    <div>
        <MonthlyStatisticsComponent/>
        <WorkspacePopupComponent/>
    </div>
  )
}
