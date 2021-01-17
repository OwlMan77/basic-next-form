import styles from '../../styles/Home.module.css'
import { useForm } from 'react-hook-form'

export default function Form() {
    const { register, handleSubmit, errors } = useForm();
    const onSubmitHandler = (event) => {
        console.log(event)
    }
  return (
      <form onSubmit={handleSubmit(onSubmitHandler)} className={styles['user-form']}>
        <div className="form-input">
          <label htmlFor="firstName">First Name: </label>
          <input ref={register} name="firstName" type="text"/>
        </div>
        <div className="form-input">
          <label htmlFor="lastName">Last Name: </label>
          <input ref={register} name="lastName" type="text"/>
        </div>
        <div className="form-input">
          <label htmlFor="addressLine1">Address Line 1: </label>
          <input ref={register} name="addressLine1" type="text"/>
        </div>
        <div className="form-input">
          <label htmlFor="addressLine2">Address Line 2: </label>
          <input ref={register} name="addressLine2" type="text"/>
        </div>
        <div className="form-input">
          <label htmlFor="postcode">Postcode: </label>
          <input ref={register} name="postcode" type="text"/>
        </div>

        <input type="submit"/>
      </form>
  )
}
