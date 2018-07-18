import api from './api.js'

var app = new Vue({
	el: '#app',
	data: {
		wineries: null,
		featured: null,
		premium: null,
		claimed: null,
		unclaimed: null,
		filterState: [],
		filterCounty: [],
		filterCity: [],
		icons: [
			'fab fa-facebook',
			'fab fa-twitter',
			'fab fa-pinterest',
			'fab fa-linkedin',
			'fab fa-youtube',
			'fab fa-snapchat',
			'fab fa-instagram'
		],
	},

	methods: {
		
		loadWineries: function(){ 
			api.getWineries()
				.then(wineries => this.wineries = wineries).then(() => this.sortWineries)

			},

		},

	computed:{

		sortWineries: function(){

			const premiums = this.wineries.filter(winery => winery.status == 'Premium')
			this.premium = premiums
			const featureds = this.wineries.filter(winery => winery.status == 'Featured')
			this.featured = featureds
			const claimeds = this.wineries.filter(winery => winery.status == 'Claimed')
			this.claimed = claimeds
			const unclaimeds = this.wineries.filter(winery => winery.status == 'Unclaimed')
			this.unclaimed = unclaimeds

			},

			

		},

	})
	



export default app
