
import React from 'react'

type InputProp = {
    type: string,
    required?: true,
    placeholder: string,
    name: string,
    refs: React.Ref<HTMLInputElement>,
}

const TextInput: React.FC<InputProp> =(props) => {
    return (
        <div>
            <div className="form-group">
                <input type={props.type} className="form-control" name={props.name} placeholder={props.placeholder} required={props.required} ref={props.refs} />
            </div>
        </div>
    )
}

export default TextInput;