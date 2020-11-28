import React from 'react'

const TextInput: React.FC = () => (
    <div>
        <div className="form-group">
            <input type="text" className="form-control" placeholder="Nom et Prenom" required />
        </div>
    </div>
)

export default TextInput;