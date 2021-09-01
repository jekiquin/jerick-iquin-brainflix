// import sass
import './NotAPage.scss';

// import react-router-dom
import {Link} from 'react-router-dom';

function NotAPage() {
    return(
        <main className="page-not-found">
            <h1 className="page-not-found__heading">Page Not Found!</h1>
            <p>Seems like you're trying to visit a page that doesn't exist!</p>
            <p>You can go back <Link className="page-not-found__home-link" to="/">Home</Link> and try again.</p>
        </main>
    )
}

export default NotAPage;