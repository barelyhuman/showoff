export default function BaseLayout({ children }) {
  return (
    <main bg="zinc-900" min-h="screen" text="zinc-50" font="sans">
      <link rel="stylesheet" href="/public/styles.css" />
      <link rel="stylesheet" href="/public/uno.css" />
      <section max-w="3xl" p="2" pt="10" mx="auto">
        {children}
      </section>
    </main>
  )
}
