
import { UserButton } from "@clerk/nextjs"
export default function Home() {

  return (
   <div >
    dashboard page (protected)
<UserButton afterSignOutUrl="/"/>
   </div>
  )
}