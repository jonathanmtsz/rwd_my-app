import { useState } from "react";
import { Button } from "../Button/Button";

interface CounterProps{
    step?: number
    start?: number
}

export const Counter = ({ step = 1, start = 0 }: CounterProps) => {
    const [count, setCount] = useState(start)
    const [isDisabled, setIsDisabled] = useState(true)

    const handleDecrement = () => {
        console.log("Decrementar")
        setCount(count - step)
        if (count <= 0){
            setIsDisabled(true)
        }
    }

    const handleIncrement = () => {
        console.log("Incrementar")
        setCount(count + step)
        if(count >= 0){
            setIsDisabled(false)
        }
    }
    return (
        <div>
            <Button danger onClick={handleDecrement} disabled={isDisabled}>
                Decrementar
            </Button>
            <span>
                <strong>{count}</strong>
            </span>
            <Button success onClick={handleIncrement}>
                Incrementar
            </Button>
        </div>
    )

}