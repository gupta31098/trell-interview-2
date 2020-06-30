const qBank=[
    {
        question:"Which of these is NOT a province in China?",
        answers:["Yangtze","Fujian","Sichuan","Guangdong"],
        correct:"Yangtze",
        questionId:"01"
    },
    {
        question:"The creator of the Enigma Cypher and Machine was of what nationality?",
        answers:["German","American","British","Polish"],
        correct:"German",
        questionId:"02"
    },
    {
        question:"Automobiles produced by Telsa Motors operate on which form of energy?",
        answers:["Electricity","Gasoline","Diesel","Nuclear"],
        correct:"Electricity",
        questionId:"03"
    },
    {
        question:"What direction does the Statue of Liberty face?",
        answers:["Southeast","Southwest","Northwest","Northeast"],
        correct:"Southeast",
        questionId:"04"
    },
    {
        question:"Who wrote the song &quot;You Know You Like It&quot;?",
        answers:["AlunaGeorge","DJ Snake","Steve Aoki","Major Lazer"],
        correct:"AlunaGeorge",
        questionId:"05"
    },
    {
        question:"In the game Pok&eacute;mon Conquest, how many kingdoms make up the region of Ransei?",
        answers:["17","18","15","16"],
        correct:"17",
        questionId:"06"
    },
    {
        question:"In 2013, virtual pop-star Hatsune Miku had a sponsorship with which pizza chain?",
        answers:["Domino&#039;s","Papa John&#039;s","Pizza Hut","Sabarro&#039;s"],
        correct:"Domino&#039;s",
        questionId:"07"
    },
    {
        question:"Townsend Coleman provided the voice for which turtle in the original 1987 series of &quot;Teenage Mutant Ninja Turtles&quot;?",
        answers:["Michelangelo","Leonardo","Donatello","Raphael"],
        correct:"Michelangelo",
        questionId:"08"
    },
    {
        question:"Who was &quot;Kung Fu Fighting&quot; in 1974?",
        answers:["Carl Douglas","The Bee Gees","Heatwave","Kool &amp; the Gang"],
        correct:"Carl Douglas",
        questionId:"09"
    },
    {
        question:"How many bytes are in a single Kibibyte?",
        answers:["1024","2400","1000","1240"],
        correct:"1024",
        questionId:"10"
    },
];
export default (n=10) => Promise.resolve(qBank.sort(()=>1-Math.random()).slice(0,n));