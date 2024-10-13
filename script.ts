const form = document.getElementById("resume-form") as HTMLFormElement;
const resumedisplayelement = document.getElementById("resume-dispaly") as HTMLDivElement;
form.addEventListener("submit",(event:Event)=>{
event.preventDefault();
const name= (document.getElementById("name") as HTMLInputElement).value
const email= (document.getElementById("email") as HTMLInputElement).value
const phone= (document.getElementById("phone") as HTMLInputElement).value
const education= (document.getElementById("education") as HTMLInputElement).value
const experience= (document.getElementById("experience") as HTMLInputElement).value
const skill= (document.getElementById("skills") as HTMLInputElement).value
const resumehtml = `
<h2><b>Resume</b></h2>
<h3>Personal Information</h3>
<p><b>Name: </b>${name}</p>
<p><b>Email: </b>${email}</p>
<p><b>Phone: </b>${phone}</p>
<h3>Education</h3>
<b>Education</b>
<p>${experience}</p>
<h3>Skills</h3>
<b>Skills</b>
<p>${skill}</p>
`;
if(resumedisplayelement){
    resumedisplayelement.innerHTML = resumehtml;
}

})