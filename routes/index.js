import renderComponent from 'preact-render-to-string'
import HomePage from '../pages/home.page'
import work from '../storage/work.js'

export default defineEventHandler(() => {
  return renderComponent(<HomePage data={work} />)
})
