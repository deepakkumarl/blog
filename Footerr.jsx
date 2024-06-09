import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";




const Footerr =() => {
    const date = new Date()

    return(
        <>
        <h4>@copy {date.getFullYear()}  </h4>
        <h2>If any queries contact me</h2>
        <a href="https://www.linkedin.com/in/deepakkumarl/" target="_blank"><FaLinkedin /></a>
        <a href="https://www.instagram.com/deepak_004_uchicha?igsh=bW1sZ2RyOXg2dnpx" target="_blank"><FaInstagramSquare /></a>
        <a href="https://wa.me/${8925798454}" target="_blank"><FaWhatsappSquare /></a>
        <h3>Contact no :<b>8925798454</b></h3>
        <h3>gmail :<b> kumar.dee2005@gmail.com</b></h3>


        </>
        

    )
}

export default Footerr