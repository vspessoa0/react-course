ReactDOM.render(
    <div>
        <NavBar />
        <MainContent />
    </div>,
    document.getElementById("root")
);

function NavBar() {
    return (
        <header>
            <nav><p>NAVBAR</p></nav>
        </header>
    )
}

function MainContent() {
    return (<h1>Hello</h1>)
}