<script>
	import "@fontsource-variable/dm-sans";
	import "../app.css";
	import { onMount } from "svelte";

	let { data, children } = $props();
	onMount(() => {
		console.log(data.session.user);
	});
</script>

{@render children()}
