import { useEffect, useState } from "react";


function useDebounce (value, delay) {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
        const timerId = setTimeout(() => {
            setDebouncedValue(value);
        }, delay)

        return () => clearTimeout(timerId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value])

    return debouncedValue;
}

export default useDebounce;