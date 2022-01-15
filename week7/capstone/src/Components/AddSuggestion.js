//adding a suggestion to the blog page

export default function AddSug(){
    const sugSent = (e) => {
        e.preventDefault()
        alert(`Your suggestion has been sent! Check back later to see if it has been added!`)
    }

    return(
        <form class='form'>
          <div>
              <lable id='nameLable'>Name:</lable>
              <input type='text' ></input>
          </div>
          
          <div>
              <lable htmlFor="message" id="msgLable">Message:</lable>
              <textarea rows="5"></textarea>
          </div>
          <button type="submit" onClick={sugSent}>Submit</button>
          </form>
    )
}