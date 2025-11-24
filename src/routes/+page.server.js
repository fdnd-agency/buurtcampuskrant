export async function load() {
    const res = await fetch('https://fdnd-agency.directus.app/items/buurtcampuskrant_stories/?fields=title,id,date,body,side_title,intro,cover,district,categories.buurtcampuskrant_categories_id.title&sort=-date&filter={"date":{"_nnull":"true"}}');
    const data = await res.json();

    return { article: data.data };
}

export const actions = {
	default: async ({ request }) => {
		const formData = await request.formData();
		const email = formData.get('email');

		
		try {
			const response = await fetch('https://fdnd.directus.app/items/messages', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					from: email,
					text: 'Je bent aangemeld voor de nieuwsbrief',
					for: 'buurtcampuskrant'
				})
			});
			
			const responseData = await response.json();

			console.log('Response data:', responseData);

			if (response.ok) {
				return { subscribed: true };
			} else {
				return { subscribed: false };
			}

		} catch (error) {
			
			return { subscribed: false };
		}
	}
};
