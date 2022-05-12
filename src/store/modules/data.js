const state = () => ({
	items: [],
	uniqueId: "",
	name: "",
});

const mutations = {
	setItem(state, payload) {
		state.items = payload;
	},
	setUser(state, payload) {
		state.uniqueId = payload.uniqueId;
		state.name = payload.name;
	},
};

export default {
	namespaced: true,
	state,
	mutations,
};
