
export default function TeamForm(){
    const sent = (e) => {
        e.preventDefault()
       alert("You application has been sent in you will be hearing from one of our team members soon!")
 
    }
    return(
        <div>


            <div id='emailDiv'>
                <h3 id='emailH3'>Do you want to be a part of the Team?</h3>
                <form class='form'>
                    <div>
                        <lable id='teamLable'>Send in your information:</lable>
                        <input type='text' placeholder="Name" required></input>
                        <input type='number' placeholder="Phone Number"></input>
                        <input type='email' placeholder="Email Address"></input>
                        <button type="submit" onClick={sent}>Sign me up!</button>
                    </div>
                </form>
            </div>
        </div>
    )
}