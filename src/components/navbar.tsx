import Link from 'next/link'
import { useAppSelector } from '../app/hooks'
import { dropdownValue,lineValue } from '../app/features/dropdownSlice'

const Navbar = () => {
    const dropdownText = useAppSelector(dropdownValue)
    const lineText = useAppSelector(lineValue)

    return (
        <div className="navbar">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/informations">Informations</Link>
            <Link href="/data">Data</Link>
            <p>{dropdownText}</p>
            <p>{lineText}</p>
        </div>
    )
}

export default Navbar