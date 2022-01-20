// add email to recieve updates
import { useForm } from 'react-hook-form'

export default function MailList(){

    const { register, handleSubmit, formState: { errors }} = useForm();


    const complete = (e) => {
        e.preventDefault()
       alert("You have been added to the Mailing list!!")
 
    }
    return(
        <div>


            <div id='emailDiv'>
                <h3 id='emailH3'>Do you want to be the first to know about updates?</h3>
                <form class='form' onSubmit={handleSubmit(complete)}>
                    <div>
                        <lable id='nameLable'>Enter your E-mail:</lable>
                        <input type='email' name='requiredField' {...register('requiredField', {required:'Required'})}>
                            {/* <br/>
                            {errors.requiredField && <span>Please enter your email address</span>}
                            <br/> */}
                        </input>
                        <button type="submit">Sign me up!</button>
                    </div>
                </form>
            </div>
        </div>
    )
}