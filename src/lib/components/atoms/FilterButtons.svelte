<script>
    import { Article } from '$lib';
    let {data} = $props();
</script>

<section>
    <ul>
        <li class="filter"><a href="/district/{data.data[0].district}">Alles</a></li>
        <li class="filter"><a href="?filter=de wijk">De wijk</a></li>
        <li class="filter"><a href="?filter=studenten">Studenten</a></li>
        <li class="filter"><a href="?filter=wijkpartner">Wijkpartner</a></li>
    </ul>

    <h2>Buurtcampus // {data.data[0].district}</h2>
    <p>Alle artikelen met het filter '{data.data[0].categories[0].buurtcampuskrant_categories_id.title}'</p>
</section>

<style>
    section {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

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

        h2, p {
            margin-inline: 0.5em;
        }

        p {
            padding-block: 0.5em;
        }
    }   
</style>
