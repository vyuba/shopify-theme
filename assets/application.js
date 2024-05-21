// Put your application javascript here
    let dropdownBtn = document.querySelectorAll(".dropdownBtn")
    let list = document.querySelectorAll(".list")
    console.log(list)

    dropdownBtn.forEach((btn, index) => {
        btn.addEventListener("click", () => {
            // Toggle the display of the corresponding list
            list.forEach((list, liIndex) => {
                if (liIndex === index) {
                    list.style.display = list.style.display === "block" ? "none" : "block";
                } else {
                    list.style.display = "none"; // Optionally hide other lists
                }
            });
        });
    });