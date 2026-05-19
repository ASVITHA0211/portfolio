// PROJECT DROPDOWN
const headers = document.querySelectorAll(".project-header");

headers.forEach(header => {
    header.addEventListener("click", () => {

        const card = header.parentElement;
        const content = card.querySelector(".project-content");

        // Close other cards (premium UX)
        document.querySelectorAll(".project-card").forEach(c => {
            if (c !== card) {
                c.classList.remove("active");
                c.querySelector(".project-content").style.maxHeight = null;
            }
        });

        // Toggle current
        card.classList.toggle("active");

        if (card.classList.contains("active")) {
            content.style.maxHeight = content.scrollHeight + "px";
        } else {
            content.style.maxHeight = null;
        }
    });
});


// SCROLL ANIMATION
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }
    });
});

document.querySelectorAll("section, .project-card").forEach(el => {
    el.classList.add("hidden");
    observer.observe(el);
});


// IMAGE PREVIEW MODAL
const modal = document.getElementById("imgModal");
const modalImg = document.getElementById("modalImg");
const closeBtn = document.getElementById("closeModal");

document.querySelectorAll(".case-images img").forEach(img => {
    img.addEventListener("click", () => {
        modal.style.display = "flex";
        modalImg.src = img.src;
    });
});

closeBtn.onclick = () => modal.style.display = "none";
modal.onclick = () => modal.style.display = "none";


// DARK MODE (SAFE CHECK)
const toggle = document.getElementById("themeToggle");

if(toggle){
    toggle.onclick = () => {
        document.body.classList.toggle("dark");
    };
}