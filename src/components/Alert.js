import React from 'react'

export default function Alert(props) {
    return (
        props.alert && <div className='container'>
            <div className={`alert alert-${props.result} alert-dismissible fade show`} role="alert">
                <strong>{props.alert}</strong>
            </div>
        </div>
    )
}
