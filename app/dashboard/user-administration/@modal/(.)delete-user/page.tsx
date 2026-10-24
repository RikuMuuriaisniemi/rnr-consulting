import DeleteUser from '@/app/ui/dashboard/user-administration/delete-user'
import { Modal } from '@/app/ui/modal'

export default async function Page() {
  'use server'
  return (
    <div className="bg-mist-900">
      <Modal title="Delete users">
        <DeleteUser />
      </Modal>
    </div>
  )
}
