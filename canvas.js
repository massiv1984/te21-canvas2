import Rectangle from './Rectangle.js'

export function setup(element) {
  const width = 800
  const height = 600
  const canvas = element.querySelector('#test')
  const context = canvas.getContext('2d')
  canvas.width = width
  canvas.height = height
  const rectangles = []

  rectangles.push(new Rectangle(1, 0, 100, 500, 'purple'))
  rectangles.push(new Rectangle(1, 0, 110, 500, 'blue'))
  rectangles.push(new Rectangle(1, 0, 120, 500, 'lightblue'))
  rectangles.push(new Rectangle(1, 0, 130, 500, 'green'))
  rectangles.push(new Rectangle(1, 0, 140, 500, 'yellow'))
  rectangles.push(new Rectangle(1, 0, 150, 500, 'orange'))
  rectangles.push(new Rectangle(1, 0, 160, 500, 'red'))

  function step() {
    context.clearRect(0, 0, width, height)
    rectangles.forEach(rectangle => {
      rectangle.update(canvas)
      rectangle.draw(context)
    })
    requestAnimationFrame(step)
  }
  requestAnimationFrame(step)
}