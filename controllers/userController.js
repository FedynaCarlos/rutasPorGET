let userController = {
	list: function(req, res) {
		let users = [
			{ id: 1, name: 'dario' },
			{ id: 2, name: 'juan' },
			{ id: 3, name: 'mario' },
			{ id: 4, name: 'claudio' },
			{ id: 5, name: 'paco' }
		];
		res.render('userList', { users: users });
	},
	search: function(req, res) {
		let loQueBuscoElUsuario = req.query.search;

		let users = [
			{ id: 1, name: 'dario' },
			{ id: 2, name: 'juan' },
			{ id: 3, name: 'mario' },
			{ id: 4, name: 'claudio' },
			{ id: 5, name: 'paco' }
		];
		let usersResults = [];
		for (let i = 0; i < users.length; i++) {
			if (users[i].name.includes(loQueBuscoElUsuario)) {
				usersResults.push(users[i]);
			}
		}
		res.render('userResults', { usersResults: usersResults });
	}
};
module.exports = userController;
