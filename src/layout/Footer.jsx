function Footer() {
    return <footer className="page-footer #b2dfdb teal lighten-4">        
        <div className="footer-copyright">
            <div className="container">
            © {new Date().getFullYear()} Copyright Text           
            <a 
                className="grey-text text-lighten-4 right"
                href="https://yulya163.github.io/movies-project/"
                target="blank" 
                rel="noreferrer"
            >Repo</a>
            </div>
        </div>
    </footer>
}
export {Footer};
