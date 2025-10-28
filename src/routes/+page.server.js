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



