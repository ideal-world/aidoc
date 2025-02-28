<script lang='ts'>
  import Editor from '@idealworld/ai-editor'

  let content = $state('# Hello Editor\n\nThis is a markdown editor example.')

  function increment(e) {
    content = e.detail
  }
</script>

<main class='container mx-auto p-4'>
  <h1 class='text-2xl font-bold mb-4'>Editor Demo</h1>
  <div class='border rounded-lg p-4'>
    <Editor id='001' content={content} increment={increment} />
  </div>

  <div class='mt-4'>
    <h2 class='text-xl font-semibold mb-2'>Current Content:</h2>
    <pre class='bg-gray-100 p-4 rounded'>{content}</pre>
  </div>
</main>
