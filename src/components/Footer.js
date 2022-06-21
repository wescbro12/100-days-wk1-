import { FaGithub } from 'react-icons/fa'
import { FaTwitterSquare } from 'react-icons/fa'
import { FaLinkedinIn } from 'react-icons/fa'
import { FaEnvelope } from 'react-icons/fa'

export default function Footer() {
    return (
        <div className="Footer">
            <div className="contact">
                <h3>Connect With Me</h3>
                <ul>
                    <li><a href="https://github.com/wescbro12" target="blank"><FaGithub /></a></li>
                    <li><a href="https://twitter.com/wesbrodev" target="blank"><FaTwitterSquare /></a></li>
                    <li><a href="www.linkedin.com/in/wesleybrown12/" target="blank"><FaLinkedinIn /></a></li>
                    <li><a href="mailtoLwesbrodev@gmail.com" target="blank"><FaEnvelope /></a></li>
                </ul>
            </div>
        </div>
    )
}