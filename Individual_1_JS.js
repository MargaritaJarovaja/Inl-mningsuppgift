//Program som skriver ut de tio första kvadrattalen:

let tal1;
for (let tal1 = 1; tal1 < 11; tal1++) 
{
    resultat=tal1*tal1;
    console.log(tal1 + "*" + tal1 + "=" + resultat);
}

//Program som skriva ut hela multiplikationstabellen:

var result="x=>";
for (let i = 0; i < 11; i++) {
    for (let j = 0; j < 11; j++) {
      if (j==0 && i>0)
      {
        result+= "(" + i + ") ";   
      }
      else if (i==0 && j>0)
      {
        result+= "(" + j + ")"; 
      }
      else if (j>0 && i>0) 
      {
        result+=i*j + " "    
      }
        
    }
    
    result+= "\n";
}
console.log(result);

//Gissa talet-spel:

let answer = Math.floor(Math.random() * 100 + 1);
let UserTal;

do
{   let UserTal=prompt("Hej! Gissa talet 1-100: "); 
    Number(UserTal);  
    if (UserTal < answer) 
    {
        window.alert("För lite")   
    }
    else if (UserTal>answer) 
    {
        window.alert("För mycket")  
    }
    else if (UserTal==answer)
    {
        window.alert("Grattis! Du gissade rätt!")
        break;
    }
}while (UserTal!=answer);



//Program som översätter från svenska till rövarspråket:

let konsonanter=["b","c","d","j","f","g","h","k","l","m","n","p","q","r","s","t","v","x","z","w"];
let inputText=prompt("Skriv text: ");
let outputText="";

for (let i = 0; i < inputText.length; i++) {
    let bokstav=inputText[i];
        if (konsonanter.includes(bokstav.toLowerCase())) 
        {
           outputText+=(inputText[i]) + "o" + inputText[i].toLowerCase();            
        }
        else
        {
            outputText+=(inputText[i].toLowerCase());
        }   
}
alert("Resultat: " + outputText);

//Prototypbaserade arvshierarkin med personen och studenten:

class Person
{
    constructor(name,age,adres)
    {
        this.name=name;
        this.age=age;
        this.adres=adres;
    }

    Hungry() 
    {        
        console.log(this.name + " är hungrig!")        
    }

    Location()
    {
        console.log(this.name + " bor i " + this.adres);
    }

    Output ()
    {
        console.log(this.name + " är " + this.age + " år gammal och bor i  " + this.adres);
    }
   
}

class Student extends Person
{
    constructor(name,examen, teacher)
    {
        super(name);
        this.examen=examen;
        this.teacher=teacher;
    }

    Examination()
    {
        console.log(this.name + " har " + this.examen + " examen.");
    }

    Ledare()
    {
        console.log(this.examen + " lärare är " + this.teacher);
    }
    
    studenOutput()
    {
        console.log(this.name + " har " + this.examen + " examen och lärare är " + this.teacher);
    }
}/*Allt fungerar här och alla metoder visas i konsolen, men mellan anropen av metoderna 
i konsolen dyker det upp ett meddelande "undefined", jag kunde inte förstå varför. */

men=new Person("Margo","37","Norrtalje");
console.log(men.name);
console.log(men.age);
console.log(men.Hungry());
console.log(men.Location());
console.log(men.Output());
men2=new Student("Varvara", "Programmering"," Marcus T.");
console.log(men2.studenOutput());