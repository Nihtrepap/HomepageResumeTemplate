window.onload = function() {
    document.getElementById('frontQuote').innerHTML = QuoteFrom();
    document.getElementById('abtMe').innerHTML = AboutMe();
    document.getElementById('enjoys').innerHTML = Enjoying()
}

function QuoteFrom() {
    return `<h4>
    Took this picture enjoying an Irish coffee while trying to understand the C# language.</h4><Br> 
    <h1>-Philip Abrahamsson,<Br> Aspiring Software Developer</h1>`
}

function AboutMe() {
    return `<h2>Aspiring Software Developer !</h2>
    I have been working within the Graphical business for about ten years, 
    as a printer. But early in 2018 I started to look at programming. Why?<br><br>
    Well to start with, I used to be a superuser with the internal programs we used
    at work, and many times started to wonder how the programs were built.
    I made some research and eventually took the step into the world of programming.
    <br><br>
    A goal to become a Software Developer were set and I started to apply for courses, 
    to get where I am now.
    It took some time but I made the courses needed and now im currently
    a student who is striving to become better and better within programming. 
    `
}

function Enjoying() {
    return `<h2>When not practicing code</h2>
   
        `
}