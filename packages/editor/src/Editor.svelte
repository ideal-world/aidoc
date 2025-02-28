<script lang='ts'>
  import type { IwAiEditorProps } from './props'
  import Main from './lib/Main.svelte'
  import './editor.css'

  // eslint-disable-next-line no-use-before-define
  const props: IwAiEditorProps = $props()

  let content: string = $state(props.content)

  let count: number = $state(0)

  function increment1() {
    count += 1
    props.increment($state.snapshot(count))
  }

</script>

<div class='editor'>
  <h3>{props.id}</h3>
  <button onclick={() => increment1()}>
    点击次数: {count}
  </button>
  <textarea bind:value={content} class='w-full h-20 p-2 border'></textarea>
  <p class='text-red-700'>修改内容：{content}</p>
  <Main />
</div>

<style>
  .editor {
    padding: 10px;
    border: 1px solid #ccc;
  }
</style>
