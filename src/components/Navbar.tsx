import Logo from '../assets/untitledUI.svg';

const Navbar = () => {
    return (
        <div className="h-16 w-full flex justify-between items-center py-2 px-28 font-sans font-semibold">
            <div className="flex items-center text-xl font-sans">
                <img src={Logo} />
                Untitled UI
            </div>
            <nav>
                <ol className="flex justify-around items-center">
                    <li className="mx-4">Home</li>
                    <li className="mx-4">Products</li>
                    <li className="mx-4">Categories</li>
                    <li className="mx-4">Log in</li>
                </ol>
            </nav>
        </div>
    )
}

export default Navbar;