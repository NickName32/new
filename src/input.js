import { useState } from "react"

export const Input = ({name, label, regex, setForm}) => {
    const [value, setValue] = useState("")
    const [isMatch, setIsMatch] = useState(true)

    const onChange = (e) => {
        const isMatch = e.target.value.match(regex);

        setIsMatch(!!isMatch)
        setValue(e.target.value)
        setForm(oldValues => ({ ...oldValues, [name]: e.target.value }))
    }

    return (
        <div>
        <label htmlFor={name}>{label}</label>
        <input onChange={onChange} value ={value} name = {name} />
        {isMatch || <div>Неправильный  формат почты</div>}
      </div>
    )
}