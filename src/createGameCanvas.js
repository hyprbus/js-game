export const createGameCanvas = (id) => {
  const canvas = document.createElement("canvas");
  canvas.setAttribute("id", id);
  const ctx = canvas.getContext("2d");
  canvas.width = 300;
  canvas.height = 300;
  document.body.appendChild(canvas);
  return ctx;
};
