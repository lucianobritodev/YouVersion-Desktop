window.addEventListener("DOMContentLoaded", () => {
  const removeElement = (selectors: string[]) => {
    selectors.forEach(selector => {     
      const element = document.querySelector(selector);
      if (element) {
        element.remove();
      }
    });
  };

  removeElement(["header", "div.VjFXz", "div.hgbeOc"]);
});
