import AddUser from '@/app/ui/add-user'
import DeleteUser from '@/app/ui/delete-user'
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
