import { ChangeEvent, useState,useEffect } from "react"

const Button = () => {
    const [count, setCount] = useState<number>(0)
    const [machineName, setMachineName] = useState("initial")
    var a = 0
    var msg = ""
    // state name = count
    // function control state = setCount
    console.log("render")

    function notStateClick() {
        a += 1
        console.log(a)
    }

    useEffect(() => {
        console.log("reset machine name")
        setMachineName("")
    },[])

    useEffect(() => {
        // console.log("set effect")
        document.title = `You clicked ${count} times`
    }, [count])

    // function addCount() {
    //     setCount(count+1)
    //     console.log(count)
    //     document.title = `You clicked ${count} times`
    //     console.log("end")
    // }

    function addMachine(e: ChangeEvent<HTMLInputElement>) {
        const value = e.currentTarget.value
        setMachineName(("MC_" + value).toUpperCase())
    }


    return (
        <div className="button-group">
            <button onClick={() => setCount(count + 1)}>
            {/* <button onClick={() => addCount()}> */}
                Click me (count)
            </button>
            <button onClick={notStateClick}>
                Click me (a)
            </button>
            <h1>count = {count}</h1>
            <h1>a = {a}</h1>
            <label>Machine name</label>
            <input type="text" onChange={(e) => addMachine(e)} />
            <p>machine : {machineName}</p>
        </div>
    )
}

export default Button