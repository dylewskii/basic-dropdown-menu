const example = ["Home", "About", "Contact"];

// Returns a UL element.
const createDropdown = function (dropdownItems) {
    const ul = document.createElement("ul");

    dropdownItems.forEach((item) => {
        const li = document.createElement("li");
        const a = document.createElement("a");

        a.textContent = item;
        a.href = "#";

        ul.appendChild(li);
        li.appendChild(a);
    })

    document.addEventListener("click", (e) => {
        // Return if click is outside of the dropdown
        const dropdownBtn = e.target.matches("[data-dropdown-btn]");
        if (!dropdownBtn && e.target.closest("[data-dropdown]") !== null) return;

        let currDropdown;
        if (dropdownBtn){
            currDropdown = e.target.closest("[data-dropdown]");
            currDropdown.classList.toggle("active");
        }

        // Close all dropdowns, aside from the curr one
        document.querySelectorAll("[data-dropdown-btn].active").forEach((dropdown) => {
            if (dropdown === currDropdown) return;

            dropdown.classList.remove("active");
        })
    })

    return ul;
}

const dropdownOne = createDropdown(example);
const dropdownMenu = document.querySelector(".dropdown-menu");

dropdownMenu.appendChild(dropdownOne)