document.addEventListener("DOMContentLoaded", ()=> {
    const dateE1 = document.getElementById("datums");
    const minE1 = document.getElementById("min_temp");
    const maxE1 = document.getElementById("max_temp");

    const tbody = document.querySelector("tbody");
    const summaryE1 = document.querySelector("span");

    const addBtn = document.querySelector(".button-group");

    if (!dateE1 || !minE1 || !maxE1) {
        console.warn("Trūkst kāds no obligātajiem elementiem!");
        return;
    }




    addBtn.addEventListener("click", async (e) => {
        const date = (dateE1.value || "").trim();
        const min = parseFloat(minE1.value);
        const max = parseFloat(maxE1.value);

        const err = validateInput(date, min, max);
        if (err) {
            alert(err);
            return;
        }

        const newRecord = {date, min, max};
        
    })


})