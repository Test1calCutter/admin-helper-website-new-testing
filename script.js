window.addEventListener('DOMContentLoaded', event => {
    const questions = document.getElementsByClassName("question");

    for (const question of questions) {
        const answer = question.querySelector(".answer");

        question.addEventListener("click", event => {
            if (answer.style.display === "block") {
                answer.style.display = "none";
            } else {
                answer.style.display = "block";
            }
        });
    }
    

    const invites = document.getElementsByClassName("invite");
    const support = document.getElementsByClassName("supportLink");

    for (const supports of support){
        supports.addEventListener("click", event=>{
            window.location.href="https://discord.gg/jbmhrAPUcE"
        })
    }

    for (const invite of invites ) {
        invite.addEventListener('click', event=>{
            window.location.assign("https://discord.com/api/oauth2/authorize?client_id=982628261718798384&permissions=67546916454103&scope=bot")
        })
    }
});
