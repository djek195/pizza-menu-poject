
const Footer = () => {
    const hour = new Date().getHours();
    const openHour = 12;
    const closeHour = 22;
    const isOpen = hour >= openHour && hour <= closeHour;

    return <footer className='footer'>
        {isOpen ?  "We are currently open" : "We are currently close"}
    </footer>
}

export default Footer;