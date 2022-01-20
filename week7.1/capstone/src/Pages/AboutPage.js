import TeamForm from "../Components/TeamForm";

// i need to add an email field here!
export default function About(){
    return(
        <main id="aboutMain">
            <h1 id="header">Morgan Mysteries: Unmasked</h1>

            <body id="bodyAbout">
                <h1 id="h1">Hello My name is Kelci</h1>
                <h3>This is a place for me and kindred spirts to gather and talk about murder, spookey beings, and criptids!! </h3>

                <h4>Here is a little about the girl behind the madness</h4>
                <p id= "p1">I am 30 years old and I have always been in love with spooky season! Halloween is my favorite holiday, who doesnt love playing dress up.
                    But even more than that I LOVE going to haunted houses! There is somthing about the thrill of being scared.
                    But since Halloween is only once a year I had to get that thrill from somthing else. Scary Movies (que scary music)
                    My first scary movie was none other than The Texas Chainsaw Massicure, and come to find out that is loosely based on
                    a real life Serial killer. That is where my plung in to true crime all began. Along the way I have also become
                    obsessed with other spooky things like cursed items, ghost, and folklour. So if you have found yourself here im guessing 
                    you also have an intrest in the macabre! Well now we can talk about/learn about it together! 
                </p>
                <div>
                    <h2>Here are a few of my favoite spooky things:</h2>
                    <ul id="ul">
                        <li>Crime Count Down</li>
                        <li>The Exorcism of Emily Rose</li>
                        <li>Steven Kings: IT</li>
                        <li>Crime Junkie Podcast</li>
                        <li>Morbid: a true crime podcast</li>
                        <li>The Texas Chainsaw Massicure</li>
                    </ul>
                </div>
                <TeamForm/>
            </body>
        </main> 
    )
}