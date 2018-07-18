import api from './api.js'

var app = new Vue({
	el: '#app',
	data: {
		wineries: null,
		featured: null,
		premium: null,
		claimed: null,
		unclaimed: null,
		userFilters: [],
		filtersState: [],
		filtersCounty: [],
		filtersCity: [],

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
		
		//get wineries list
		loadWineries: function(){ 
			api.getWineries()
				.then(wineries => this.wineries = wineries).then(() => this.sortWineries).then(() => this.loadFilters)
		},

		
		
		

	},



	computed:{

		//filter into status groups
		sortWineries: function(){
			const premiums = this.wineries.filter(winery => winery.status == 'Premium')
			this.premium = premiums
			const featureds = this.wineries.filter(winery => winery.status == 'Featured')
			this.featured = featureds
			const claimeds = this.wineries.filter(winery => winery.status == 'Claimed')
			this.claimed = claimeds
			const unclaimeds = this.wineries.filter(winery => winery.status == 'Unclaimed')
<<<<<<< HEAD
			if (unclaimeds.length)
				this.unclaimed = unclaimeds
=======
			this.unclaimed = unclaimeds
>>>>>>> richardUserView
			console.log(premiums)
			console.log(featureds)
			console.log(claimeds)
			console.log(unclaimeds)
			},

		
		//get state/county/city filters
		loadFilters: function(){
			
		}


			

	},

	beforeMount(){
		this.loadWineries()
	}

})
	



export default app
