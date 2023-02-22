

export const NavBar = (props) => {

    const navLinks = [
        {name: "Home", link: "/", active: true},
        {name: "Apostilas", link: "/apostilas", active: false},
        {name: "Livros", link: "/livros", active: false},
        {name: "Reuniões MP3", link: "/reunioes-mp3", active: false},
        {name: "Reuniões Digitadas", link: "/reunioes-digitadas", active: false},
        {name: "Fotos", link: "/fotos", active: false},
        {name: "Loja Online", link: "/loja-online", active: false}
    ];

//eslint-disable-next-line
    navLinks.map(nav => {
        if (nav.link.toLocaleLowerCase() === props.page.toLocaleLowerCase()) {
            nav.active = true;
        } else {
            nav.active = false;
        }
    })

    return (
                <nav>
                    <ul>
                        {navLinks.map((nav, index) => (
                            <li key={`NavBarLink-${index}`} className={nav.active ? "active" : ""}>
                                <a href={nav.link}>{nav.name}</a>
                            </li>
                        ))}
                    </ul>
                </nav>
    )
}