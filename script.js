const button = document.getElementById("randomBtn");

    button.addEventListener("mouseover", () => {
        const x = Math.random() * (window.innerWidth - 100);
        const y = Math.random() * (window.innerHeight - 50);

        button.style.position = "absolute";
        button.style.left = `${x}px`;
        button.style.top = `${y}px`;
    });