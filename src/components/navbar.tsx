import Link from 'next/link'

const Navbar = () => {
    return (
        <div className="navbar">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/informations">Informations</Link>
        </div>
    )
}

export default Navbar