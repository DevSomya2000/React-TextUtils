import React from 'react'

function Alert(props) {
    const toCapitalise = (newText) => {
        let letter = newText.charAt(0).toUpperCase()
        return letter + newText.slice(1)
    }

  return (
    props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
        <strong>{toCapitalise(props.alert.type)}</strong> : {props.alert.msg}
        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
  )
}

export default Alert