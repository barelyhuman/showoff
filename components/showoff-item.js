import outdent from 'outdent'

export function ShowOffItem({ title, links, top, bottom, description }) {
  return (
    <div class="flex">
      <div class="items-center w-20 flex flex-col">
        <div
          class="w-[1px] h-[7px]"
          bg={top ? 'zinc-800' : 'transparent'}
        ></div>
        <div class="h-2.5 w-2.5 flex relative">
          <div class="h-full w-full m-auto rounded-sm  bg-zinc-500"></div>
          <div class="absolute h-full blur w-full opacity-25 top-0 left-0 right-0 bottom-0 bg-zinc-50"></div>
        </div>
        <div
          class="flex-1 w-[1px]"
          bg={bottom ? 'zinc-800' : 'transparent'}
        ></div>
      </div>
      <div class="w-full px-8 pb-14 flex flex-col">
        <h2 class="mt-0 mb-2">{title}</h2>
        <div class="flex flex-col gap-4">
          <article class="text-zinc-400 font-normal font-mono leading-normal">{outdent`${description}`}</article>
          <div class="flex gap-4">
            {links.map((x, i) => (
              <a
                key={`${x.href}-${i}`}
                class="text-zinc-500 no-underline transition-colors duration-150 ease-in hover:cursor-pointer hover:text-zinc-200 inline-flex items-center "
                target="_blank"
                rel="noreferrer"
                href={x.href}
              >
                <span>{x.label}</span>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-4 w-4"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M17 7l-10 10"></path>
                    <path d="M8 7l9 0l0 9"></path>
                  </svg>
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
