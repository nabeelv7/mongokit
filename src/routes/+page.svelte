<script>
    import { page } from "$app/state";
    import ButtonGithub from "$lib/components/ButtonGithub.svelte";
    import { signOut } from "@auth/sveltekit/client";
</script>

{#if !page.data.session}
    <ButtonGithub>Continue with Github</ButtonGithub>
    <button class="btn btn-primary">Get Started</button>
{:else}
    <p>Welcome {page.data.session.user.name}</p>
    <button type="button" onclick={() => signOut()} class="btn btn-error">Logout</button>
{/if}