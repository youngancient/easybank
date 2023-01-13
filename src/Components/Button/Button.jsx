import './style.css'
import { motion } from 'framer-motion';


const Button = () => {
    return ( 
        <motion.button
        whileHover={{
            scale: 1.1,
            textShadow: '0px 0px 8px rgb(255,255,255)',
            boxShadow: '0px 0px 8px rgb(255,255,255)'
        }}>
            Request Invite

        </motion.button>
     );
}
 
export default Button;