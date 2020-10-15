export const createGameCanvas = (id, width, height) => {
  const canvas = document.createElement("canvas");
  canvas.setAttribute("id", id);
  const ctx = canvas.getContext("2d");
  canvas.width = width;
  canvas.height = height;
  document.body.appendChild(canvas);
  return ctx;
};
