const express = require('express')
const app = express()
const PORT = 8000

const characters = {
    'reginald': {
        'fullname': 'Sir Reginald Hargreeves',
        'nickname': 'The Monocle',
        'characterDetails': 'He is an alien disguised as a wealthy entrepreneur and world-renowned scientist. He received the Nobel Prize for his work in the cerebral advancement of the chimpanzee and founded the Umbrella Academy, a group of adopted super-powered children. Sir Reginald is cold-hearted, often mistreating and even experimenting on the children for his personal interests.[5] He refuses to let the children call him father, demanding that they address him by his codename The Monocle instead. When speaking to the children, he refers to them by number, which was assigned to the children in terms of usefulness, and has nothing to do with their actual destructive capabilities.'
    },
    'luther': {
        'fullname': 'Luther Hargreeves',
        'nickname': 'Number One',
        'characterDetails': 'is the primary and longest-lasting member of the Umbrella Academy. Luther\'s principal powers are super-strength and durability. Reginald Hargreeves injected a gorilla serum into Luther to save his life, turning Luther into a half-gorilla, half-human. His body can withstand the vacuum and cold of space as long as he has a helmet on. Using his super strength, he primarily fights hand to hand. After his career with The Umbrella Academy, he moved to the moon and lived at the Annihilation.'
    },
    'diego': {
        'fullname': 'Diego Hargreeves',
        'nickname': 'Number Two',
        'characterDetails': 'He is the reckless and rebellious member of the group, as described by Reginald Hargreeves. His main ability in the comics allows him to hold his breath indefinitely. He also has a strong talent for knife-throwing (he can change the direction of projectiles in midair; also, though it has not been explored, he may be able to use mild telekinesis) and close-quarter combat. He and Luther have a clear rivalry, and Diego is often unwilling to take orders from Luther. In his teenage years, he was the bassist in the punk rock band the Prime-8s alongside drummer Body (Inspector Lupo\'s assistant), and guitarist and lead vocalist Vanya Hargreeves / Number Seven (his adopted sister), who he has romantic feelings for.'
    },
    'allison': {
        'fullname': 'Allison Hargreeves',
        'nickname': 'Number Three',
        'characterDetails': 'Allison is the third member of the Umbrella Academy. Described as narcissistic, she has the ability to manipulate reality by lying, using the phrase "I heard a rumor..." to activate the power. After her career with The Umbrella Academy, she married her boyfriend, Patrick, and had a daughter named Claire. The couple has since divorced, and Patrick has full custody of their daughter, due to Allison using her special ability on Claire. She has a cybernetic left hand as Dr. Terminal devoured her original hand when she was a child. In "Dallas", when she goes to get vocal surgery, her arm is no longer drawn as if it were mechanical, suggesting that it too had been fixed. During the events of “Apocalypse Suite”, Allison had her throat slit by her sister Vanya (as the White Violin) to prevent Allison from utilizing her power. Saved by Luther, she was able to survive but was told she could never speak again. As a result, she was forced to communicate via a note pad. While she and her family were forced to live in the bunker beneath the academy\'s ruins, Allison tortured the slightly amnesiac and disabled Vanya by forcing Vanya to remember and relive her rampage. After her surgery, however, Allison had felt remorse and empathetic towards her sister, and began to support Vanya in physical therapy.'
    },
    'klaus': {
        'fullname': 'Klaus Hargreeves',
        'nickname': 'Number Four',
        'characterDetails': 'is the fourth member of the Umbrella Academy. Klaus\'s powers are speaking with the dead, channeling the dead so they speak through him, possessing people, broadcasting his consciousness through airwaves (allowing him to communicate through TVs), and telekinesis. In the Netflix adaptation, he also has the power of evocation, making spirits corporeal, capable of being seen by others and interacting with objects around them. Of his comic powers, he retains only the ability to speak to the dead in the Netflix adaptation, although he does not require a Ouija board to do so. He is portrayed by Robert Sheehan and Dante Albidone, as an adult and teenager, respectively, in the Netflix adaptation.[9] He has the words "Hello" and "Goodbye" tattooed on his right and left palms, respectively. It has been theorized by Mr. Pogo that Klaus has been doing drugs since he was a teenager. Klaus continues to communicate with his deceased brother Ben.'
    },
    'five': {
        'fullname': 'unnamed',
        'nickname': 'Number Five',
        'characterDetails': 'Number Five had a name but it was unspoken for so long that all of his siblings, and Five himself, forgot what it was. At the age of 10 (or 13 in the Netflix adaptation), Five disappeared by using his power of time travel to escape into the future. Sir Reginald always warned him that he "could never go back"; it took him 45 years to figure out how to go back in time. He aged normally during his time in the apocalypse, but upon returning to the past he regained the appearance he had the day he traveled forwards. His body is stuck in time and cannot age, as medical examinations prove that there are no signs of cell growth or death. In the Netflix adaptation, his body continues to age normally after reverting to its 13-year-old form, as Five bemoans "going through puberty twice." Five claims to have read accounts of the academy\'s immediate future and their connection to an apocalypse. While trying to go back in time to warn his adoptive brothers and sisters about the apocalypse, he worked with the Temps Aeternalis. He was taught to perform "micro jumps" in time, allowing him to move faster than the eye can see. In the Netflix adaptation, Five has the secondary power of teleportation in addition to time travel and does not have to be taught "micro-jumps". In the comics, he is considered "the perfect assassin," as he has had the DNA of the best killers in history infused into him. He has a 100% chance of killing if he decides to kill. It is revealed in the Dallas storyline that Five and Spaceboy are twin brothers. He also has a puppy named Mr. Pennycrumb.'
    },
    'ben': {
        'fullname': 'Ben Hargreeves',
        'nickname': 'Number Six',
        'characterDetails': 'Number Six possesses eldritch monsters from other dimensions under his skin (most often appearing as tentacles emerging from his torso). He is deceased from the results of a mission gone wrong. He is portrayed by Justin H. Min and Ethan Hwang, as an adult and a teenager, respectively, in the Netflix adaptation.[29] There is a memorial statue of him located in front of the academy. Even though he has been dead since before the start of the series, he has been portrayed as a member of The Umbrella Academy, appearing as his statue counterpart, in visions, or with Klaus, through his ability to talk to the dead. He can connect with Klaus physically, lending him his ability for a moment. CBR referred to Ben as a "Jiminy Cricket" type of character as he "reminds Klaus of his moral responsibilities even if the troubled Number Four refuses to listen".Ben\'s spirit manifests during the “Hotel Oblivion” storyline, appearing before his brother Klaus in the hospital after saving him from an overdose. It is shown that the portion of his chest that held the monster\'s tentacles is now an empty cavity, and it is hinted by Ben later in the issue that the monster had escaped from its dimension. It is also implied the Hotel Oblivion was not just made to be a supervillain prison, but a trap designed by Hargreeves to contain the beast, with the villains inside meant to be used as bait.'
    }, 
    'vanya': {
        'fullname': '',
        'nickname': '',
        'characterDetails': ''
    }, 
    'conductor': {
        'fullname': '',
        'nickname': '',
        'characterDetails': ''
    },
    'terminal': {
        'fullname': '',
        'nickname': '',
        'characterDetails': ''
    }, 
    'hazel and cha-cha': {
        'fullname': '',
        'nickname': '',
        'characterDetails': ''
    },
    'carmicheal': {
        'fullname': '',
        'nickname': '',
        'characterDetails': ''
    }, 
    'phinneus': {
        'fullname': '',
        'nickname': '',
        'characterDetails': ''
    },
    'abhijat': {
        'fullname': '',
        'nickname': '',
        'characterDetails': ''
    },
    'perseus': {
        'fullname': '',
        'nickname': '',
        'characterDetails': ''
    }, 
    'grace': {
        'fullname': '',
        'nickname': '',
        'characterDetails': ''
    }, 
    'zero': {
        'fullname': '',
        'nickname': '',
        'characterDetails': ''
    },
    'handler': {
        'fullname': '',
        'nickname': '',
        'characterDetails': ''
    },
    'leaonard': {
        'fullname': '',
        'nickname': '',
        'characterDetails': ''
    },
    'lila': {
        'fullname': '',
        'nickname': '',
        'characterDetails': ''
    },
    'raymond': {
        'fullname': '',
        'nickname': '',
        'characterDetails': ''
    }, 
    'sissy': {
        'fullname': '',
        'nickname': '',
        'characterDetails': ''
    },
    'unknown': {
        'fullname': 'unknown',
        'nickname': 'unknown',
        'characterDetails': 'unknown'
    }
}

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:character', (request, response) => {
    // to grab parameters from user
   let character = request.params.character.toLowerCase()
   if (characters[character]) {
        response.json(characters[character])
   } else {
       response.json(characters[unknown])
   }
    
})

app.listen(PORT, () => {
    console.log(`Server is now running on port ${PORT}. Betta Catch It`)
})