export default function Layout(props){
    const {children}= props
    return(
        <>
            <header>
                <h1 className="text-gradient">Diction</h1>
            </header>
            <main>
                {children}
            </main>
            <footer>
                <small>Created By</small>
                <a target="_blank" href="www.linkedin.com/in/pranav-jha-135b432a5">
                    <img alt="pfp" src="https://i.guim.co.uk/img/media/f76e2c99e1d0683752be0bc8708f37a09cb4c124/0_205_3072_1843/master/3072.jpg?width=1200&quality=85&auto=format&fit=max&s=76cf40bec019f46ed89492c8fdad0193"/>
                    <p>@PranavJha</p>
                    <i className="fa-brands fa-linkedin"></i>
                </a>
                
            </footer>        
        </>
    )
}