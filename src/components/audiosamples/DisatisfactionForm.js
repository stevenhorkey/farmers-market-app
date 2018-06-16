import React from 'react'
import { Field, reduxForm } from 'redux-form'

  //Add interests & goal input validation...
  const validate = values => {
    const errors = {}
    if (!values.goal) {
      errors.goal = 'This field is Required'
    }

    if (!values.interests) {
      errors.interests = 'This field is Required'
    }

    return errors
  }

  const warn = values => {
    const warnings = {}
    return warnings
  }

  const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
      <div>
        <input {...input} placeholder={label} type={type} className="form-control px-4 pt-2  card-shadow"  />
        <div className="error mt-3 ml-2 ">{touched && ((error && <div className="label"><i className="ion-alert"> </i> &nbsp; {error}</div>) || (warning && <div>{warning}</div>))}</div>
      </div>
      
  )

let DisatisfactionForm = (props) => {
  const { handleSubmit, pristine, reset, submitting } = props
  return (
    <form className= "mt-4" onSubmit={handleSubmit}>
    <div className="form-group mr-1 input-container interests">
      <div className="mb-2"><b><i className="ion-ios-help-outline" > </i> Why are you not interested?</b></div>
      <Field component={renderField} type="text" label="Write your answer..." name="interests"/>
      <br/>
      <br/>
      <div className="mb-2"><b><i className="ion-ios-help-outline" > </i> What would you want instead?</b></div>
      <Field component={renderField} type="text" label="Write your answer..." name="goal"/>

    </div>
    <button className="btn btn-primary px-4 pt-2 mt-3 text-uppercase card-shadow">Submit &nbsp;<i className="ion-android-arrow-forward"> </i></button> 
    </form>
  )
}

DisatisfactionForm = reduxForm({
  // a unique name for the form
  form: 'dissatisfaction',
  validate
})(DisatisfactionForm)

export default DisatisfactionForm