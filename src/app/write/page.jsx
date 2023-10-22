"use client"
import NewPost from "@/components/newPost/NewPost"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"

const Page = () => {
  const router = useRouter()
  const {status} = useSession();


  if(status==="unauthenticated"){
    router.push("/login")
  }

  return (
    <div>
      <NewPost/>
    </div>
  )
}

export default Page