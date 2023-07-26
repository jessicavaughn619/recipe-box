import { Button } from "react-native"
import { useState } from "react"

export default function FavoriteHeart({ favorite }) {
    [isFilled, setIsFilled] = useState(favorite)

    function handlePress() {
        setIsFilled(!isFilled)
    }

    return (
        <Button title={isFilled ? '❤️' : '🤍'} onPress={handlePress}></Button>
    )
}