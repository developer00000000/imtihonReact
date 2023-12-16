
import { useState } from "react"


function useSearchValue(A) {
    const [value, setValue] = useState(A)
    return [value, setValue]
}

export default useSearchValue
