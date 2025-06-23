<script>
  import { page } from "$app/state";
  import ButtonGithub from "$lib/components/ButtonGithub.svelte";
  import { Button } from "$lib/components/ui/button/index.js";
  import { signOut } from "@auth/sveltekit/client";
</script>

{#if !page.data.session}
  <ButtonGithub>Continue with Github</ButtonGithub>
{:else}
  <p>Welcome {page.data.session.user.name}! 👋</p>
  <Button variant="destructive" onclick={() => signOut()}>Logout</Button>
{/if}

<svelte:head>
  <title>Mongokit</title>
  <meta
    name="description"
    content="This is a boilerplate for SvelteKit with MongoDB as the database, Auth.js as the authentication system, and TailwindCSS for styling and Shadcn UI for beautiful and accessible components."
  />
</svelte:head>
