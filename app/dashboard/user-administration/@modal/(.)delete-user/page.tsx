import DeleteUser from '@/app/ui/dashboard/user-administration/delete-user'
import { Modal } from '@/app/ui/modal'

export default function Page() {
  'use client'
  return (
    <div className="bg-mist-900">
      <Modal title="Delete users">
        <DeleteUser />
      </Modal>
    </div>
  )
}
