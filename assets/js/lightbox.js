(function () {
  const lb = document.getElementById("lightbox");
  const lbImg = document.getElementById("lightbox-img");
  const closeBtn = document.querySelector(".lightbox-close");

  if (!lb || !lbImg || !closeBtn) return;

  function open(src, alt) {
    lbImg.src = src;
    lbImg.alt = alt || "";
    lb.classList.add("open");
    lb.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }

  function close() {
    lb.classList.remove("open");
    lb.setAttribute("aria-hidden", "true");
    lbImg.src = "";
    document.body.style.overflow = "";
  }

  document.addEventListener("click", (e) => {
    const img = e.target.closest(".gallery img");
    if (!img) return;

    open(img.src, img.alt);
  });

  closeBtn.addEventListener("click", close);

  lb.addEventListener("click", (e) => {
    // click outside the image closes
    if (e.target === lb) close();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") close();
  });
})();
