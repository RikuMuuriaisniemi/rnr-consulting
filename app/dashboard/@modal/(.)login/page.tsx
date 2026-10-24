import Login from '@/app/ui/dashboard/login'
import { Modal } from '@/app/ui/modal'

export default function Page() {
  return (
    <div>
      <Modal title="Sign in">
        <Login />
      </Modal>
    </div>
  )
}
