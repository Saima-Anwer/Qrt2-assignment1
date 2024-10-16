import Link from "next/link"
import Style from "../service/service.module.css"

const ServicePage = () => {
  return (
    <div className={Style.container}>
      <h1 className={Style.header}>This is Service Page</h1>
    
        <li><Link href="/Service/Web-development">This is my web development page</Link></li>
      
    </div>
  )
}

export default ServicePage

