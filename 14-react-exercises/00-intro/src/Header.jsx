import "./header.css"
function Header() {
    return (
        <>
            <h1>Sumioro</h1>
            <ul id="HeaderAnchors">
                <li>Home</li>
                <li>About</li>
                <li>Services</li>
                <li>Contact</li>
            </ul>
        </>
    );
}

export default Header;


// basically component is a function that return JSX
// function someComponentName() {
// return (
// ?whatever JSX is to be written here?
// );
// }
// export default someComponentName; 