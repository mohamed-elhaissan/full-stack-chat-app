import { useParams } from "react-router"

export const UserChat = () => {
    const {id} = useParams()
  return (
    <div className="">{id}</div>
  )
}
