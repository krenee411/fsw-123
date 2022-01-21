import MailList from "../Components/MailList";


export default function Home(){


    return(
        <body id='homeBody'>
            <link rel="stylesheet" href="http://use.fontawesome.com/releases/v5.15.3/css/all.css"></link>

            <h1 id='homeHeader'>Welcome to Obsession Diaries</h1>
                <div class='homeP'>
                    <h2>If you have found yourself here you to must have </h2> 
                    <h2> a taste for the more macabre things in life! Here you </h2>
                    <h2> will find all the scary things that you are<span id='ospan'> OBSESSED</span> with! </h2>
                    <h2>Consider this your big spooky scary home!</h2>
                    <h2>All your goulish needs in one place</h2>

                    <h2>New Podcast episodes and creepy killers are added daily</h2>
                    <h2>Be sure to check back in for updates or sign up for our </h2>
                    <h2>New Letter! You will always be up-to-date and in the know</h2>
                </div>
                    <table id= "table"> 
                        <h3>Our Blog updates:</h3>
                        <tr>
                            <th>Monday:</th><td>Haunted Tails</td>
                        </tr>
                        <tr>
                            <th>Wednesday:</th><td>Murder/ Missing</td>
                            
                        </tr>
                        <tr>
                            <th>Friday:</th><td>Cryptid Legands</td>
                        </tr>
                    </table>

                <div class='homeP'>
                    <h2> Cant get the voices in your head to stop?</h2>
                    <h2>Thats perfectly alright you can just drowed them</h2>
                    <h2>out with some of your favoite podcast!</h2>
                </div>

                <div id='findUs'>
                    <h2>If you want even more spookey content Follow us on Social Media</h2>
                    <a href="https://www.facebook.com/obsession.diaries" class='media'><i class="fab fa-facebook-square"></i></a>
                    <a href="https://www.instagram.com/obsession_diaries/" class='media'><i class="fab fa-instagram"></i></a>
                </div>
                 
            <MailList/>
        </body>
    )
}