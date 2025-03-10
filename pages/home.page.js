import { ShowOffItem } from '../components/showoff-item'
import BaseLayout from '../layouts/Base.layout'

export default function HomePage({ data }) {
  return (
    <BaseLayout>
      <div class="flex flex-col gap-2">
        <h1>reaper's | show off</h1>
        <p class="text-zinc-500">
          List of things I'm proud of
        </p>
      </div>
      <section class="my-20">
        {data.map((workItem, index) => {
          return (
            <ShowOffItem
              title={workItem.title}
              links={workItem.links}
              description={workItem.description}
              top={index > 0}
              bottom={index < data.length - 1}
            />
          )
        })}
      </section>
      <footer class="flex items-center justify-between">
        <p>
          Built for fun by{' '}
          <a
            class="text-zinc-500 hover:cursor-pointer transition-colors duration-150 ease-in hover:text-zinc-200 inline-flex items-center"
            href="https://reaper.is"
          >
            reaper
          </a>
        </p>
        <p>
          <a
            class="text-zinc-500 hover:cursor-pointer transition-colors duration-150 ease-in hover:text-zinc-200 inline-flex items-center"
            href="https://github.com/barelyhuman/showoff"
          >
            Source
          </a>
        </p>
      </footer>
    </BaseLayout>
  )
}
