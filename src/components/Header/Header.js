import { NavBar } from '../NavBar/NavBar';

export const Header = (props) => {

    const page = '/' + window.location.pathname.split("/")[1];

    return (
        <header>
           <div className="top-header"></div>

    <div className="bot-header">
                <div className="logo">
                    <img src="https://www.povodedeus.org/v5/wp-content/uploads/2014/06/logo.gif" alt="logo" />
                </div>
                <NavBar
                page={page}
                />
           </div>
        </header>
    );
}