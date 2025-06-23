<script>
  import "@fontsource-variable/inter";
  import "../app.css";
  import { onMount } from "svelte";

  let { data, children } = $props();
  onMount(() => {
    console.log(data?.session?.user);
  });
</script>

{@render children()}
