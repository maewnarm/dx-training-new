import { FC } from "react"

interface selectedProps {
    selectedValue: string,
}

const Selected: FC<selectedProps> = ({ selectedValue }) => {
    return (
        <div className="about__selected">
            <p>Your selected choice is : {selectedValue}</p>
        </div>
    )
}

export default Selected