
import { motion } from "framer-motion"
import "./Footer.css"

function Footer (){
    return (
        <motion.div
            initial={{opacity: 0, scale: 0}}
            whileInView={{opacity: 1, scale: 1}}
            transition={{duration: 0.7}}
            viewport={{once: true}}

        >
            <hr />
            <p className="footer-description">© 2026 Gerald Morales. Designed & Built with passion.</p>
        </motion.div>
    )
}

export default Footer