import Login from '@/app/ui/dashboard/login'
import { Modal } from '@/app/ui/modal'

export default function Page() {
  return (
    <div className="bg-mist-900">
      <Modal title="Sign in">
        <Login />
      </Modal>
    </div>
  )
}
