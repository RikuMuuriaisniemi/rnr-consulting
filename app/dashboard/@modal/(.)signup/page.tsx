import Signup from '@/app/ui/dashboard/signup'
import { Modal } from '@/app/ui/modal'

export default function Page() {
  return (
    <div className="bg-mist-900">
      <Modal title="Sign up">
        <Signup />
      </Modal>
    </div>
  )
}
