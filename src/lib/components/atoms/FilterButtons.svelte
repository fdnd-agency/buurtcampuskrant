<script>
    import { Article } from '$lib';
    let {data} = $props();
</script>

<ul>
    <li class="filter"><a href="/district/nieuw-west">Alles</a></li>
    <li class="filter"><a href="?filter=de wijk">De wijk</a></li>
    <li class="filter"><a href="?filter=studenten">Studenten</a></li>
    <li class="filter"><a href="?filter=wijkpartner">Wijkpartner</a></li>
</ul>

<style>
    ul {
        display: flex;
        flex-wrap: wrap;
        gap: var(--sm);
        justify-content: center;
        padding: var(--sm) var(--md) var(--md);

        li {
            /* border: 1px solid var(--primary-color-general); */
            background-color: var(--primary-color-general);
            border-radius: var(--border-radius-md);
            padding: var(--xs) var(--sm);

            &:hover {
                /* background-color: var(--primary-color-general); */

                a {
                    color: var(--secondary-color-general);
                }
            }

            a {
                text-decoration: none;
                color: var(--secondary-color-general);
            }
        }
    }

</style>
