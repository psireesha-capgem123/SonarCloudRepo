/**
 * 
 */

var list = [ {
	date : "2017-01-01",
	type : "type1",
	amount : 100
	
}, {
	date : "2017-01-01",
	type : "type2",
	amount : 150
}, {
	date : "2017-01-02",
	type : "type1",
	amount : 200
} ], result = [];

list.forEach(function(hash) {
	return function(a) {
		if (!hash[a.date]) {
			hash[a.date] = {
				date : a.date,
				activities : []
			};
			result.push(hash[a.date]);
		}
		hash[a.date].activities.push({
			type : a.type,
			amount : a.amount
		});
	};
}(Object.create(null)));

console.log(result); 


