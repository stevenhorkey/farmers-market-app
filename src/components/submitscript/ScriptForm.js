import React from 'react'
import { Field, reduxForm } from 'redux-form'

//Add url validation  => Required && look for numbers, date...
const validate = values => {
  const errors = {}
  if (!values.url) {
    errors.url = 'URL Required'
  } 
  // else if (!/(\d{4})([\/-])(\d{1,2})\2(\d{1,2})/.test(values.url)) {
  //   errors.url = 'Hmm, doesn’t look like you’ve submitted a link to a specific blog posts. Try again.'
  // }
  if (!values.introScript) {
    errors.introScript = 'Welcome your listeners - Script Required'
  }
  if (!values.mainScript) {
    errors.mainScript = 'Don\'t forget your content - Script Required'
  }
  if (!values.outroScript) {
    errors.outroScript = 'Wrap up your podcast - Script Required'
  }
  
  // }

  return errors
}

const warn = values => {
  const warnings = {}
  return warnings
}

const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
  <div>
    <input {...input} placeholder={label} type={type} className="form-control border-top-0 border-left-0 border-right-0" />
    <div className="error">{touched && ((error && <div className="label"><i className="ion-alert"> </i> &nbsp; {error}</div>) || (warning && <div>{warning}</div>))}</div>
  </div>

)

const textareaField = ({ input, label, type, meta: { touched, error, warning } }) => (
  <div>
    <textarea {...input} rows="5" values="" placeholder={label} className="form-control border-top-0 border-left-0 border-right-0" ></textarea>
    <div className="error">{touched && ((error && <div className="label"><i className="ion-alert"> </i> &nbsp; {error}</div>) || (warning && <div>{warning}</div>))}
  </div></div>

)

let ScriptForm = (props) => {
  const { handleSubmit, pristine, reset, submitting } = props
  return (

    <form onSubmit={handleSubmit} action="https://formspree.io/your@email.com" className="w-700">

      {/* link url */}
      <div className="form-group mb-5 mt-4">
        <label htmlFor="url">Link to your <strong>Article</strong>:</label>
        <Field component={renderField} type="text" label="https://yourblog.com/your-example/" name="url" />
      </div>

      {/* title */}
      <div className="form-group mb-5 mt-4">
        <label htmlFor="title">Podcast  <strong>Title</strong>:</label>
        <Field component={renderField} type="text" label="Leave this blank to keep the same title as the article..." name="title" />
      </div>

      {/* intro script */}
      <div className="form-group mb-5">
        <label htmlFor="introScript">Intro <strong>Script</strong>: <a className="script-help" href="https://docs.google.com/document/d/1MgfK1wiFOtAqaEtlvPC4aC2uq1vGlSbswBpLmTxiXsE/edit?usp=sharing" target="_blank"><i className="ion-information-circled"> </i> Intro Scripting Guide</a></label>
        <Field name="introScript" label="The script for how you want your podcast to start. How do you want to make your first impression? What are you all about?" component={textareaField} />
      </div>

      {/* main script */}
      <div className="form-group mb-5">
        <label htmlFor="mainScript">Main <strong>Script</strong>: <a className="script-help" href="https://docs.google.com/document/d/1ku2JtnXKmzJKdfK7CRUD4hQJXGeG8VOOD0j3vRUIdl4/edit?usp=sharing" target="_blank"><i className="ion-information-circled"> </i> Scripting Guide</a></label>
        <Field name="mainScript" label="The heart of your message. This is where you expose your story to new ears." component={textareaField} />
      </div>

      {/* end script */}
      <div className="form-group mb-5">
        <label htmlFor="outroScript">Outro <strong>Script</strong>: <a className="script-help" href="https://docs.google.com/document/d/1MgfK1wiFOtAqaEtlvPC4aC2uq1vGlSbswBpLmTxiXsE/edit?usp=sharing" target="_blank"><i className="ion-information-circled"> </i> Outro Scripting Guide</a></label>
        <Field name="outroScript" label="The script for how you want your podcast to end. What final words do you want said? What is your call to action?" component={textareaField} />
      </div>

      {/* style and feedback */}
      <div className="form-group mb-5">
        <label htmlFor="scriptNotes">Other <strong>Feedback and Preferences</strong>:</label>
        <Field name="scriptNotes" placeholder="Have any specific tips or ideas for how we can make this the best it can be? Let us know what you want." component={textareaField} />
      </div>

      {/* submit form */}
      <button type="submit" className="btn btn-primary text-uppercase px-3 pt-2">Voice My Story &nbsp;<i className="ion-android-arrow-forward"> </i></button>
    </form>

  )
}

ScriptForm = reduxForm({
  // a unique name for the form
  form: 'script',
  validate
})(ScriptForm)

export default ScriptForm