import AddUser from '@/app/ui/dashboard/user-administration/add-user'
import { Modal } from '@/app/ui/modal'

export default function Page() {
  'use client'
  return (
    <div className="bg-mist-900">
      <Modal title="Add users">
        <AddUser />
      </Modal>
    </div>
  )
}
