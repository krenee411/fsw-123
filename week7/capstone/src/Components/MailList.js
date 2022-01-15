// add email to recieve updates


export default function MailList(){
    const complete = (e) => {
        e.preventDefault()
       alert("You have been added to the Mailing list!!")
 
    }
    return(
        <div>


            <div id='emailDiv'>
                <h3 id='emailH3'>Do you want to be the first to know about updates?</h3>
                <form class='form'>
                    <div>
                        <lable id='nameLable'>Enter your E-mail:</lable>
                        <input type='email' required></input>
                        <button type="submit" onClick={complete}>Sign me up!</button>
                    </div>
                </form>
            </div>
        </div>
    )
}