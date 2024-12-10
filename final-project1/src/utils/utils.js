// prepends the public URL to the image file
export function loadImages(imagePath) {
  return `${process.env.PUBLIC_URL}/${imagePath}`;
}
