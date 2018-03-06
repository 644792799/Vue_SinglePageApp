import fetch from '../config/fetch'

export const articleExplore = () => fetch('/v1/cities', {
	type: 'guess'
}, 'fetchJsonp');

// articleExplore().then(res => {
//         this.hotcity = res;
//     })